resource "aws_launch_configuration" "ci_lc" {
  name_prefix = "${var.user}-${var.environment}-ci-"
  security_groups = [
    "${aws_security_group.ci_sg.id}"
  ]

  image_id = "ami-13f84d60"
  instance_type = "${var.ci_instance_type}"

  key_name = "chris-dev-mac-ssh-key"
}
