"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95752],{53466:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"iaas/guides/operations-guide/openstack/tools/project-manager","title":"Project Manager","description":"Overview","source":"@site/docs/02-iaas/guides/operations-guide/openstack/tools/project-manager.md","sourceDirName":"02-iaas/guides/operations-guide/openstack/tools","slug":"/iaas/guides/operations-guide/openstack/tools/project-manager","permalink":"/docs/iaas/guides/operations-guide/openstack/tools/project-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/SovereignCloudStack/docs/tree/main/docs/02-iaas/guides/operations-guide/openstack/tools/project-manager.md","tags":[],"version":"current","sidebarPosition":53,"frontMatter":{"sidebar_label":"Project Manager","sidebar_position":53},"sidebar":"docs","previous":{"title":"Resource Manager","permalink":"/docs/iaas/guides/operations-guide/openstack/tools/resource-manager"},"next":{"title":"Sandbox Manager","permalink":"/docs/iaas/guides/operations-guide/openstack/tools/sandbox-manager"}}');var i=a(74848),s=a(28453);const t={sidebar_label:"Project Manager",sidebar_position:53},r="Project Manager",c={},d=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Defaults",id:"defaults",level:2},{value:"create.py",id:"createpy",level:3},{value:"manage.py",id:"managepy",level:3},{value:"Usage",id:"usage",level:2},{value:"create.py",id:"createpy-1",level:3},{value:"Create a Domain and inital project",id:"create-a-domain-and-inital-project",level:4},{value:"Create a User for a project",id:"create-a-user-for-a-project",level:4},{value:"Create additional project with unlimited quota",id:"create-additional-project-with-unlimited-quota",level:4},{value:"Set quotas for a project",id:"set-quotas-for-a-project",level:4},{value:"Special project: images",id:"special-project-images",level:4},{value:"Special project: service",id:"special-project-service",level:4},{value:"manage.py",id:"managepy-1",level:3},{value:"Manage a specific domain only",id:"manage-a-specific-domain-only",level:4},{value:"Config files",id:"config-files",level:2},{value:"Quota Templates",id:"quota-templates",level:2},{value:"Setup Endpoints",id:"setup-endpoints",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"project-manager",children:"Project Manager"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The OpenStack Project Manager manages the creation of Openstack Domains, Projects and Users."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Prepare to use the Openstack Project Manager."}),"\n",(0,i.jsx)(n.p,{children:"During installation, ldap libraries are required under Linux; you should install libldap2-dev and libsasl2-dev beforehand."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/osism/openstack-project-manager\ncd openstack-project-manager\npipenv install\npipenv shell\n"})}),"\n",(0,i.jsx)(n.h2,{id:"defaults",children:"Defaults"}),"\n",(0,i.jsx)(n.h3,{id:"createpy",children:"create.py"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"create.py"})," command and his default options while executing the command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" --admin-domain              default\n --assign-admin-user         true\n --cloud                     admin\n --create-admin-user         true\n --create-domain             false\n --create-user               false\n --domain-name-prefix        true\n --has-service-network       false\n --has-public-network        true\n --has-shared-images         true\n --internal-id               unset\n --random                    false\n --managed-network-resources false\n --name                      sandbox\n --owner                     unset\n --password                  unset\n --password-length           16\n --public-network            public\n --quota-class               basic\n --service-network-cidr      unset\n --quota-multiplier          1\n --quota-multiplier-compute  unset\n --quota-multiplier-network  unset\n --quota-multiplier-storage  unset\n --quota-router              1\n"})}),"\n",(0,i.jsx)(n.h3,{id:"managepy",children:"manage.py"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"manage.py"})," has also some defaults while executing and will touch all projects in your Openstack Cluster, if not --domain is used."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" --admin-domain        default\n --assign-admin-user   false\n --classes             etc/classes.yml\n --domain              unset\n --dry-run             false\n --endpoints           etc/endpoints.yml\n --manage-endpoints    false\n --manage-homeprojects false\n --name                unset\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Default Openstack Roles to users are set to ",(0,i.jsx)(n.code,{children:"member"})," and ",(0,i.jsx)(n.code,{children:"load-balancer_member"})," at this time, the behavior can only be changed in the code."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["There must be a ",(0,i.jsx)(n.code,{children:"clouds.yml"})," and a ",(0,i.jsx)(n.code,{children:"secure.yml"})," file in the directory where the OpenStack Project Manager will be executed, examples are provided within the git repository."]}),"\n",(0,i.jsx)(n.p,{children:"The cloud profile to be used can be specified via the optional --cloud parameter. By default the cloud profile with the name admin is used. It has to be and admin account, to create and modify domains, projects, users and quotas."}),"\n",(0,i.jsxs)(n.p,{children:["The Openstack Project Manager essentially consists of two parts, the ",(0,i.jsx)(n.code,{children:"create.py"})," and the ",(0,i.jsx)(n.code,{children:"manage.py"}),", there are more scripts for handling users using ldap which needs more configuration setup."]}),"\n",(0,i.jsx)(n.h3,{id:"createpy-1",children:"create.py"}),"\n",(0,i.jsx)(n.p,{children:"This command is used to create and modify domains, projects, users and quotas. As default the domain is used as prefix for all projects and users created for easy alloction in Openstack."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"create.py can't delete once created objects, this must be done using Openstack commands to remove a project or domain."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"python src/create.py -h\nusage: create [-h] [--admin-domain ADMIN_DOMAIN] [--assign-admin-user] [--cloud CLOUD] [--config-dir DIR] [--config-file PATH] [--create-admin-user] [--create-domain] [--create-user]\n              [--domain DOMAIN] [--domain-name-prefix] [--has-public-network] [--has-service-network] [--has-shared-images] [--internal-id INTERNAL_ID] [--managed-network-resources] [--name NAME]\n              [--noassign-admin-user] [--nocreate-admin-user] [--nocreate-domain] [--nocreate-user] [--nodomain-name-prefix] [--nohas-public-network] [--nohas-service-network]\n              [--nohas-shared-images] [--nomanaged-network-resources] [--norandom] [--owner OWNER] [--password PASSWORD] [--password-length PASSWORD_LENGTH] [--public-network PUBLIC_NETWORK]\n              [--quota-class QUOTA_CLASS] [--quota-multiplier QUOTA_MULTIPLIER] [--quota-multiplier-compute QUOTA_MULTIPLIER_COMPUTE] [--quota-multiplier-network QUOTA_MULTIPLIER_NETWORK]\n              [--quota-multiplier-storage QUOTA_MULTIPLIER_STORAGE] [--quota-router QUOTA_ROUTER] [--random] [--service-network-cidr SERVICE_NETWORK_CIDR]\n\noptions:\n  -h, --help            show this help message and exit\n  --admin-domain ADMIN_DOMAIN\n                        Admin domain\n  --assign-admin-user   Assign admin user\n  --cloud CLOUD         Managed cloud\n  --config-dir DIR      Path to a config directory to pull `*.conf` files from. This file set is sorted, so as to provide a predictable parse order if individual options are over-ridden. The set\n                        is parsed after the file(s) specified via previous --config-file, arguments hence over-ridden options in the directory take precedence. This option must be set from the\n                        command-line.\n  --config-file PATH    Path to a config file to use. Multiple config files can be specified, with values in later files taking precedence. Defaults to None. This option must be set from the\n                        command-line.\n  --create-admin-user   Create admin user\n  --create-domain       Create domain only\n  --create-user         Create user\n  --domain DOMAIN       Domain\n  --domain-name-prefix  Add domain name as prefix to the project name\n  --has-public-network  Has public network infrastructure\n  --has-service-network\n                        Has service network infrastructure\n  --has-shared-images   Has shared images\n  --internal-id INTERNAL_ID\n                        Internal ID\n  --managed-network-resources\n                        Manage the network resources\n  --name NAME           Projectname\n  --noassign-admin-user\n                        The inverse of --assign-admin-user\n  --nocreate-admin-user\n                        The inverse of --create-admin-user\n  --nocreate-domain     The inverse of --create-domain\n  --nocreate-user       The inverse of --create-user\n  --nodomain-name-prefix\n                        The inverse of --domain-name-prefix\n  --nohas-public-network\n                        The inverse of --has-public-network\n  --nohas-service-network\n                        The inverse of --has-service-network\n  --nohas-shared-images\n                        The inverse of --has-shared-images\n  --nomanaged-network-resources\n                        The inverse of --managed-network-resources\n  --norandom            The inverse of --random\n  --owner OWNER         Owner of the project\n  --password PASSWORD   Password\n  --password-length PASSWORD_LENGTH\n                        Password length\n  --public-network PUBLIC_NETWORK\n                        Public network\n  --quota-class QUOTA_CLASS\n                        Quota class\n  --quota-multiplier QUOTA_MULTIPLIER\n                        Quota multiplier\n  --quota-multiplier-compute QUOTA_MULTIPLIER_COMPUTE\n                        Quota multiplier compute\n  --quota-multiplier-network QUOTA_MULTIPLIER_NETWORK\n                        Quota multiplier network\n  --quota-multiplier-storage QUOTA_MULTIPLIER_STORAGE\n                        Quota multiplier storage\n  --quota-router QUOTA_ROUTER\n                        Quota router\n  --random              Generate random names\n  --service-network-cidr SERVICE_NETWORK_CIDR\n                        Service network CIDR\n"})}),"\n",(0,i.jsx)(n.h4,{id:"create-a-domain-and-inital-project",children:"Create a Domain and inital project"}),"\n",(0,i.jsxs)(n.p,{children:["When executing the ",(0,i.jsx)(n.code,{children:"create.py"})," command, the first time with ",(0,i.jsx)(n.code,{children:"--domain"}),", it will create a new domain, an admin account and the first project ",(0,i.jsx)(n.code,{children:"webshop"}),". The admin account will be created in the default Domain of Openstack and can be used for the Service Provider to manager the complete domain."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ python3 src/create.py --domain democompany --name webshop\n+----------------+----------------------+----------------------------------+\n| name           | value                | id                               |\n|----------------+----------------------+----------------------------------|\n| domain         | democompany          | a8549ef5d3d14f938b127a1cdefe3788 |\n| project        | democompany-webshop  | 645538bf67664cfeaed32476d58f95fb |\n| admin          | democompany-admin    | cc8d6bf7b61d4199ba5a4230c4ec6d62 |\n| admin_password | qawsEdfg2d45Fsxc     |                                  |\n+----------------+----------------------+----------------------------------+\n"})}),"\n",(0,i.jsx)(n.h4,{id:"create-a-user-for-a-project",children:"Create a User for a project"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ python3 src/create.py --domain democompany --name webshopuser --create-user             \n+----------+-------------------------+----------------------------------+\n| name     | value                   | id                               |\n|----------+-------------------------+----------------------------------|\n| domain   | democompany             | a8549ef5d3d14f938b127a1cdefe3788 |\n| project  | democompany-webshop     | 5752b6701026478f9cac122fc54eb9cb |\n| user     | democompany-webshopuser | ce213655559d47d7800501124fed4d02 |\n| password | vEvM9vgRESdffWE2        |                                  |\n+----------+-------------------------+----------------------------------+\n"})}),"\n",(0,i.jsx)(n.h4,{id:"create-additional-project-with-unlimited-quota",children:"Create additional project with unlimited quota"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ python3 src/create.py --domain democompany --name styles --quota-class unlimited\n+----------+--------------------+----------------------------------+\n| name     | value              | id                               |\n|----------+--------------------+----------------------------------|\n| domain   | democompany        | a8549ef5d3d14f938b127a1cdefe3788 |\n| project  | democompany-styles | 666097e396fd4f9392d6aa55c76d8267 |\n+----------+--------------------+----------------------------------+\n"})}),"\n",(0,i.jsx)(n.h4,{id:"set-quotas-for-a-project",children:"Set quotas for a project"}),"\n",(0,i.jsxs)(n.p,{children:["All quota information must be set as a property to the Openstack project within your Openstack Cluster, if no property is set, the ",(0,i.jsx)(n.code,{children:"basic"})," quotaclass of ",(0,i.jsx)(n.code,{children:"etc/classes.yml"})," will be applied.\nIt is possible to set a quota multiplier for any project."]}),"\n",(0,i.jsx)(n.p,{children:"The following command you set a multiplier of 256 of the basic quota:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ openstack project set --property quotamultiplier=256 democompany-webshop\n"})}),"\n",(0,i.jsx)(n.p,{children:"Adjusting gigabyte quota for storage with a multiplier of 20 of the basic quota for a project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ openstack project set  --property quotamultiplier_storage=20 democompany-webshop\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will override the general quotamultiplier only for storage."}),"\n",(0,i.jsxs)(n.p,{children:["Other possible multiplier which can be set individually are: ",(0,i.jsx)(n.code,{children:"quotamultiplier_compute"}),", ",(0,i.jsx)(n.code,{children:"quotamultiplier_network"}),", ",(0,i.jsx)(n.code,{children:"quota_router"})]}),"\n",(0,i.jsxs)(n.p,{children:["To change the quotaclass to unlimited from the ",(0,i.jsx)(n.code,{children:"etc/classes.yaml"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ openstack project set  --property quotaclass=unlimited democompany-webshop\n"})}),"\n",(0,i.jsx)(n.h4,{id:"special-project-images",children:"Special project: images"}),"\n",(0,i.jsxs)(n.p,{children:["With this special Project you can share all images uploaded into this project to all other project in your domain which has set the property ",(0,i.jsx)(n.code,{children:"has-shared-images"}),", which is by default set.\nAlsoi only the domain-admin user has access to this project, other domain users won't see this, they will find the uploaded images in their projects.\nIf you want your grant other domain users also access to upload some images, you need to give them access to the images Project in Openstack."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ python3 src/create.py --domain democompany --name images\n+---------+---------------------+----------------------------------+\n| name    | value               | id                               |\n|---------+---------------------+----------------------------------|\n| domain  | democompany         | a8549ef5d3d14f938b127a1cdefe3788 |\n| project | democompany-images  | 6d57f39aacbe485d87733865b1e79d03 |\n+---------+---------------------+----------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Additionally you need to add the domain and domain-admin user to the ",(0,i.jsx)(n.code,{children:"clouds.yaml"}),", it is always named ",(0,i.jsx)(n.code,{children:"opm-domainname-admin:"})," so the manage.py can setup permissions to the projects later on and users are able to find the images."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  opm-democompany-admin:\n    auth:\n      auth_url: https://keystone.my.cloud:5000/v3\n      username: democompany-admin\n      password: yourpassword\n      user_domain_name: Default\n      project_domain_name: democompany \n    identity_api_version: 3\n"})}),"\n",(0,i.jsx)(n.h4,{id:"special-project-service",children:"Special project: service"}),"\n",(0,i.jsx)(n.p,{children:"With this special project you can share installed services, like a harbor, to all other projects in your domain. Per default, only the domain admin has access to this project."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ python3 src/create.py --domain democompany --name service\n+---------+---------------------+----------------------------------+\n| name    | value               | id                               |\n|---------+---------------------+----------------------------------|\n| domain  | democompany         | a8549ef5d3d14f938b127a1cdefe3788 |\n| project | democompany-service | a5558f7338f94adea5f41858636256b5 |\n+---------+---------------------+----------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"managepy-1",children:"manage.py"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["This command applies quotas, networks and routers to ",(0,i.jsx)(n.strong,{children:"all"})," projects in the Openstack Cluster, not only to those have been configured previously with the ",(0,i.jsx)(n.code,{children:"create.py"})," or ",(0,i.jsx)(n.code,{children:"openstack project set --property"})," commands."]})}),"\n",(0,i.jsx)(n.p,{children:"Best is to run this command by cron, every hour to apply all pending changes, it is also possible to run this at the command line to apply changes immediately."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"python3 src/manage.py -h\nusage: manage [-h] [--admin-domain ADMIN_DOMAIN] [--assign-admin-user] [--classes CLASSES] [--cloud CLOUD] [--config-dir DIR] [--config-file PATH] [--domain DOMAIN] [--dry-run]\n              [--endpoints ENDPOINTS] [--manage-endpoints] [--manage-homeprojects] [--name NAME] [--noassign-admin-user] [--nodry-run] [--nomanage-endpoints] [--nomanage-homeprojects]\n\noptions:\n  -h, --help            show this help message and exit\n  --admin-domain ADMIN_DOMAIN\n                        Admin domain\n  --assign-admin-user   Assign admin user\n  --classes CLASSES     Path to the classes.yml file\n  --cloud CLOUD         Cloud name in clouds.yaml\n  --config-dir DIR      Path to a config directory to pull `*.conf` files from. This file set is sorted, so as to provide a predictable parse order if individual options are over-ridden. The set\n                        is parsed after the file(s) specified via previous --config-file, arguments hence over-ridden options in the directory take precedence. This option must be set from the\n                        command-line.\n  --config-file PATH    Path to a config file to use. Multiple config files can be specified, with values in later files taking precedence. Defaults to None. This option must be set from the\n                        command-line.\n  --domain DOMAIN       Domain to be managed\n  --dry-run             Do not really do anything\n  --endpoints ENDPOINTS\n                        Path to the endpoints.yml file\n  --manage-endpoints    Manage endpoints\n  --manage-homeprojects\n                        Manage home projects\n  --name NAME           Project to be managed\n  --noassign-admin-user\n                        The inverse of --assign-admin-user\n  --nodry-run           The inverse of --dry-run\n  --nomanage-endpoints  The inverse of --manage-endpoints\n  --nomanage-homeprojects\n                        The inverse of --manage-homeprojects\n"})}),"\n",(0,i.jsx)(n.h4,{id:"manage-a-specific-domain-only",children:"Manage a specific domain only"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ python3 src/manage.py --domain democompany\n\n2024-04-19 14:24:02.873 | INFO     | democompany - domain_id = a8549ef5d3d14f938b127a1cdefe3788\n2024-04-19 14:24:04.886 | INFO     | democompany-images - project_id = 6d57f39aacbe485d87733865b1e79d03\n2024-04-19 14:24:04.886 | INFO     | democompany-images - project_id = 6d57f39aacbe485d87733865b1e79d03, domain_id = a8549ef5d3d14f938b127a1cdefe3788\n2024-04-19 14:24:04.953 | INFO     | democompany-images - quotaclass {'compute': {'cores': 0, 'injected_file_content_bytes': 10240, 'injected_file_path_bytes': 255, 'injected_files': 5, 'instances': 0, 'key_pairs': 0, 'metadata_items': 128, 'ram': 0, 'server_group_members': 0, 'server_groups': 0}, 'network': {'floatingip': 0, 'network': 0, 'port': 0, 'rbac_policy': 0, 'router': 0, 'security_group': 0, 'security_group_rule': 0, 'subnet': 0, 'subnetpool': 0}, 'volume': {'backup_gigabytes': 0, 'backups': 0, 'gigabytes': 1000, 'per_volume_gigabytes': 25, 'snapshots': 0, 'volumes': 100}, 'parent': 'default'}\n2024-04-19 14:24:04.953 | INFO     | democompany-images - check network quota\n2024-04-19 14:24:05.048 | INFO     | democompany-images - check compute quota\n2024-04-19 14:24:05.175 | INFO     | democompany-images - check volume quota\n2024-04-19 14:24:05.286 | INFO     | democompany-images - check if external rbac policy must be deleted (public)\n2024-04-19 14:24:05.349 | INFO     | democompany-images - check if service rbac policy must be deleted (democompany-service)\n2024-04-19 14:24:06.081 | INFO     | democompany-service - project_id = a5558f7338f94adea5f41858636256b5\n2024-04-19 14:24:06.081 | INFO     | democompany-service - project_id = a5558f7338f94adea5f41858636256b5, domain_id = a8549ef5d3d14f938b127a1cdefe3788\n2024-04-19 14:24:06.131 | INFO     | democompany-service - quotaclass {'compute': {'cores': 256, 'injected_file_content_bytes': 10240, 'injected_file_path_bytes': 255, 'injected_files': 5, 'instances': 256, 'key_pairs': 256, 'metadata_items': 128, 'ram': 262144, 'server_group_members': 256, 'server_groups': 256}, 'network': {'floatingip': 256, 'network': 256, 'port': 256, 'rbac_policy': 1024, 'router': 256, 'security_group': 256, 'security_group_rule': 1024, 'subnet': 256, 'subnetpool': 256}, 'volume': {'backup_gigabytes': 0, 'backups': 0, 'gigabytes': 0, 'per_volume_gigabytes': 0, 'snapshots': 0, 'volumes': 0}, 'parent': 'default'}\n2024-04-19 14:24:06.131 | INFO     | democompany-service - check network quota\n2024-04-19 14:24:06.212 | INFO     | democompany-service - check compute quota\n2024-04-19 14:24:06.330 | INFO     | democompany-service - check volume quota\n2024-04-19 14:24:06.467 | INFO     | democompany-service - check if external rbac policy must be created (public)\n2024-04-19 14:24:06.589 | INFO     | democompany-service - check if service rbac policy must be deleted (democompany-service)\n2024-04-19 14:24:06.840 | INFO     | democompany-webshop - project_id = 5752b6701026478f9cac122fc54eb9cb\n2024-04-19 14:24:06.840 | INFO     | democompany-webshop - project_id = 5752b6701026478f9cac122fc54eb9cb, domain_id = a8549ef5d3d14f938b127a1cdefe3788\n2024-04-19 14:24:06.915 | INFO     | democompany-webshop - quotaclass {'compute': {'cores': 4, 'injected_file_content_bytes': 10240, 'injected_file_path_bytes': 255, 'injected_files': 5, 'instances': -1, 'key_pairs': 4, 'metadata_items': 128, 'ram': 8192, 'server_group_members': 4, 'server_groups': 4}, 'network': {'floatingip': 4, 'network': 1, 'port': 20, 'rbac_policy': 10, 'router': 0, 'security_group': 5, 'security_group_rule': 20, 'subnet': 2, 'subnetpool': 1}, 'volume': {'backup_gigabytes': 40, 'backups': 8, 'gigabytes': 20, 'per_volume_gigabytes': 200, 'snapshots': 4, 'volumes': 4}, 'parent': 'default'}\n2024-04-19 14:24:06.915 | INFO     | democompany-webshop - check network quota\n2024-04-19 14:24:06.993 | INFO     | democompany-webshop - check compute quota\n2024-04-19 14:24:07.114 | INFO     | democompany-webshop - check volume quota\n2024-04-19 14:24:07.254 | INFO     | democompany-webshop - check if external rbac policy must be created (public)\n2024-04-19 14:24:07.334 | INFO     | democompany-webshop - check if service rbac policy must be deleted (democompany-service)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"config-files",children:"Config files"}),"\n",(0,i.jsxs)(n.p,{children:["The config files which can be used for ",(0,i.jsx)(n.code,{children:"create.py"})," and ",(0,i.jsx)(n.code,{children:"manage.py"})," are using the ",(0,i.jsx)(n.a,{href:"https://docs.openstack.org/oslo.config/latest/configuration/quickstart.html",children:"oslo.config format"}),", you can set the command line options as ",(0,i.jsx)(n.code,{children:"key = value pair"})," and create your own config files matching your setup."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="democompany.conf"',children:"[DEFAULT]\ncloud = admin\ndomain = democompany\n"})}),"\n",(0,i.jsx)(n.h2,{id:"quota-templates",children:"Quota Templates"}),"\n",(0,i.jsxs)(n.p,{children:["Edit the ",(0,i.jsx)(n.code,{children:"etc/classes.yml"})," file if you want to change or add new quota templates"]}),"\n",(0,i.jsx)(n.h2,{id:"setup-endpoints",children:"Setup Endpoints"}),"\n",(0,i.jsxs)(n.p,{children:["Edit the ",(0,i.jsx)(n.code,{children:"etc/endpoints.yml"})," file to fit your available endpoints"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>r});var o=a(96540);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);