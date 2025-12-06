#!/usr/bin/env tofu apply -auto-approve
# Pass variables with -var os_purpose=minimal
# (c) Kurt Garloff <s7n@garloff.de>
# SPDX-License-Identifier: MIT

variable "os_distro2" {
  type    = string
  default = "ubuntu"
}

variable "os_version2" {
  type    = string
  default = "24.04"
}

variable "os_purpose2" {
  type    = string
  default = "generic"
}

#terraform {
#  required_providers {
#    openstack = {
#      source  = "terraform-provider-openstack/openstack"
#      version = "~> 1.54.0"
#    }
#  }
#}

#provider "openstack" {
#  # Your cloud config (or use environment variables OS_CLOUD)
#}

# Call python find_img.py to find best image
data "external" "my_image2" {
  program = ["python3", "${path.module}/find_img2.py"]

  query = {
    os_distro        = "${var.os_distro2}"
    os_version       = "${var.os_version2}"
    os_purpose       = "${var.os_purpose2}"
  }
}

# Output the results for inspection
output "selected_image2" {
  value = {
    id   = data.external.my_image2.result.image_id
    name = data.external.my_image2.result.image_name
  }
}

