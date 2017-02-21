resource "aws_route_table" "route_table" {
    vpc_id = "${aws_vpc.main.id}"
    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = "${aws_internet_gateway.gateway.id}"
    }

    tags {
        Name = "${var.environment}-route-table"
    }
}

resource "aws_route_table_association" "a" {
	count = "${var.servers}"
    subnet_id = "${element(aws_subnet.main.*.id, count.index)}"
    route_table_id = "${aws_route_table.route_table.id}"
}

resource "aws_internet_gateway" "gateway" {
    vpc_id = "${aws_vpc.main.id}"

    tags {
        Name = "${var.environment}-internet-gateway"
    }
}