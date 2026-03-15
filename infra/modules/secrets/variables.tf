variable "project" {
  description = "Nome do projeto"
  type        = string
}

variable "environment" {
  description = "Ambiente (dev, prod)"
  type        = string
}

variable "tags" {
  description = "Tags globais"
  type        = map(string)
  default     = {}
}
