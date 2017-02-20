resource "aws_elb" "ci_elb" {
  name = "${var.user}-${var.environment}-ci-elb"

  listener {
    instance_port = 80
    instance_protocol = "http"
    lb_port = 80
    lb_protocol = "http"
  }

  cross_zone_load_balancing = true
}