# SCS Compliance Check Pipeline Manual

The SCS compliance check suite runs automated tests, generates a signed report for the run, and feeds it to
the compliance monitor. Roughly speaking, this process has to be performed daily, for instance, using a
continuous-integration "pipeline".

Providers of public clouds do not need to use their own pipelines; those clouds can be tested via the
official SCS compliance check pipeline.

Alternatively, if using this pipeline is not feasible (for instance, for private clouds) or not desired,
cloud-service providers can run the tests and feed the compliance monitor themselves.

The next subsection shows common requirements for each of these two cases. The two subsections after that
are each dedicated to the specific cases.

## Common requirements for the compliance checks

### for SCS-compatible IaaS

You need an OpenStack project that allows for at least one server and one router, possibly more if it's going
to be used for purposes other than compliance testing (such as the
[OpenStack Health Monitor](https://github.com/SovereignCloudStack/openstack-health-monitor) or the
[SCS Health Monitor](https://github.com/SovereignCloudStack/scs-health-monitor)).

1. Create an application credential. It must be possible to create resources such as servers, routers, etc.

2. Create a new branch in [the standards repository](https://github.com/SovereignCloudStack/standards):

    - `git clone git@github.com:SovereignCloudStack/standards.git`
    - `cd standards`
    - `git checkout -b feat/add_my_cloud`

   **CAUTION**: If you are not a member of the SCS Github org, this won't work.
   Ask the SCS team (or other members) to add you. Alternatively, you may fork the repository on
   Github first and then clone the fork.

3. Add your subject to the results table. This is necessary so your subject shows up in the
   [compliance monitor web-site](https://compliance.sovereignit.cloud/page/table). Add the following lines
   (substituting all-caps parts except `HM`) to
   [compliance-monitor/templates/overview.md.j2](https://github.com/SovereignCloudStack/standards/blob/main/compliance-monitor/templates/overview.md.j2):

   ```diff
    | [gx-scs](https://github.com/SovereignCloudStack/docs/blob/main/community/cloud-resources/plusserver-gx-scs.md) | Dev environment provided for SCS & GAIA-X context | plusserver GmbH |
    {#- #} [{{ results | pick('gx-scs', iaas) | summary }}]({{ detail_url('gx-scs', iaas) }}) {# -#}
    | [HM](https://health.gx-scs.sovereignit.cloud:3000/) |
   +| [SUBJECT_NAME](YOUR_URL) | DESCRIPTION | COMPANY_NAME |
   +{#- #} [{{ results | pick('SUBJECT_NAME', iaas) | summary }}]({{ detail_url('SUBJECT_NAME', iaas) }}) {# -#}
   +| [HM](HEALTH_MONITOR_URL) |
   ```

   Ideally, insert the lines at a position that keeps the part of the table below `gx-scs` sorted.

Now you can proceed with the steps from one of the next subsections, depending on whether you want to
check suite run by the SCS pipeline or not.

## How to add a new test subject to the official pipeline

### for SCS-compatible IaaS

We are going to create a pull request that is very similar to real-life example that
[adds the test subject `scaleup-occ2`](https://github.com/SovereignCloudStack/standards/pull/797).
(However, note that this example also adds an optional GitHub workflow, which we won't do here.)

1. Modify [playbooks/clouds.yaml.j2](https://github.com/SovereignCloudStack/standards/blob/main/playbooks/clouds.yaml.j2).
   This is necessary so that the tests can access your cloud.
   You can use the following template (replace all-caps parts):

   ```yaml
     SUBJECT_NAME:
       region_name: REGION
       interface: "public"
       identity_api_version: 3
       auth_type: "v3applicationcredential"
       auth:
         auth_url: AUTH_URL
         application_credential_id: "{{ clouds_conf.SUBJECT_NAME_ac_id }}"
         application_credential_secret: "{{ clouds_conf.SUBJECT_NAME_a_ac_secret }}"
    ```

   Note that you need to replace dashes (and other special characters) by underscores in the last two lines.

2. Add your subject to [Tests/config.toml](https://github.com/SovereignCloudStack/standards/blob/main/Tests/config.toml).
   This is necessary so that your cloud will be included in the nightly tests. Add a line like so:

   ```diff
    [presets.all]
    scopes = [
        "scs-compatible-iaas",
    ]
    subjects = [
        "gx-scs",
   +    "SUBJECT_NAME",
   ```

   Ideally, insert your subject so that the list (after `gx-scs`) remains sorted.

3. Add your subject to [compliance-monitor/bootstrap.yaml](https://github.com/SovereignCloudStack/standards/blob/main/compliance-monitor/bootstrap.yaml).
   This is necessary to that the reports will be accepted as genuine. Add a section like so:

   ```diff
      - subject: artcodix
        delegates:
          - zuul_ci
   +  - subject: SUBJECT_NAME
   +    delegates:
   +      - zuul_ci
   ```

   Again, insert your subject so that the list (after `gx-scs`) remains sorted.

4. Finally, add application credentials to [.zuul.d/secure.yaml](https://github.com/SovereignCloudStack/standards/blob/main/.zuul.d/secure.yaml).
   This is necessary so the tests can access your cloud.

   :::info

   When the application credentials expire, the test results in the [official pipeline](https://docs.scs.community/standards/certification/overview#compliant-cloud-environments) will turn red (MISS). This may also have a negative impact on a currently valid certification. There are two options to avoid this:
   - It is recommended to use non-expiring application credentials. This ensures that renewal is not forgotten. You can withdraw them actively in case of a breach or any other reason you no longer want the official pipeline to access your cloud.
   - Alternatively, application credentials that are about to expire must be renewed regularly via a pull request, as shown in this [PR example](https://github.com/SovereignCloudStack/standards/pull/1049). Please note that the renewal is your responsibility.

   :::

   To proceed, you need `zuul-client` installed:

   ```shell
   pipx install zuul-client
   ```

   Then you can execute:

   ```shell
   $ zuul-client --zuul-url https://zuul.sovereignit.cloud/ encrypt --tenant scs --project SovereignCloudStack/standards
   <PASTE application credential id HERE>
   <HIT ctrl-d>

   ...
    - secret:
        name: <name>
        data:
          <fieldname>: !encrypted/pkcs1-oaep
            - ...

   $ zuul-client --zuul-url https://zuul.sovereignit.cloud/ encrypt --tenant scs --project SovereignCloudStack/standards
   <PASTE application credential secret HERE>
   <HIT ctrl-d>

   ...
    - secret:
        name: <name>
        data:
          <fieldname>: !encrypted/pkcs1-oaep
            - ...
   ```

   Copy the parts of the respective outputs starting in the final line shown here (the one starting `-`).
   Insert them like so:

   ```diff
   +   SUBJECT_NAME_ac_id: !encrypted/pkcs1-oaep
   +     - ENCRYPTED_ID
   +   SUBJECT_NAME_ac_secret: !encrypted/pkcs1-oaep
   +     - ENCRYPTED_SECRET
   ```

   Note that you have to use the same keys as in Step 1 (that is, with special characters replaced).

5. Commit your changes and open a pull request:

   ```shell
   git commit -asm "Add SUBJECT_NAME"
   git push  # the output of this command will show you the URL for creating the pull request
   ```

## How to feed the compliance monitor yourself

### for SCS-compatible IaaS

:::note

You may have to adapt these instructions to your infrastructure. For instance, the application credentials
we create here are stored locally. If you want to include the check suite into your own
continuous-integration pipeline, you may want to use some dedicated credential store and mechanism for
injecting application credentials.

You may want to take inspiration from our own Zuul setup by looking at
[.zuul.d](https://github.com/SovereignCloudStack/standards/tree/main/.zuul.d) and
[playbooks](https://github.com/SovereignCloudStack/standards/tree/main/playbooks).
However, don't be overwhelmed by the complexities of Zuul; it's well possible to use other solutions,
including a cronjob.

:::

1. Install requirements.

   ```shell
   virtualenv .venv
   . .venv/bin/activate
   pip install -r requirements.txt -r iaas/requirements.txt
   pip install passlib argon2_cffi  # these are only needed for Step 2
   ```

2. Run our support script (substitute `$SUBJECT_NAME` appropriately):

   ```shell
   Tests/add_subject.py $SUBJECT_NAME
   ```

   Follow the instructions.
   At the end, it will tell you to amend the file `compliance-monitor/boostrap.py`. Do so.

3. Make sure you have `$SUBJECT_NAME` in your `.config/openstack/clouds.yaml` like so:

   ```yaml
     SUBJECT_NAME:
       region_name: REGION
       interface: "public"
       identity_api_version: 3
       auth_type: "v3applicationcredential"
       auth:
         auth_url: AUTH_URL
         application_credential_id: "APPLICATION_CREDENTIAL_ID"
         application_credential_secret: "APPLICATION_CREDENTIAL_SECRET"
   ```

4. Perform a test run of the check suite like so:

   ```shell
   python3 Tests/scs-test-runner.py --config Tests/config.toml run --scope scs-compatible-iaas --subject $SUBJECT_NAME
   ```

   If the report can't be submitted at the very end, this is to be expected, because the keyfile is not yet
   known to the compliance monitor. To change this, we proceed to the next step.

5. Commit your changes and open a pull request:

   ```shell
   git commit -asm "Add SUBJECT_NAME"
   git push  # the output of this command will show you the URL for creating the pull request
   ```
