variable user {
  description = ""
}

variable environment {
  description = ""
}

variable "region" {
  description = "The region of AWS where the instance should be created."
  default = "eu-west-1"
}

variable "vpc_id"{
}

variable "web_instance_ami" {
  description = "The AMI for the web server."
}

variable "web_instance_type" {
  description = "The type of instance for the web server."
  default = "t2.micro"
}

variable subnets {
  description = "The subnets that the load balancer will cover"
}

variable key_name {
  description = "Name of an AWS keypair to use on instances"
}

variable DroneRemoteConfig {
 description = "The remote config value for Drone",
}

variable DroneRemoteDriver {
  description ="The remote driver value for Drone"
}

variable DroneMemoryAllocation {
  description = "The amount of memory to allocate to the Drone container"
  default = 1024
}

variable DroneCpuUnits {
  description = "How many CPU units to allocate to the Drone container"
  default = 512
}

variable DroneInstanceType {
  description = "The EC2 instance type to build"
  default = "m4.large"
}

variable IncomingHttpCidr {
  description = "A CIDR range to restrict incoming HTTP to the load balancer"
  default = "0.0.0.0/0"
}