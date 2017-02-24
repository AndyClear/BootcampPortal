#!/bin/bash

# WORK IN PROGRESS ####

ACCESS_KEY=$1
SECRET_KEY=$2
GITHUB_SECRET=$3

# change to the drone directory
cd drone-terraform

# deploy the ecs cluster with drone
terraform plan -var "access_key=$ACCESS_KEY" -var "secret_key=$SECRET_KEY" -var "github_secret=$GITHUB_SECRET"

ELB_DNS=( $(aws elb describe-load-balancers  --load-balancer-names "drone-ci-elb" | jq -r '.LoadBalancerDescriptions[] | .DNSName') )

# need this as output from terraform
export DRONE_SERVER=$ELB_DNS:8000

# stage 2???

DRONE_TOKEN=$1

# how do we get this as an output from drone???
export DRONE_TOKEN=$DRONE_TOKEN

# add the drone secrets
# - all fixed
drone secret add --skip-verify=true capgemini-devops-bootcamp/BootcampPortal KUBE_TOKEN ##
drone secret add --skip-verify=true capgemini-devops-bootcamp/BootcampPortal KUBE_CA ##
drone secret add --skip-verify=true capgemini-devops-bootcamp/BootcampPortal DHUB_PASSWORD ##
drone secret add --skip-verify=true capgemini-devops-bootcamp/BootcampPortal KUBE_SERVER https://10.0.0.10:6443

# Will the drone pipeline be triggered automatically?
# Are they synchronous, i.e. can there be a pipeline first for the kube infra setup, then deploy code
# demo code change and automatic redeployment