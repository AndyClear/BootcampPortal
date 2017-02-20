data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-xenial-16.04-amd64-server-*"]
  }
  filter {
    name = "virtualization-type"
    values = ["hvm"]
  }
  owners = ["099720109477"] # Canonical
}
resource "aws_instance" "controller" {
    ami = "${data.aws_ami.ubuntu.id}"
    instance_type = "${var.instancetype}"
    vpc_security_group_ids = [""]
    associate_public_ip_address = true
    key_name = "${var.ssh_key_name}"
    tags {
         Name = "${var.environment}-controller"
    }
}

