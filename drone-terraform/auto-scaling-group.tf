resource "aws_autoscaling_group" "ci_asg" {
  //availability_zones = ["${data.aws_availability_zones.available.names}"]
  name = "${var.user}-${var.environment}-ci-asg"
  max_size = 1
  min_size = 1

  health_check_grace_period = 300
  health_check_type = "EC2"
  desired_capacity = 1//"${var.servers}"
  force_delete = true
  launch_configuration = "${aws_launch_configuration.ci_lc.name}"

  load_balancers = [
    "${aws_elb.ci_elb.id}"]
}