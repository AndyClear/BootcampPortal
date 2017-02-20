resource "aws_key_pair" "keypair" {
  key_name   = "${var.environment}-ssh-key"
  public_key = "${file("../private/keyfiles.pub")}"
}
