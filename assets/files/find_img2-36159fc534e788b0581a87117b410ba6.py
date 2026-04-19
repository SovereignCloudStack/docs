#!/usr/bin/env python3
#
# find_img2.py
#
# Find images for opentofu/terraform
#
# (c) Kurt Garloff <s7n@garloff.de>, 11/2025
# SPDX-License-Identifier: MIT
"This module finds the a distribution image with a given purpose"

import sys
import json
import find_img

try:
    in_data = json.loads(sys.stdin.read())
    conn = find_img.openstack.connect()  # cloud=os.environ["OS_CLOUD"])
    images = find_img.find_image(conn, in_data["os_distro"], in_data["os_version"], in_data["os_purpose"])
    for img in images:
        print(f"DEBUG: {img[0]} {img[1]}", file=sys.stderr)
    if not (len(images)):
        print(f"No image found for {in_data}", file=sys.stderr)
        sys.exit(1)
    output = { "image_id": images[0][0],
               "image_name": images[0][1] }
    print(json.dumps(output))

except Exception as e:
    print(f"Error: {str(e)}", file=sys.stderr)
    sys.exit(2)
