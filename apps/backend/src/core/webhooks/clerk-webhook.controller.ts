import { Controller, Post, Req, RawBodyRequest, UnauthorizedException, HttpException, HttpStatus, Logger, Headers } from '@nestjs/common';
import { ClerkService } from '../auth/clerk.service';
import { Webhook } from 'svix';
import { Request } from 'express';

@Controller('webhooks/clerk')
export class ClerkWebhookController {
  private readonly logger = new Logger(ClerkWebhookController.name);

  constructor(private readonly clerkService: ClerkService) {}

  @Post()
  async handleWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('svix-id') svixId: string,
    @Headers('svix-timestamp') svixTimestamp: string,
    @Headers('svix-signature') svixSignature: string,
  ) {
    if (!svixId || !svixTimestamp || !svixSignature) {
      throw new UnauthorizedException('Missing Svix headers');
    }

    // O rawBody é fundamental para validar a assinatura
    const payload = req.rawBody?.toString('utf8');
    const secret = process.env.CLERK_WEBHOOK_SECRET;

    if (!payload) {
      throw new HttpException('Missing raw body', HttpStatus.BAD_REQUEST);
    }

    if (!secret) {
      this.logger.error('CLERK_WEBHOOK_SECRET is missing. Cannot verify webhook.');
      throw new HttpException('Webhook configuration error', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const wh = new Webhook(secret);

    let event: any;
    try {
      event = wh.verify(payload, {
        'svix-id': svixId,
        'svix-timestamp': svixTimestamp,
        'svix-signature': svixSignature,
      });
    } catch (err) {
      this.logger.error('Webhook verification failed', err);
      throw new UnauthorizedException('Invalid signature');
    }

    this.logger.log(`Received webhook event: ${event.type} for logic user ${event.data.id}`);

    const eventType = event.type;
    
    // Processamos inserções e atualizações consultando o profile completo e fresco diretamente na API
    if (eventType === 'user.created' || eventType === 'user.updated') {
      const { id } = event.data;
      
      try {
        const user = await this.clerkService.getUser(id);
        const tenantId = '00000000-0000-0000-0000-000000000000'; // Default Tenant ID para background tasks
        await this.clerkService.syncUserWithData(user, tenantId);
        this.logger.log(`User ${id} synchronized successfully via Webhook`);
      } catch (e) {
        this.logger.error(`Failed to synchronize user ${id}`, e);
        // Opcionalmente podemos retornar um Erro 500 para pedir pro Svix reenviar, mas vamos deixar transitar.
      }
    }

    return { success: true };
  }
}
