output "cluster_endpoint" {
  description = "Endpoint de escrita do cluster Aurora"
  value       = aws_rds_cluster.aurora.endpoint
}

output "cluster_reader_endpoint" {
  description = "Endpoint de leitura do cluster Aurora"
  value       = aws_rds_cluster.aurora.reader_endpoint
}

output "database_name" {
  value = aws_rds_cluster.aurora.database_name
}
