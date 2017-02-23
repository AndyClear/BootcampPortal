resource "aws_vpc" "ecs_vpc" {
  cidr_block = "10.99.0.0/16"
  enable_dns_hostnames = true
}

resource "aws_route_table" "external_rt" {
  vpc_id = "${aws_vpc.ecs_vpc.id}"
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = "${aws_internet_gateway.main.id}"
  }
}

resource "aws_route_table_association" "external_rta" {
  subnet_id = "${aws_subnet.ecs_subnet.id}"
  route_table_id = "${aws_route_table.external_rt.id}"
}

# If we were to have multiple build servers, we may expand this to have one subnet
# for each availability zone
resource "aws_subnet" "ecs_subnet" {
  vpc_id = "${aws_vpc.ecs_vpc.id}"
  cidr_block = "10.99.1.0/24"
  //availability_zone = "${var.availability_zone}"
  availability_zone = "${data.aws_availability_zones.available.names[0]}"
}

resource "aws_internet_gateway" "main" {
  vpc_id = "${aws_vpc.ecs_vpc.id}"
}
