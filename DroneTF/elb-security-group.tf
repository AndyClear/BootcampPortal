resource "elb_security_group" "elb_sg" {
  name = "${var.user}-${var.environment}-elb-sg"
  description = "Security associated to the Drone load balancer."

  ingress {
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = [
      "0.0.0.0/0"]
  }

}