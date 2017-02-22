[
    {
        "name": "drone-server",
        "image": "drone/drone:0.5",
        "cpu": 50,
        "memory": 512,
        "links": [],
        "portMappings": [
            {
                "containerPort": 8000,
                "hostPort": 8000,
                "protocol": "tcp"
            }
        ],
        "environment": [
            {
                "name": "DRONE_OPEN",
                "value": "true"
            },
            {
                "name": "DRONE_GITHUB",
                "value": "true"
            },
            {
                "name": "DRONE_GITHUB_CLIENT",
                "value": "510f573a2409e6deaf99"
            },
            {
                "name": "DRONE_GITHUB_SECRET",
                "value": "${github_secret}"
            },
            {
                "name": "DRONE_SECRET",
                "value": "whatever"
            }
        ],
        "essential": true,
        "mountPoints": [
            {
                "sourceVolume": "drone",
                "containerPath": "/var/lib/drone"
            }
        ]
    },
    {
        "name": "drone-agent",
        "image": "drone/drone:0.5",
        "cpu": 50,
        "memory": 512,
        "links": ["drone-server"],
        "portMappings": [
        ],
        "environment": [
            {
                "name": "DRONE_SERVER",
                "value": "ws://drone-server:8000/ws/broker"
            },
            {
                "name": "DRONE_SECRET",
                "value": "whatever"
            }
        ],
        "essential": true,
        "command": [ "agent" ],
        "mountPoints": [
            {
                "sourceVolume": "docker-socket",
                "containerPath": "/var/run/docker.sock"
            }
        ]
    }
]
