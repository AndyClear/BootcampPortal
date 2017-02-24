#!/bin/bash

KUBE_TOKEN=$1
KUBE_CA=$2
DHUB_PASSWORD=$3
DRONE_TOKEN=$4

ELB_DNS=( $(aws elb describe-load-balancers  --load-balancer-names "drone-ci-elb" | jq -r '.LoadBalancerDescriptions[] | .DNSName') )
export DRONE_SERVER=http://$ELB_DNS:8000


# how do we get this as an output from drone???
export DRONE_TOKEN=$DRONE_TOKEN

# add the drone secrets
# - all fixed
drone secret add --skip-verify=true capgemini-devops-bootcamp/BootcampPortal KUBE_TOKEN $1
drone secret add --skip-verify=true capgemini-devops-bootcamp/BootcampPortal KUBE_CA $2
drone secret add --skip-verify=true capgemini-devops-bootcamp/BootcampPortal DHUB_PASSWORD $3
drone secret add --skip-verify=true capgemini-devops-bootcamp/BootcampPortal KUBE_SERVER https://10.0.0.10:6443
