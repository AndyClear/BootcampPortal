resource "aws_security_group" "elb_securitygroup" {
  name = "${var.environment}-elb"
  description = "Security Group for the ELB"
  vpc_id = "${aws_vpc.main.id}"

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

# Create a new load balancer
resource "aws_elb" "bootcamp-feedback-balancer" {
  name = "bootcamp-feedback-balancer"
  availability_zones = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
  security_groups = ["${aws_security_group.elb_securitygroup.id}"]
  subnets = ["${aws_subnet.main.*.id}"]

  listener {
    instance_port = 31000
    instance_protocol = "http"
    lb_port = 80
    lb_protocol = "http"
  }



  health_check {
    healthy_threshold = 2
    unhealthy_threshold = 2
    timeout = 3
    target = "HTTP:31000/"
    interval = 30
  }

  instances = ["${module.worker.instanceid}", "${module.controller.instanceid}"]
  cross_zone_load_balancing = true
  idle_timeout = 400
  connection_draining = true
  connection_draining_timeout = 400

  tags {
    Name = "bootcamp-feedback-terraform-elb"
  }
}