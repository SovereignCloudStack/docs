---
title: SCS Conformance Test Implementation Guide
type:
status: Draft
track: Global
---

SovereignCloudStack (SCS) uses [conformance tests][gh-scripts] to certify
compliance of a given cloud offering with respect to a given [certificate
scope][cert-scopes] such as *SCS Compatible IaaS v4*.
Our aim is that these tests are reliable, consistent and comprehensible for
the users.
This document is a guideline for conformance test authors and summarizes the
current best practices to achieve this goal.

## 1. Mapping of RFC2119 Keywords

Test authors working on new and existing conformance tests for an SCS standard
must implement the keywords such as MUST and SHOULD according to the [SCS
RFC2119 Keyword Test Guide][scs-rfc2119-guide].

## 2. Unit and Regression Tests

Test authors are *strongly* encouraged to include unit and regression tests for
the conformance test's logic.
Conformance tests will inevitably contain some non-trivial algorithms, be it for
parsing flavor names or evaluating CVE vulnerability reports.
As a bonus, a well written unit test also makes it easier for reviewers to
cross check a given pull request with new or enhanced conformance tests.

In general, unit and regression tests for the conformance tests are located in
the same location as the conformance tests, that is, the `Tests/` directory of
the [SCS standards repository][scs-standards].
Setup and development of the unit tests is described in the [SCS conformance
tests README][tests-readme].

### Naming Conventions

Any module that ends in `_test` will be picked up as a unit test module by
pytest in our CI pipeline (in other words, all files matched by the pattern
`Tests/**/*_test.py`).
Pytest will execute any function prefixed with `test_` as a test function, or,
alternatively, tests based on the `unittest` module from the Python standard
library.

Follow these naming rules:

* The name of a unit test module is constructed from the module to be unit
  tested and the `_test` suffix. For example, unit tests for `flavor_names.py`
  should reside in `flavor_names_test.py`.
* The name of a Python module in general should be a valid [Python
  identifier][python-identifiers], to allow imports via the `import` statement.
  For example, use `flavor_names.py` instead of `flavor-names.py`.

### Write Testable Conformance Tests

Software design fills complete book shelves and this section can only cover some
basic best practices.
As a general rule of thumb, the earlier you begin writing unit tests, the better
– it will force you to write modules that are easy to test.

Divide conformance tests scripts into smaller, loosely coupled units, i.e.,
functions that serve one purpose each.
Use the [*dependency injection*][wiki-di] technique, i.e., pass externally
retrieved data as function arguments instead of hardcoding the calls to the
retrieval functions inside a function.
Avoid logging calls deep down in the call hierarchy and use explicit return
values or raise exceptions, instead.
Here is an abstract example of a conformance test which does exactly that:

```python
# property_compliance.py

def retrieve(location):
    """Retrieve raw data via network."""
    ...

def parse(data):
    """Parse raw data and return a dict."""
    ...

def handle(...):
    """Evaluate parsed data."""
    ...

def main(args):
    ...
    data = retrieve(location)
    parsed = parse(data)
    result = handle(parsed)
    ...
    if result.some_prop != expected_value:
        logging.warn("some_prop is not as expected: %s (vs. %s)", result.some_prop, expected_value)
    ...
    return result.success

if __name__ == "__main__":
    # using sys.exit(…) only here makes it possible to unit test main(…)
    sys.exit(main(sys.argv))
```

Adhering to this style makes it easier to test an algorithm in isolation,
without actually making a call to some external service.

### Pytest Test Example

Assuming we want to unit test some members of the module `property_compliance`
from the previous section, we would create a file `property_compliance_test.py`
with the following content as a starting point:

```python
"""Unit tests for property_compliance.

(c) Your Name <your.name@example.com>, 4/2024
SPDX-License-Identifier: CC-BY-SA-4.0
"""

import pytest

from property_compliance import parse


def test_success():
    assert parse("some valid input") == "expected output"


def test_failure():
    with pytest.raises(ValueError):
        parse("invalid input")
```

## 3. Conformance Tests Shouldn't Require Admin Privileges

Conformance tests are expected to be executable without admin privileges (see §2 of
[Regulations for achieving SCS-compatible certification][scs-0004-v1]).
In particular, this means:

* The cloud credentials (e.g., kubeconfig and OpenStack `clouds.yaml`) passed to
  the scripts are non-admin credentials.
* Conformance tests scripts should not require root privileges, except for the
  installation of operating system prerequisites (e.g., a Python interpreter).

[scs-standards]: https://github.com/SovereignCloudStack/standards/
[tests-readme]: https://github.com/SovereignCloudStack/standards/blob/main/Tests/README.md
[python-identifiers]: https://docs.python.org/3/reference/lexical_analysis.html#identifiers
[gh-scripts]: https://github.com/SovereignCloudStack/standards/tree/main/Tests
[cert-scopes]: https://docs.scs.community/standards/certification/scopes-versions
[scs-rfc2119-guide]: https://docs.scs.community/contributor-docs/operations/tests/rfc2119-keyword-test-guide
[scs-0004-v1]: https://github.com/SovereignCloudStack/standards/blob/main/Standards/scs-0004-v1-achieving-certification.md
[wiki-di]: https://en.wikipedia.org/wiki/Dependency_injection
