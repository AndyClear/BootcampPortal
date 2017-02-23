resource "aws_vpc" "main" {
    cidr_block = "10.0.0.0/16"
    tags {
        Name = "bootcamp-${var.environment}"
    }

}

data "aws_vpc" "drone_vpc" {
    cidr_block = "10.99.0.0/16"
}

resource "aws_vpc_peering_connection" "vpc_peering_connection" {
    vpc_id = "${aws_vpc.main.id}"
    peer_vpc_id = "${data.aws_vpc.drone_vpc.id}"
    auto_accept = true
    peer_owner_id = "${var.peer_owner_id}"
    tags {
        Name = "CI-Prod Peering Connection"
    }
}
