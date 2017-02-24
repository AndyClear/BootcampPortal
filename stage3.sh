#!/bin/bash

ACCESS_KEY=$1
SECRET_KEY=$2

cd aws
terraform get
terraform plan -var "access_key=$ACCESS_KEY" -var "secret_key=$SECRET_KEY"
terraform apply -var "access_key=$ACCESS_KEY" -var "secret_key=$SECRET_KEY"