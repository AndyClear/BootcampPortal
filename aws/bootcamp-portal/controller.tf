module "controller" {
 source = "controller"
 environment = "${var.environment}"
 subnets = ["${aws_subnet.main.*.id}"]
 ssh_key_name = "${aws_key_pair.keypair.key_name}"
 servers = "${var.controller_servers}"
 vpcid = "${aws_vpc.main.id}"
}

