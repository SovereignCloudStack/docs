#!/bin/bash
#
# Find Image by properties
#
# (c) Kurt Garloff <s7n@garloff.de>, 7/2025
# SPDX-License-Identifier: MIT

usage()
{
	echo "Usage: find-img [-s] distro version [purpose]"
	echo "Returns all images matching, latest first, purpose defaults to generic"
	echo "If some images have the wanted purpose, only those will be shown"
}

get_images_raw()
{
	# global OS_RESP
	DIST=$(echo "$1" | tr A-Z a-z)
	VERS="$2"
	#VERS=$(echo "$2" | tr A-Z a-z)
	shift; shift
	#echo "DEBUG: openstack image list --property os_distro=$DIST --property os_version=$VERS $@ -f value -c ID -c Name --sort created_at:desc"
	OS_RESP=$(openstack image list --property os_distro="$DIST" --property os_version="$VERS" $@ -f value -c ID -c Name --sort name:desc,created_at:desc)
}


img_sort_heuristic()
{
	# Acts on global OS_RESP
	# FIXME: We could do all sorts of advanced heuristics here, looking at the name etc.
	# We only do a few pattern matches here
	# distro version purpose
	local NEW_RESP0=$(echo "$OS_RESP" | grep -i "^[0-9a-f\-]* $1 $2 $3\$")
	# distro version purpose with extras appended
	local NEW_RESP1=$(echo "$OS_RESP" | grep -i "^[0-9a-f\-]* $1 $2 $3" | grep -iv "^[0-9a-f\-]* $1 $2 $3\$")
	# distro purpose version
	local NEW_RESP2=$(echo "$OS_RESP" | grep -i "^[0-9a-f\-]* $1 $3 $2\$")
	# distro purpose version with extras appended
	local NEW_RESP3=$(echo "$OS_RESP" | grep -i "^[0-9a-f\-]* $1 $3 $2" | grep -iv "^[0-9a-f\-]* $1 $3 $2\$")
	# distro version
	local NEW_RESP4=$(echo "$OS_RESP" | grep -i "^[0-9a-f\-]* $1 $2\$")
	# distro version with extras (but not purpose)
	local NEW_RESP5=$(echo "$OS_RESP" | grep -i "^[0-9a-f\-]* $1 $2" | grep -iv "^[0-9a-f\-]* $1 $2\$" | grep -iv "^[0-9a-f\-]* $1 $2 $3")
	# distro extra version (but extra != purpose)
	local NEW_RESP6=$(echo "$OS_RESP" | grep -i "^[0-9a-f\-]* $1 .*$2\$" | grep -iv "^[0-9a-f\-]* $1 $3 $2\$" | grep -iv "$1 $2\$")
	OS_RESP=$(echo -e "$NEW_RESP0\n$NEW_RESP1\n$NEW_RESP2\n$NEW_RESP3\n$NEW_RESP4\n$NEW_RESP5\n$NEW_RESP6" | sed '/^$/d')
}

get_images()
{
	PURPOSE="${3:-generic}"
	PURP="$PURPOSE"
	get_images_raw "$1" "$2" --property os_purpose=$PURPOSE
	if test -z "$OS_RESP"; then 
		echo "WARN: No image found with os_distro=$1 os_version=$2 os_purpose=$PURPOSE" 1>&2
		PURP=""
		# We're screwed as we can not filter for the absence of os_purpose with CLI
		# We could loop and do an image show and then flter out, but that's very slow
		get_images_raw "$1" "$2" # --property os_purpose=
		# FIXME: We need to filter out images with os_purpose property set
		NEW_RESP=""
		while read ID Name; do
			PROPS=$(openstack image show $ID -f value -c properties)
			if test $? != 0; then continue; fi
			if echo "$PROPS" | grep os_purpose >/dev/null 2>&1; then continue; fi
			NEW_RESP=$(echo -en "$NEW_RESP\n$ID $Name")
		done < <(echo "$OS_RESP")
		OS_RESP=$(echo "$NEW_RESP" | sed '/^$/d')
	fi
	NR_IMG=$(echo "$OS_RESP" | sed '/^$/d' | wc -l)
	if test "$NR_IMG" = "0"; then echo "ERROR: No image found with os_distro=$1 os_version=$2" 1>&2; return 1
	elif test "$NR_IMG" = "1"; then return 0
	else
		echo "DEBUG: Several $PURP images matching os_distro=$1 os_version=$2" 1>&2;
		if test -n "$STRICT"; then return 1; fi
		img_sort_heuristic "$1" "$2" "$PURPOSE"
		return 0
	fi
}

if test -z "$OS_CLOUD" -a -z "$OS_AUTH_URL"; then
	echo "You need to configure clouds.yaml/secure.yaml and set OS_CLOUD" 1>&2
	exit 2
fi
if test "$1" = "-s"; then STRICT=1; shift; fi
if test -z "$1"; then usage; exit 1; fi

get_images "$@"
RC=$?
echo "$OS_RESP"
(exit $RC)
