---
title: User Data Backup
type:
status: Draft
track: IaaS
---

This guide will explain common procedures for creating backups of user data accumulated in cloud resources such as volumes, images or ephemeral server disks.

## Scope

User data in the context of this guide describes data accumulated in cloud resources of a user at runtime.
This concerns primarily storage data of virtual machines stored at  at-rest.
This does not cover in-transit or in-use data such as network traffic, virtual machines' RAM contents or IaaS configuration and metadata of cloud resources.

### User Data

Given the mentioned scope, the following can be classified as user data:

- images stored in Glance
- virtual machine disks, either:
    - Ephemeral Storage stored in Nova
    - volumes stored in Cinder
- encryption keys stored as secrets in Barbican

The following sections will describe backup procedures for each of those resources individually.

## Image backup using download

Glance images may act as backup targets for other resources (such as volumes) but don't have a dedicated backup service for themselves.

When an image is to be backed up, it can be downloaded from the Glance image service and stored outside of the IaaS infrastructure for backup purposes.

In this case it is the user's responsibility to establish the backup procedure and appropriate target storage.
The API or the client may be used to initiate the download, for example:

~~~bash
openstack image save --file $TARGET_FILE_PATH $IMAGE_NAME_OR_ID
~~~

This or the underlying API request may be automated as part of a regular backup schedule involving the backup storage target on the user side.

## Ephemeral Storage backup using Glance images

<!-- TODO: add warning about `server image create` for servers with volumes *not* resulting in genuine 1:1 images but only snapshots -->

Ephemeral Storage disks of virtual machines can be backed up to Glance images easily by using the `createImage` Compute API action or the corresponding client command:

~~~bash
openstack server image create --name $IMAGE_NAME $SERVER_NAME_OR_ID
~~~

This will create a Glance image containing a one-to-one copy of the data on the Ephemeral Storage disk at the time of execution.

If the necessity arises to store this backup outside of the IaaS infrastructure, the download procedure as described in [Image backup using download](image-backup-using-download) may be used after the image creation.

## Volume data backup using Cinder Backup API

The following instructions only apply if the infrastructure offers the Cinder Backup API.

<!-- TODO: add note about Barbican encryption key dependency; invisibility of cinder_encryption_key_id -->
<!-- https://review.opendev.org/c/openstack/cinder/+/771081 -->

### Backup of detached volumes

<!-- TODO: volume backup create -->

### Backup of attached volumes

<!-- TODO: volume backup create --force -->

<!-- TODO: mention that `--force` results in a crash-consistent but not app-consistent backup! -->

## Volume data backup using Glance images

In case the Cinder Backup storage is not available in the IaaS infrastructure, Glance images can be used as a backup target instead.

:::note

Glance image backups of Cinder volumes only allow full backup copies and do not offer incremental or differential backup mechanisms.

:::

<!-- TODO: add warning about LUKS encrypted volumes resulting in raw LUKS data in images -->

<!-- TODO: add note about Barbican encryption key dependency -->

### Glance image backups of detached volumes

Volumes not attached to virtual machines can be directly copied into an image.
Such volumes can be identified by their status being `available`.
To backup a detached volume to a Glance image, directly use the corresponding image creation action:

~~~bash
openstack image create --volume $VOLUME_NAME_OR_ID $IMAGE_NAME
~~~

After the image creation has finished, a full backup copy of the volume will reside in the Glance storage backend.

If the necessity arises to store this backup outside of the IaaS infrastructure, the download procedure as described in [Image backup using download](image-backup-using-download) may be used after the image creation.

### Glance image backups of attached (in-use) volumes

<!-- TODO: mention that `--force` results in a crash-consistent but not app-consistent backup! -->

Cinder is unable to directly create Glance images from volumes which are attached to virtual machines.
To create backups of such volumes regardless a detour using volume snapshots can be used which will be described below.

1. Create a snapshot of the target volume while including the `force` parameter in the request:
    - `openstack volume snapshot create --volume $VOLUME_ID_OR_NAME $SNAPSHOT_NAME`
2. Create a new temporary volume based on the snapshot to act as backup source:
    - `openstack volume create --snapshot $SNAPSHOT_NAME $TEMP_VOLUME_NAME`
3. Wait until the volume creation is finished and the temporary volume reaches the `available` status.
4. Create a backup image of the temporary volume:
    - `openstack image create --volume $TEMP_VOLUME_NAME $IMAGE_NAME`
5. Wait until the image creation finishes and the target image reaches the `active` status.
6. Delete the temporary volume and snapshot:
    - `openstack volume delete $TEMP_VOLUME_NAME`
    - `openstack volume snapshot delete $SNAPSHOT_NAME`

A full backup copy of the volume now resides in the Glance storage backend.

If the necessity arises to store this backup outside of the IaaS infrastructure, the download procedure as described in [Image backup using download](image-backup-using-download) may be used after the image creation.

## Barbican secrets backup using download

<!-- TODO: add note that the plaintext secret is not 1:1 the LUKS passphrase/key due to hexlify processing in OpenStack -->

<!-- TODO: add warning about handling of plaintext secrets -->

Barbican secrets can be downloaded in plaintext using the corresponding API or client command:

~~~bash
openstack secret get --decrypt --file $TARGET_FILE_PATH $SECRET_URI
~~~

## Appendix

### Image creation action for servers with attached volumes

When the `createImage` action of the Compute API (`openstack server image create`) is used on virtual machines that have at least one volume attached, a snapshot will be created for each attached volume individually and referenced in the resulting image's metadata.

This happens regardless of whether the virtual machine has an Ephemeral Storage disk attached.
In case of an Ephemeral Storage disk, only the Ephemeral Storage is copied into the Glance image as a 1:1 copy.

In case of a virtual machine that has no Ephemeral Storage but only volumes, the `createImage` action leads to a Glance image that only consists of metadata (including the resulting volume snapshot references) but carries no actual binary data.

<!-- TODO: insert flowchart figure from issue here -->