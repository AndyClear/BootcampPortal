resource "aws_instance" "controller" {
    ami = "${var.controller_ami}"
    instance_type = "${var.instancetype}"
    vpc_security_group_ids = ["${aws_security_group.controller.id}"]
    associate_public_ip_address = true
    private_ip = "10.0.${count.index}.10"
    subnet_id = "${element(var.subnets, count.index)}" 
    count = "${var.servers}" 
    key_name = "${var.ssh_key_name}"
    tags {
         Name = "${var.environment}-controller-${count.index}"
    }
}

