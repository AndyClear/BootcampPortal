resource "aws_subnet" "main" {
    count = "${var.worker_servers}"
    vpc_id = "${aws_vpc.main.id}"
    cidr_block = "10.0.${count.index}.0/24"
    availability_zone = "${element(data.aws_availability_zones.available.names, count.index % var.worker_servers)}"
    map_public_ip_on_launch = false
    tags {
        Name = "subnet-${var.environment}"
    }
}
