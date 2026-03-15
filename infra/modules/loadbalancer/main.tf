# ============================================================
# Module: loadbalancer
# Recursos: Application Load Balancer, Target Groups, Listeners
# ============================================================

resource "aws_lb" "main" {
  name               = "${var.project}-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [var.security_group_id]
  subnets            = var.public_subnet_ids

  enable_deletion_protection = false # Dev/Aprendizado

  tags = var.tags
}

# ------------------------------------------------------------
# Target Group: Frontend (Next.js :3000)
# ------------------------------------------------------------
resource "aws_lb_target_group" "frontend" {
  name        = "${var.project}-frontend-tg"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip" # Obrigatorio para Fargate

  health_check {
    path                = "/"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 3
    unhealthy_threshold = 3
  }

  tags = var.tags
}

# ------------------------------------------------------------
# Target Group: Backend (NestJS :3001)
# ------------------------------------------------------------
resource "aws_lb_target_group" "backend" {
  name        = "${var.project}-backend-tg"
  port        = 3001
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip" # Obrigatorio para Fargate

  health_check {
    path                = "/v1/health" # Endpoint de health check no backend
    interval            = 30
    timeout             = 5
    healthy_threshold   = 3
    unhealthy_threshold = 3
  }

  tags = var.tags
}

# ------------------------------------------------------------
# Listener HTTP
# ------------------------------------------------------------
resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.main.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.frontend.arn
  }
}

# ------------------------------------------------------------
# Listener Rule: Roteamento Path-based (/api/* -> backend)
# ------------------------------------------------------------
resource "aws_lb_listener_rule" "backend" {
  listener_arn = aws_lb_listener.http.arn
  priority     = 10

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.backend.arn
  }

  condition {
    path_pattern {
      values = ["/api/*"]
    }
  }
}
