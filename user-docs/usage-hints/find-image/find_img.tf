#!/usr/bin/env tofu apply -auto-approve
# Pass variables with -var os_purpose=minimal

variable "os_distro" {
  type    = string
  default = "ubuntu"
}

variable "os_version" {
  type    = string
  default = "24.04"
}

variable "os_purpose" {
  type    = string
  default = "generic"
}

terraform {
  required_providers {
    openstack = {
      source  = "terraform-provider-openstack/openstack"
      version = "~> 1.54.0"
    }
  }
}

provider "openstack" {
  # Your cloud config (or use environment variables OS_CLOUD)
}

data "openstack_images_image_v2" "my_image" {
  most_recent = true
  
  properties = {
    os_distro        = "${var.os_distro}"
    os_version       = "${var.os_version}"
    os_purpose       = "${var.os_purpose}"
  }
}

# Output the results for inspection
output "selected_image_id" {
  value = data.openstack_images_image_v2.my_image.id
}

output "selected_image_name" {
  value = data.openstack_images_image_v2.my_image.name
}

output "selected_image_created_at" {
  value = data.openstack_images_image_v2.my_image.created_at
}

output "selected_image_properties" {
  value = { 
	os_distro    = data.openstack_images_image_v2.my_image.properties.os_distro
	os_version   = data.openstack_images_image_v2.my_image.properties.os_version
	os_purpose   = data.openstack_images_image_v2.my_image.properties.os_purpose
  }
}

output "selected_image_tags" {
  value = data.openstack_images_image_v2.my_image.tags
}

