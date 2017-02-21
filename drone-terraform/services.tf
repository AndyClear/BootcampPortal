resource "aws_elb" "drone-ci" {
    name = "drone-ci-elb"
    security_groups = ["${aws_security_group.load_balancers.id}"]
    subnets = ["${aws_subnet.ecs_subnet.id}"]

    listener {
        lb_protocol = "http"
        lb_port = 8000

        instance_protocol = "http"
        instance_port = 8000
    }

//    health_check {
//        healthy_threshold = 3
//        unhealthy_threshold = 2
//        timeout = 3
//        target = "HTTP:8000/"
//        interval = 5
//    }

    cross_zone_load_balancing = true
}

resource "aws_ecs_task_definition" "drone-ci" {
    family = "drone-ci"

    volume {
        name = "drone"
        host_path = "/drone"
    }

    volume {
        name = "docker-socket"
        host_path = "/var/run/docker.sock"
    }


    container_definitions = "${file("task-definitions/drone-ci.json")}"
}

resource "aws_ecs_service" "drone-ci" {
    name = "drone-ci"
    cluster = "${aws_ecs_cluster.ecs_cluster.id}"
    task_definition = "${aws_ecs_task_definition.drone-ci.arn}"
    iam_role = "${aws_iam_role.ecs_service_role.arn}"
    desired_count = 2
    depends_on = ["aws_iam_role_policy.ecs_service_role_policy"]

    load_balancer {
        elb_name = "${aws_elb.drone-ci.id}"
        container_name = "drone-server"
        container_port = 8000
    }
}
