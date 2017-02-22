variable "environment" {
  description = "Staging or Production"
}

variable "instancetype" {
  description = "Type of infrastructure we want to spin up" 
  default = "t2.medium"
}

variable "ssh_key_name" {
  description = "SSH Key for Controller access"
}

variable "subnets" {
  type = "list" 
  description = "The subnet in which a controller is assigned"
}

variable "vpcid"
{
	description = "Holds our VPC ID"
}

variable "servers" {}
