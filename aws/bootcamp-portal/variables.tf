variable "environment" {
  description = "Staging or Production"
}

variable "controller_servers" {
  default = 1
}

variable "worker_servers" {
  default = 3
}