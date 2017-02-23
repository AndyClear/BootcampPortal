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

resource "aws_route" "peering_route1" {
  route_table_id = "${aws_route_table.route_table.id}"
  destination_cidr_block = "10.99.0.0/16"
  vpc_peering_connection_id = "${aws_vpc_peering_connection.vpc_peering_connection.id}"
}

data "aws_subnet" "drone_subnet" {
  vpc_id = "${data.aws_vpc.drone_vpc.id}"
}

data "aws_route_table" "drone_route_table" {
  subnet_id = "${data.aws_subnet.drone_subnet.id}"
}

resource "aws_route" "peering_route2" {
  route_table_id = "${data.aws_route_table.drone_route_table.id}"
  destination_cidr_block = "10.0.0.0/16"
  vpc_peering_connection_id = "${aws_vpc_peering_connection.vpc_peering_connection.id}"
}
