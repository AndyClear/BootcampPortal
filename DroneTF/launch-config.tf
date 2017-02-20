resource "aws_launch_configuration" "web_lc" {
  name_prefix = "${var.user}-${var.environment}-hello-app-"
  security_groups = [
    "${aws_security_group.web_sg.id}"
  ]

  image_id = "${var.web_instance_ami}"
  instance_type = "${var.web_instance_type}"

  key_name = "chris-mac-ssh-key"
}
