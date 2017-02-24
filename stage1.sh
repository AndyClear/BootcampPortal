#!/bin/bash

ACCESS_KEY=$1
SECRET_KEY=$2
GITHUB_SECRET=$3

# change to the drone directory
cd drone-terraform

# deploy the ecs cluster with drone
terraform plan -var "access_key=$ACCESS_KEY" -var "secret_key=$SECRET_KEY" -var "github_secret=$GITHUB_SECRET"
terraform apply -var "access_key=$ACCESS_KEY" -var "secret_key=$SECRET_KEY" -var "github_secret=$GITHUB_SECRET"

# Login to drone, copy token, run stage 2
# stage 2 - configure ci pipeline

# Stage 3 - build the kube cluster
# Activate the repository on drone

# Will the drone pipeline be triggered automatically?
# Are they synchronous, i.e. can there be a pipeline first for the kube infra setup, then deploy code
# demo code change and automatic redeployment