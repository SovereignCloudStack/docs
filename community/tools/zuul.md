# Zuul

## Zuul CI/CD pipelines and project gating

Since we are expecting a lot of pipelines beeing created and used GitHub actions won't keep up
well. We also expect cross-repository and even cross-project dependencies. Therefore we decided to
use Zuul as our main pipeline solution.

### How to make a repo use Zuul

Note: This needs to be updated!

- Make Zuul aware of your repository in this [repo](https://github.com/SovereignCloudStack/zuul-scs-jobs)
- Create a file _.zuul.yaml_
  - Here is [an example](https://github.com/SovereignCloudStack/zuul-config/)
  - You can have a job section containing _self-defined_ jobs which you need to write on your own
  - You have to have a project section containing
    - the default-branch name
    - the merge-mode which should be used to auto-merge
    - the jobs to run in each pipeline (gh_check, gh_gate, gh_post, gh_tag)
    - these [pipelines](https://github.com/SovereignCloudStack/zuul-config/blob/main/zuul.d/) are triggered by events
    - ihere are [some default jobs](https://opendev.org/zuul/zuul-jobs/src/branch/master/playbooks)
- If you have _self-defined_ jobs, you need to create a folder _.playbooks_
  - this folder containers ansible playbooks which will be triggered

### General information about Zuul

Zuul does not take anything for granted. If you need to have something installed,
you should install it via ansible. Our test-machines are basically pimped
docker-containers, so we might run into issues some time. But for now, things work pretty good.
