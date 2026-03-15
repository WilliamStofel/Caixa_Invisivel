output "alb_dns_name" {
  value = module.loadbalancer.lb_dns_name
}

output "ecr_frontend_url" {
  value = module.registry.frontend_repository_url
}

output "ecr_backend_url" {
  value = module.registry.backend_repository_url
}

output "aurora_endpoint" {
  value = module.database.cluster_endpoint
}
