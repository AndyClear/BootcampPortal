resource "aws_security_group" "controller" {
  name = "${var.environment}-controller"
  description = "Security Group for Controller"
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
