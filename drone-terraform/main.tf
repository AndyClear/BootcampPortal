provider "aws" {
    access_key = "${var.access_key}"
    secret_key = "${var.secret_key}"
    region = "${var.region}"
}

resource "aws_ecs_cluster" "ecs_cluster" {
    name = "${var.ecs_cluster_name}"
}

resource "aws_autoscaling_group" "ecs-cluster" {
    availability_zones = ["${data.aws_availability_zones.available.names[0]}"]
    name = "ECS ${var.ecs_cluster_name}"
    min_size = "${var.autoscale_min}"
    max_size = "${var.autoscale_max}"
    desired_capacity = "${var.autoscale_desired}"
    health_check_type = "EC2"
    launch_configuration = "${aws_launch_configuration.ecs_lc.name}"
    vpc_zone_identifier = ["${aws_subnet.ecs_subnet.id}"]
    tag {
        key                 = "Name"
        value               = "ECS Cluster Instance"
        propagate_at_launch = true
    }
}

resource "aws_launch_configuration" "ecs_lc" {
    name = "ECS ${var.ecs_cluster_name}"
    image_id = "${var.ami}"
    instance_type = "${var.instance_type}"
    security_groups = ["${aws_security_group.ecs_sg.id}"]
    iam_instance_profile = "${aws_iam_instance_profile.ecs.name}"
    key_name = "${aws_key_pair.ecs-key.key_name}"
    associate_public_ip_address = true
    user_data = "#!/bin/bash\necho ECS_CLUSTER='${var.ecs_cluster_name}' > /etc/ecs/ecs.config"
}
