#!/usr/bin/env python3
#
# find_img.py
#
# Searches for an image with distribution and version and purpose
#
# (c) Kurt Garloff <s7n@garloff.de>, 7/2025
# SPDX-License-Identifier: MIT
"This module finds the a distribution image with a given purpose"

import os
import sys
import openstack
# import logging


def warn(log, msg):
    "warn output"
    if log:
        log.warn(msg)
    else:
        print(f"WARN: {msg}", file=sys.stderr)


def debug(log, msg):
    "debug output"
    if log:
        log.debug(msg)
    else:
        print(f"DEBUG: {msg}", file=sys.stderr)


def img_sort_heuristic(images, distro, version, purpose):
    """Sort list to prefer old names"""
    # Do sorting magic (could be omitted)
    newlist = []
    distro = distro.lower()
    version = version.lower()
    purpose = purpose.lower()
    # 0th: Exact match old SCS naming scheme ("Ubuntu 24.04 Minimal")
    for img in images:
        newel = (img.id, img.name)
        if img.name.lower() == f"{distro} {version} {purpose}":
            newlist.append(newel)
        elif img.name.lower() == f"{distro} {purpose} {version}":
            newlist.append(newel)
    # 1st: Exact match old SCS naming scheme ("Ubuntu 24.04")
    for img in images:
        newel = (img.id, img.name)
        if img.name.lower() == f"{distro} {version}":
            newlist.append(newel)
    # 2nd: Fuzzy match old SCS naming scheme ("Ubuntu 24.04*")
    for img in images:
        newel = (img.id, img.name)
        if img.name.lower().startswith(f"{distro} {version}") and newel not in newlist:
            newlist.append(newel)
    # 3rd: Even more fuzzy match old SCS naming scheme ("Ubuntu*24.04")
    for img in images:
        newel = (img.id, img.name)
        if img.name.lower().startswith(f"{distro}") and img.name.lower().endswith(f"{version}") \
                and newel not in newlist:
            newlist.append(newel)
    # 4th: Rest
    for img in images:
        newel = (img.id, img.name)
        if newel not in newlist:
            newlist.append(newel)
    return newlist


def find_image(conn, distro, version, purpose="generic", strict=False, log=None):
    """Return a sorted list of ID,Name pairs that contain the wanted image.
       Empty list indicates no image has been found. The list is sorted such
       that (on SCS-compliant clouds), it will very likely contain the best
       matching, most recent image as first element.
       If strict is set, multiple matches are not allowed.
    """
    ldistro = distro.lower()
    # FIXME: The image.images() method only passes selected filters
    purpose_out = purpose
    images = [x for x in conn.image.images(os_distro=ldistro, os_version=version,
                                           sort="name:desc,created_at:desc", visibility="public")
              if x.properties.get("os_purpose") == purpose]
    if len(images) == 0:
        warn(log, f"No image found with os_distro={ldistro} os_version={version} os_purpose={purpose}")
        purpose_out = ""
        # images = list(conn.image.images(os_distro=ldistro, os_version=version,
        #                                 sort="name:desc,created_at:desc"))
        images = [x for x in conn.image.images(os_distro=ldistro, os_version=version,
                                               sort="name:desc,created_at:desc")
                  if "os_purpose" not in x.properties]
    if len(images) == 0:
        warn(log, f"No image found with os_distro={ldistro} os_version={version} without os_purpose")
        return []
    # Now comes sorting magic for best backwards compatibility
    if len(images) > 1:
        debug(log, f"Several {purpose_out} images found with os_distro={ldistro} os_version={version}")
        if strict:
            return []
        return img_sort_heuristic(images, distro, version, purpose)
    return [(img.id, img.name) for img in images]


def usage():
    "Usage hints (CLI)"
    print("Usage: find-img.py [-s] DISTRO VERSION [PURPOSE]", file=sys.stderr)
    print("Returns all images matching, latest first, purpose defaulting to generic", file=sys.stderr)
    print("[-s] sets strict mode where only one match is allowed.", file=sys.stderr)
    print("You need to have OS_CLOUD set when running this", file=sys.stderr)
    sys.exit(1)


def main(argv):
    "Main entry for CLI"
    if len(argv) < 3:
        usage()
    try:
        conn = openstack.connect(cloud=os.environ["OS_CLOUD"])
    except openstack.exceptions.ConfigException:
        print(f"No valid entry for cloud {os.environ['OS_CLOUD']}", file=sys.stderr)
        usage()
    except KeyError:
        print("OS_CLOUD environment not configured", file=sys.stderr)
        usage()
    conn.authorize()
    purpose = "generic"
    strict = False
    if argv[1] == "-s":
        argv = argv[1:]
        strict = True
    if len(argv) > 3:
        purpose = argv[3]
    images = find_image(conn, argv[1], argv[2], purpose, strict)
    for img in images:
        print(f"{img[0]} {img[1]}")
    return len(images) == 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
