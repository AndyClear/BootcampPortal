variable "environment" {
  description = "Staging or Production"
}

variable "controller_servers" {
  default = 1
}

variable "worker_servers" {
  default = 3
}

variable "peer_owner_id" {
  description = "AWS Owner ID"
  default = "481807661051"
}
