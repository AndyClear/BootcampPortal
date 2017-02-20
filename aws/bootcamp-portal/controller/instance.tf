resource "aws_instance" "controller" {
    ami = "${data.aws_ami.ubuntu.id}"
    instance_type = "t2.micro"
    vpc_security_group_ids = [""]
    tags {
        Name = "HelloWorld"
    }
}
