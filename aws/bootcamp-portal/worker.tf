module "worker" {
 source = "worker"
 environment = "${var.environment}"
 subnets = ["${aws_subnet.main.*.id}"]
 ssh_key_name = "${aws_key_pair.keypair.key_name}"
 servers = "${var.worker_servers}"
 vpcid = "${aws_vpc.main.id}"
}
