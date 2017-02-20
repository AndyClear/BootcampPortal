module "controller" {
 source = "controller"
 environment = "${var.environment}"
 subnets = ["${aws_subnet.main.*.id}"]
 ssh_key_name = "${aws_key_pair.keypair.key_name}"
}
