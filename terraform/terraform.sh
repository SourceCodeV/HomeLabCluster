#!/bin/bash

terraform init && terraform plan --var-file=variables.tfvars && terraform apply --parallelism=1 --var-file=variables.tfvars