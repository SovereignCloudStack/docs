---
title: User Data Backup
type:
status: Draft
track: IaaS
---

This guide will explain common procedures for creating backups of user data accumulated in cloud resources such as volumes, images or ephemeral server disks.

## Glossary

| Term | Explanation |
|---|---|
| Virtual Machine | Equals the `server` resource in Nova. |
| Ephemeral Storage | Disk storage directly supplied to a virtual machine by Nova. Different from volumes. |
| (Glance) Image | IaaS resource usually storing raw disk data. Managed by the Glance service. |
| (Cinder) Volume | IaaS resource representing block storage disk that can be attached as a virtual disk to virtual machines. Managed by the Cinder service. |
| (Volume) Snapshot | Thinly-provisioned copy-on-write snapshots of volumes. Stored in the same Cinder storage backend as volumes. |
| Volume Type | Attribute of volumes determining storage details of a volume such as backend location or whether the volume will be encrypted. |
| (Barbican) Secret | IaaS resource storing cryptographic assets such as encryption keys. Managed by the Barbican service. |

## Scope

User data in the context of this guide describes data accumulated in cloud resources of a user at runtime.
This concerns primarily storage data of virtual machines stored at at-rest.
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

:::caution

When using the `createImage` Compute API action (e.g. via the `openstack server image create` command) on a virtual machine that has volumes attached to it in addition to its Ephemeral Storage disk, the volumes will not be backed up into the image. Instead, a snapshot will be created for each attached volume and referenced in the image metadata. This does not replace genuine volume backups.

See the appendix section for further details.

:::

Ephemeral Storage disks of virtual machines can be backed up to Glance images easily by using the `createImage` Compute API action or the corresponding client command:

~~~bash
openstack server image create --name $IMAGE_NAME $SERVER_NAME_OR_ID
~~~

This will create a Glance image containing a one-to-one copy of the data on the Ephemeral Storage disk at the time of execution.

If the necessity arises to store this backup outside of the IaaS infrastructure, the download procedure as described in [Image backup using download](image-backup-using-download) may be used after the image creation.

## Volume data backup using Cinder Backup API

The following instructions only apply if the infrastructure offers the Cinder Backup API.

:::note

Backups of volumes using a volume type that uses encryption will retain their encryption and the dependency on the encryption key stored as a secret in Barbican.
These backups can only be restored when the Barbican service is available and still has the corresponding key.

:::

<!-- TODO: verify the behavior of Cinder backups and Barbican keys -->

:::info

Backups created by the Cinder Backup API cannot be transferred outside of the IaaS infrastructure by a user.
This can only be achieved by using Glance images.
See the section about volume data backup using Glance images for details.

:::

### Backup of detached volumes

Backups can be created using the Cinder Backup API or the corresponding client commands:

~~~bash
openstack volume backup create $VOLUME_NAME_OR_ID
~~~

Further backups of the same volume can subsequently be created as incremental backups using the following command:

~~~bash
openstack volume backup create --incremental $VOLUME_NAME_OR_ID
~~~


### Backup of attached volumes

:::note

When creating backups of attached (in-use) volumes, the `force` parameter has to be used. These backups capture a state of the full volume at runtime. They will be crash-consistent but not app-consistent.

:::

In case of attached (in-use) volumes, backups can only be created while also specfiying the `force` parameter:

~~~bash
openstack volume backup create --force $VOLUME_NAME_OR_ID
~~~

Further backups of the same volume can subsequently be created as incremental backups using the following command:

~~~bash
openstack volume backup create --force --incremental $VOLUME_NAME_OR_ID
~~~

## Volume data backup using Glance images

In case the Cinder Backup storage is not available in the IaaS infrastructure, Glance images can be used as a backup target instead.
Such images may also subsequently be downloaded to transfer the backup outside of the IaaS infrastructure.

:::note

Glance image backups of Cinder volumes only allow full backup copies and do not offer incremental or differential backup mechanisms.

:::

:::caution

When creating images from volumes with a volume type that uses encryption, the resulting image will contain the raw LUKS-encrypted blocks of the volume.
This data is only useful together with the corresponding encryption key.
Refer to the Barbican secrets section for instructions.

:::

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

Cinder is unable to directly create Glance images from volumes which are attached to virtual machines.
To create backups of such volumes regardless a detour using volume snapshots can be used which will be described below.

:::note

When creating snapshots of attached (in-use) volumes, the `force` parameter has to be used. These snapshots capture a state of the full volume at runtime. They will be crash-consistent but not app-consistent.

:::

1. Create a snapshot of the target volume while including the `force` parameter in the request:
    - `openstack volume snapshot create --volume $VOLUME_NAME_OR_ID $SNAPSHOT_NAME`
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

:::danger

Secrets downloaded from Barbican will be in plaintext, which means that the secret is unprotected once received from the API.
Before downloading secrets from Barbican make sure that a secure target environment is established for receiving and securely storing the secret's contents.

:::

Barbican secrets can be downloaded in plaintext using the corresponding API or client command:

~~~bash
openstack secret get --decrypt --file $TARGET_FILE_PATH $SECRET_URI
~~~

### Retrieving volume encryption keys from Barbican

In case of encrypted volumes (i.e. using a volume type with encryption), a corresponding encryption key is stored in Barbican.
In order to backup this key, the corresponding secret must first be identified.
This is possible starting with the Volume API microversion 3.64:

~~~bash
openstack volume show --os-volume-api-version 3.64 $VOLUME_NAME_OR_ID
~~~

The response will contain an `encryption_key_id` field with the ID of the Barbican secret.
This ID can then be used to retrieve the key using the instructions above.

:::caution

Note that the key retrieved from the secret is not immediately usable as LUKS passphrase to the image data of the volume.
OpenStack does some processing to the key before it is passed to the LUKS encryption, which must be mimicked accordingly in order to unlock the encryption outside of OpenStack!

:::

<!-- TODO: actually try this procedure on DevStack: encrypt volume, make image, download image, download secret and try to convert key correctly (hexlify) to be used by `cryptsetup luksOpen <image-file>` -->

## Appendix

### Image creation action for servers with attached volumes

When the `createImage` action of the Compute API (`openstack server image create`) is used on virtual machines that have at least one volume attached, a snapshot will be created for each attached volume individually and referenced in the resulting image's metadata.

This happens regardless of whether the virtual machine has an Ephemeral Storage disk attached.
In case of an Ephemeral Storage disk, only the Ephemeral Storage is copied into the Glance image as a 1:1 copy.

In case of a virtual machine that has no Ephemeral Storage but only volumes, the `createImage` action leads to a Glance image that only consists of metadata (including the resulting volume snapshot references) but carries no actual binary data.

<!-- TODO: insert flowchart figure from issue here -->