variable "project" {
  description = "Nome do projeto"
  type        = string
}

variable "tags" {
  description = "Tags globais"
  type        = map(string)
  default     = {}
}
