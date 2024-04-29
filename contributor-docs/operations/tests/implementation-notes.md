---
title: Implementation Notes for SCS Conformance Tests
type:
status: Draft
track: Global
---

SovereignCloudStack (SCS) uses [conformance tests][gh-scripts] to certify
compliance of a given cloud offering with respect to a given [certificate
scope][cert-scopes] such as *SCS Compatible IaaS v4*.
Our aim is that these tests are reliable, consistent and comprehensible for
the users.
This document summarizes the current best practices to achieve this goal.


## 1. RFC2119 Keywords

Creating a conformance test for a standard involves the correct mapping of
the keywords such as MUST and SHOULD, which is described in the
[SCS RFC2119 Keyword Test Guide][scs-rfc2119-guide].


## 2. Unit and Regression Tests

Conformance tests will inevitably contain some non-trivial algorithms, be it for
parsing flavor names or evaluating CVE vulnerability reports.
Developers of such tests are therefore *strongly* encouraged to include unit
and regression tests for the conformance test's logic.
As a bonus, a well written unit test also makes it easier for reviewers to
cross check a given pull request with new or enhanced conformance tests.

### Requirements

* Developing and running unit tests requires setting up the environment as outlined
  in the [README of the SCS conformance tests][tests-readme].
* The name of the Python module implementing the conformance check should be
  a valid [Python identifier][python-identifiers], to make it possible to import
  module members with the `import` statement.
* Any module that ends in `_test`, will be picked up by pytest in our CI pipeline
  (in other words, all files matched by the pattern `Tests/**/*_test.py`).
  Pytest will execute any function prefixed with `test_` as a test function, or,
  alternatively, tests based on the `unittest` module from the Python stdlib.

### Testable Conformance Tests

* Divide conformance tests scripts into smaller, loosely coupled units, i.e.,
  functions that serve one purpose. This makes it easier to test them in isolation.
* Pass externally retrieved data as function arguments instead of hardcoding the
  calls to the retrieval functions inside a function. This makes it easier to test
  an algorithm without actually making the call to some external service.

### Example

TBD
  

## 3. Principle of Least Privilege

Conformance tests are expected to be executable without admin privileges (see §2 of
[Regulations for achieving SCS-compatible certification][scs-0004-v1]).
In particular, this means:

- The cloud credentials (e.g., kubeconfig and OpenStack `clouds.yaml`) passed to
  the scripts are non-admin credentials.
- Conformance tests scripts should not require root privileges, except for the
  installation of operating system prerequisites (e.g., a Python interpreter).


[tests-readme]: https://github.com/SovereignCloudStack/standards/blob/main/Tests/README.md
[python-identifiers]: https://docs.python.org/3/reference/lexical_analysis.html#identifiers
[gh-scripts]: https://github.com/SovereignCloudStack/standards/tree/main/Tests
[cert-scopes]: https://docs.scs.community/standards/certification/scopes-versions
[scs-rfc2119-guide]: https://docs.scs.community/contributor-docs/operations/tests/rfc2119-keyword-test-guide
[scs-0004-v1]: https://github.com/SovereignCloudStack/standards/blob/main/Standards/scs-0004-v1-achieving-certification.md
