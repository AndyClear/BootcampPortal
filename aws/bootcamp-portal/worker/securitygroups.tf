resource "aws_security_group" "worker" {
  name = "${var.environment}-worker"
  description = "Security Group for Worker"
  vpc_id = "${var.vpcid}"

  ingress {
      from_port = 0
      to_port = 0
      protocol = "-1"
      cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
      from_port = 0
      to_port = 0
      protocol = "-1"
      cidr_blocks = ["0.0.0.0/0"]
  }
}
