variable "access_key" {
    description = "The AWS access key."
}

variable "secret_key" {
    description = "The AWS secret key."
}

variable "region" {
    description = "The AWS region to create resources in."
    default = "eu-west-1"
}

variable "ecs_cluster_name" {
    description = "The name of the Amazon ECS cluster."
    default = "ci-cluster"
}

variable "ami" {
    description = "Which AWS ECS optimized image to use."
    default = "ami-a7f2acc1"
}

variable "autoscale_min" {
    default = "1"
    description = "Minimum number of EC2 instances."
}

variable "autoscale_max" {
    default = "1"
    description = "Maximum number of EC2 instances."
}

variable "autoscale_desired" {
    default = "1"
    description = "Desired number of EC2 instances."
}

variable "instance_type" {
    default = "t2.medium"
}

variable "ssh_pubkey_file" {
    description = "Path to an SSH public key"
    default = "~/.ssh/id_rsa.pub"
}
