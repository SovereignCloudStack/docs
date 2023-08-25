# Zuul users guide

## Prerequisites

1. Repository is known by your zuul instance
2. Basic ansible knowledge
3. Basic yaml knowledge
4. zuul-client installed

## Who is it for?

You may have heard about zuul and may ask yourself if it is capable to support you.
Basically everything you use ansible for can be done using zuul. That is not always
a good thing since you may get careless and your workload will exceed the CI/CD concept.

If you find yourself doing things under the following list you are at the right place.

1. Code testing
2. Deployment tests using IaC

If you want to, let's say, monitor something using zuul, that is possible but not the
intended use case.

## Where do I start?

Right in your projects repository! The only prerequisite you need to fulfill, is that
your repository you want zuul to work on is known by zuul. This is done by the zuuls
tenant configuration. To update this configuration you need access to the zuul instance
or ask an administrator for help.

We consider that zuul knows about your repository so we can get started. There are three
topics that you should know about. To get jobs running you need the "job" itself. Jobs run
within "pipeline". The third important thing is to provide a "project" definition.

### Projects

If zuul is configured to observe your repository it will have a look at your projects
definition. Minimal example:

```
---
- project:
    name: my-org/my-repo
    default-branch: main
    merge-mode: "squash-merge"
    my_pipeline1:
      jobs:
        - my_job1
        - my_job2
        ......
    my_pipeline2:
      jobs:
        - my_jobs
    ...

```
By default zuul will observe all branches for such files. We have to set the repository name
that have to match the exact value that was set for zuul. Set a default-branch where actions
that don't match an explicit branch are executed on. Set the merge-mode that zuul has to use.
But beware that not all issue tracker support all methods. For github squash-merge will work.

After these three properties add the pipelines you want to use to the project definition.
With the `jobs` list you define which jobs to run in which pipeline.


### Pipelines

Every zuul instance will have at least one repository that is used for configuration. There
you will find the available pipelines. Pipelines are used to run your jobs on a periodic or
event driven base. Pipelines can be used to run other pipelines and to keep your jobs in a
defined order if you need this.

Have a look at the configuration repository to utilize the pipelines for your repository. You
are not able to define new pipelines outside of a so called "configuration" repository. Since,
by default your repo is considered "untrusted". So in the first place you don't need to
think about, how to create a pipeline. Just use one that fits your needs as close as possible.

### Jobs

All jobs that your zuul instances knows of can be used for your own purposes.
Call them directly or implement a job that uses an existing job as parent.
Didn't find the right job? Than we have to create a new one. Existing jobs
can be found in the web ui of your zuul instance: [Example](https://zuul.scs.community/t/SCS/jobs)

First have a look on a basic job example:

```
- job:
    name: base
    parent: null
    description: |
      The recommended base job.

      All jobs ultimately inherit from this.  It runs a pre-playbook
      which copies all of the job's prepared git repos on to all of
      the nodes in the nodeset.

      It also sets a default timeout value (which may be overidden).
    pre-run: playbooks/base/pre.yaml
    post-run:
      - playbooks/base/post.yaml
      - playbooks/base/post-logs.yaml
    roles:
      - zuul: zuul/zuul-jobs
    timeout: 1800
    nodeset:
      nodes:
        - name: ubuntu-jammy
          label: ubuntu-jammy

```
Each jobs needs a name. Each job need to define whether there is parent job or not.
Jobs without a parent are called "base" jobs. Usually you don't want to implement base jobs since
there are already some base jobs that implement often used stuff. A description may not be mandatory
but is obviously useful.

Necessary for zuul to do anything you just need to add a `run` or `roles` property. Within something that is
like a `noop` job or just printing something to stdout that is everything you need to run your first job.
Since anything we want to do requires a little bit more you have to define a nodeset. The nodes
are used to run your playbooks on. In 99,9% you will need this too.

The properties `pre-run` and `post-run` are useful for bootstrap and cleanup. If your actual job wants to create 
bootstrap some infrastructure you can to this in the `pre-run`. Using an cloud provider you want to release
no longer used resources. That can be done in the `post-run`. If you are using a parent job it is likely
that the parent job may has pre- and post-run playbooks. In this case your pre- and post-run playbooks are
"nested". Example:

1. pre-run parent
2. pre-run my job
3. post-run my job
4. post-run parent

If your job exceeds the defined timeout, the job is considered as failed.

#### What about secrets?

Right now you should be able to run basic tasks. But what if you try to test something
that needs credentials to connect to an outside service? Or you have to address additional
ressources in an openstack environment and you have to use something like app credentials?

That is where job secrets are used. Example:

```
- job:
    name: SOME_JOB
    parent: base
    description: |
      A job basic job used as example
    secrets:
      - name: clouds_conf
        secret: app_credential_cloud_conf
    run: playbooks/my-playbook.yaml
```

Secrets for a job are simply defined by the keyword `secrets`.
Each secret needs a name that can be used in your playbooks.
The property `secret` references the secret that is defined within your project.

Example:

```
- secret:
    name: app_credential_cloud_conf
    data:
      credentials: my-secret-value
```
Within `my-playbook.yaml` you can reference the secret value using `"{{ clouds_conf.credentials }}"`.
In this example `my-secret-value` is clear readable text. That is not something we want to keep
secrets. But how do you encrypt secrets in a way that they are secure and also can be decrypted by
zuul?

For this purpose zuul creates its own public/private key pair for each project. Everyone may use the
public key to create secrets. But only zuul will be able to decrypt these values. To avoid the user
to be responsible for the correct encryption there is an zuul-client tool that will do this for you.

Example:
```
zuul-client --zuul-url ZUUL_URL  encrypt --tenant TENANT --project ORGANIZATION/PROJECT --infile creds.yaml --outfile clouds.yaml.enc
```

The content may look like this:
```
- secret:
    name: <name>
    data:
      <fieldname>: !encrypted/pkcs1-oaep
        - IGZ2Wu47R9mEY4fjetbxSAUGNaz4HR1mjk9lCLq3HsUMjHGj9YPlb2MvnPQw1LCJSvpaK
          ogth7hi2zYwrs5tNAik/qlVSB7AM+LQRP7lmlM4JmD6WOyR7DisHu7oMD1Gqem2ZuMggA
          DIBn5+DeBIvnwihDOcS+BKPTVMEtXOJNkuObZHE8DweB/RQIGUvjyeq5yoAmz/y+qGVqe
          0Vk4pTYFIBgk5DMzwVnDzDkqs/QokoOupMUoBcpapmM11do4ymjbDpeINjayoro6VXTtX
          Mkk9fDv9wuJIQTuyHAOfMD+UYS/HqVSF/Hm9ScUvfhw02gTdzKCxliWhFHJOj7RbdUUMK
          OYYcUkNp5cXZUYFnflMhxVEnzREbdAIklNPfoHOizsxLPaUZ9yk6XcFRflFfMvqBtUS00
          LCx0Uh906NwdaEUrv2ZdrN123rwfwfw4333232rDFDFfsdfddsfdDFSFSdqrrtwms5Mi0
          szUBaM4j+Mayep+41vl0cpsLU91GzXEATWMaPIN8OnEHF6qQIv0wB6VaKd5aeAyERisb3
          wFdjEo4faLO70RWzR33k+4xqAYNIIFyTMpWJz21CUSfoYG8ygL6t7RJGgyjA+0KsVEyj+
          ewEtiaUOLYyD7pXtqdw1HgzjqiXnfxk+wSv/y5y/TGGYpQj8zU76jS7Zj0ft/0=
```

You may use this content or the file to provide it as a secret. You just have to update the `<name>` and the
`<fieldname>` part.

