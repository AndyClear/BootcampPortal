resource "aws_instance" "worker" {
    ami = "${var.worker_ami}"
    instance_type = "${var.instancetype}"
    vpc_security_group_ids = ["${aws_security_group.worker.id}"]
    associate_public_ip_address = true
    subnet_id = "${element(var.subnets, count.index)}" 
    count = "${var.servers}" 
    private_ip = "10.0.${count.index}.20"
    key_name = "${var.ssh_key_name}"
    tags {
         Name = "${var.environment}-worker-${count.index}"
    }
}

