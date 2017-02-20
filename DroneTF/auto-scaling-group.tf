resource "aws_autoscaling_group" "web_asg" {
  availability_zones = ["${data.aws_availability_zones.available.names}"]
  name = "${var.user}-${var.environment}-web-asg"
  max_size = 1
  min_size = 1

  health_check_grace_period = 300
  health_check_type = "EC2"
  desired_capacity = "${var.servers}"
  force_delete = true
  launch_configuration = "${aws_launch_configuration.web_lc.name}"

  load_balancers = [
    "${aws_elb.web_elb.id}"]
}