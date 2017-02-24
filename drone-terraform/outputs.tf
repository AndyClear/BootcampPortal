output "public_dns" {
  value = "${aws_elb.drone-ci.dns_name}"
}