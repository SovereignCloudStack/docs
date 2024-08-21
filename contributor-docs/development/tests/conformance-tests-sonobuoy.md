# SCS Conformance Test KaaS Sonobuoy

SovereignCloudStack (SCS) makes use of [Sonobuoy][sonobuoy] as a test framework to run its tests on Kubernetes clusters, which are to be audited for compliance.
The aim of using this framework is to make the execution of tests on a KaaS infrastructure as simple as possible.
Hence this reduces the effort required to establish SCS conformity to a minimum.

In short this is achieved by storing all tests in a container image, which can then be called and launched on the clusters managed by sonoobuoy.

> [!NOTE] 
> A more detailed description of why the SCS has decided to use sonobuoys can be found on the corresponding [Decsision Record][sonbouy-decision-record].
> In addition, sonobuoy is also used as the toolset for executing Kubernetes very own [conformance tests][k8s-conformance].

This document is intended to assist conformance test authors to integrate their tests into the sonobuoy framework.
This requires a user to write the conformance tests in Golang, as this is the language provided by the framework itself.

## Step-by-step instructions for the development of sonobuoy tests using `docker` and `kind`

> [!NOTE] 
> This guide refers to the brief instructions provided in the [standards repository][scs-sonobuoy-example-guide]

### Prerequisite

* [docker][docker-installation]
* [kind][kind-installation]
* [sonobuoy][sonobuoy-installation]

```bash
go install github.com/vmware-tanzu/sonobuoy@latest
```

### Set up development environment

#### 1. Clone the standard repository containing the conformance tests and navigate to the Sonobuoy example located at `standards/Tests/kaas/kaas-sonobuoy-go-example-e2e-framework`

```bash
git clone https://github.com/SovereignCloudStack/standards
cd standards/Tests/kaas/kaas-sonobuoy-go-example-e2e-framework/
```

#### 2. Check the prerequisites

Within this directory you will find a `Makefile`, which is also used to create the test images.
To begin with, this can be used to check whether all the requirements for the development environment are met.

```bash
make dev-prerequests
```

#### 3. Create a kind cluster

Once all the prerequisite software is installed, you can proceed by starting an kind cluster using the `Makefile` as follows:

```bash
make dev-setup
```

#### 4. Setting environment variables for the image build process

```bash
kubectl config view
```

```bash
export IMAGE_VERSION_TAG="dev"
export K8S_HOST=<kind-cluster-ip>
export K8S_PORT=<kind-cluster-port>
```

### Create a test

In general, SCS tests for KaaS are derived from standards that define certain expected behaviors and functionalities of Kubernetes.
As an example for this step-by-step guide, let's assume a scenario in which there is a fictional standard called "scs-0299-v1-example-standard.md".
Pretend that the fictitious standard here stipulates that at least one pod MUST run in the namespace "namespace-test-a".

> [!NOTE]  
> The functions and behaviors to be tested MUST be precisely defined in a standard.
> If you as a developer want to test something that you think is best tested but is not yet part of any standard, you MUST update the standard accordingly.

#### 1. Create example test

The `scs_k8s_tests` directory contains the Golang files that define the tests.

```bash
cd standards/Tests/kaas/kaas-sonobuoy-go-example-e2e-framework/scs_k8s_tests
```

First create a test file according to your standard and adhere to the naming convention accordingly.

* The prefix MUST contain the name of the standard in lower case letters.
* As a suffix, the file must end with "_test.go".

> The suffix requirement comes from the go test framework itself. All test files must end with `_test.go`.
> Otherwise they will not be selected by the test environment.

As an example, we will create a file for the fictitious standard "scs-0299-v1-example-standard.md" as follows:

```bash
touch scs_0299_v1_example_standard_test.go
```

In this file, we can define the behavior we want to test for.
As an example, we test here whether there are more than zero pods in the namespace "namespace-test-a".
The execution of this test should fail by default as there should be no pods in the namespace and the namespace itself should not exist.
The aim is to display the results of a failed test so that we can show their interpretation in a later step.

> Attention!!!: in order for the framework to select the functions for testing, their names must begin with "TEST_" in accordance with the naming convention of the golang test framework.
> TODO:!!! link to golang test framework docs

Copy the following text into the file `scs_0299_v1_example_standard_test.go`:

```go
package scs_k8s_tests

import (
  "context"
  "testing"
  //~ "time"
  //~ "fmt" 
  //~ plugin_helper "github.com/vmware-tanzu/sonobuoy-plugins/plugin-helper"
  corev1 "k8s.io/api/core/v1"
  "sigs.k8s.io/e2e-framework/pkg/envconf"
  "sigs.k8s.io/e2e-framework/pkg/features"
)


// This function checks if there are any pods in 'namespace-test-a'.
// The check should fail as there should be no pods present in this namespace.
// The purpose of this function is to display the handling of failed tests.
func Test_scs_0299_TestListPodsFailing(t *testing.T) {
  f := features.New("pod list").Assess(
    "pods from namespace 'namespace-test-a'",
    func(ctx context.Context, t *testing.T, cfg *envconf.Config) context.Context {
      var pods corev1.PodList
      err := cfg.Client().Resources("namespace-test-a").List(context.TODO(), &pods)
      if err != nil {
        t.Fatal(err)
      }
      t.Logf("found %d pods", len(pods.Items))
      if len(pods.Items) == 0 {
        t.Fatal("no pods in namespace 'namespace-test-a'")
      }
      return ctx
    })

  testenv.Test(t, f.Feature())
}

```

#### 3. Build the test image, upload it to the art cluster and run it

To create the image, execute the following:

```bash
make dev-build
```

This creates the Sonobuoy image and automatically uploads it to the image register of the kind cluster.

You can then run the tests by:

```bash
make dev-run
```

Depending on how extensive the tests are, this may take some time.
To check the current test status manually, you can use the following command:

```bash
sonobuoy status
```

#### 4. Retrieving the results

```bash
make dev-result
cat results/plugins/scsconformance/results/global/out.json 
cat results/plugins/scsconformance/sonobuoy_results.yaml
```

Once all tests have been executed successfully, you can read the results and receive feedback.
You can call up the results as follows:

> [!NOTE] 
> TODO:!!! to be described in more detail

### Clean up after

To clean up the resourcec used for development, you can use the following commands:

```bash
make dev-clean
make dev-purge
```

[sonobuoy]: https://sonobuoy.io/
[sonbouy-decision-record]: https://github.com/SovereignCloudStack/standards/blob/main/Standards/scs-0200-v1-using-sonobuoy-for-kaas-conformance-tests.md
[k8s-conformance]: https://github.com/cncf/k8s-conformance/blob/master/instructions.md
[docker-installation]: https://docs.docker.com/engine/install/
[sonobuoy-installation]: https://sonobuoy.io/docs/v0.57.1/#installation
[kind-installation]: https://kind.sigs.k8s.io/docs/user/quick-start/#installation
[scs-sonobuoy-example-guide]: https://github.com/SovereignCloudStack/standards/tree/main/Tests/kaas/kaas-sonobuoy-go-example-e2e-framework#sonobuoy-usage-for-development-of-tests
