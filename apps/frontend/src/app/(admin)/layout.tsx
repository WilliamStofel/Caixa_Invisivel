import { AdminHeader } from "@/components/layout/AdminHeader";
import { redirect } from "next/navigation";
import { auth } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Retorna userId ou null caso não exista
    const { userId } = await auth();

    if (!userId) {
        redirect("/login");
    }

    // Nota: Como não temos papéis mapeados diretamente aqui de forma simples ainda (Clerk RBAC requer permissões customizadas via webhook ou metadados),
    // apenas validaremos se o usuário está autenticado para simplificar ou buscar da API posteriormente.
    // Em uma versão de produção mais robusta, você buscaria do profile do metadata no Clerk.

    return (
        <div className="flex-1 bg-slate-50 min-h-screen flex flex-col overflow-x-hidden">
            <AdminHeader />
            <div className="p-4 md:p-8 flex-1">
                {children}
            </div>
        </div>
    );
}
