---
title: SCS RFC2119 Keyword Test Guide
type:
status: Draft
track: Global
---

## Introduction

The process of test creation and standards definition in Sovereign Cloud Stack (SCS)
involves developing and validating tests that align with the specific requirements and
standards set by SCS. This entails a comprehensive understanding of the SCS framework,
which is built on open-source components and aims to provide interoperable and sovereign
cloud services. In creating tests for SCS, it's essential to consider the various aspects
of cloud technology, including infrastructure, services, and the integration of these
components. The tests should be designed to ensure that the SCS standards are met, which
includes adhering to specified requirement levels as indicated by [RFC2119 keywords](https://datatracker.ietf.org/doc/html/rfc2119).

## 1. Understanding SCS Standards and RFC2119 Keywords

SCS standards use RFC2119 keywords like:
* **MUST** (same as **REQUIRED**, **SHALL**),
* **MUST NOT** (same as **SHALL NOT**),
* **SHOULD** (same as **RECOMMENDED**),
* **SHOULD NOT** (same as **NOT RECOMMENDED**),
* **MAY** (same as **OPTIONAL**)

to define requirements for SCS-compatible IaaS and KaaS resources. These standards are crucial for ensuring interoperability and sovereignty in cloud services, as they are built on open-source components such as Kubernetes.

To ensure readability and comprehensibility, only the main keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT** and **MAY** are referred to below.

## 2. Interpreting RFC2119 Keywords in the Context of SCS

* **MUST and MUST NOT**: These are binary and straightforward to test. Compliance or
non-compliance directly affects the standard meeting. For visualization, fulfilled
requirements could be marked in green, unfulfilled ones in red.
* **SHOULD and SHOULD NOT**: These represent recommendations. While fulfilling these do
not directly affect standard compliance, it is advised for future-proofing against
potential standard evolutions. Non-compliance could be visualized in yellow, possibly
with a valid reason for non-fulfillment.
* **MAY**: This is more flexible and could be used to provide additional
information or best practices. Their impact on compliance is not as direct as **MUST** or
**SHOULD** categories. These can be marked as blue.

## 3. Channels for Output in Test Scripts

* Align the RFC2119 keywords with specific channels in test scripts:
  * **MUST** and **MUST NOT** lead to the ERROR channel for failed tests
  * **SHOULD** and **SHOULD NOT** lead to the WARNING channel, the test is still passed
  * **MAY** to leads to the INFO channel, the test is still passed

## 4. Compliance and Test Passing Criteria

A test is considered to pass if and only if it doesn't produce any messages on the
ERROR nor the CRITICAL channel. The presence of warnings or informational items from
**SHOULD** and **MAY** categories do not directly impact the pass/fail status but is
important for overall quality and compatibility with future standards.

A test can have one of three results:

* fail: if it has at least one message on ERROR
* DNF (did not finish): if it has no message on ERROR, but at least one on CRITICAL
* pass: otherwise

## 5. Example: Standards Document using RFC2119 Keywords

The following example of a fictitious document for a "Web Server Installation Standard"
is intended to illustrate the use of RFC2119 keywords in connection with the creation of
SCS-compliant standard documents.

### Web Server Installation Standard
#### Purpose
This document provides a concise set of requirements for installing a secure web server.

#### Requirements
* Web Server Software: Apache HTTP Server 2.4.x or Nginx 1.18.x **MUST** be installed. No
other web server software versions or types are permitted.

* Operating System: The server **MUST** run on an OS that receives current security updates.
Unsupported versions **MUST NOT** be used.

* TLS Configuration: TLS 1.2 or higher **MUST** be enabled for all connections. SSL and
earlier TLS versions **MUST NOT** be used.

* Security Patches: The web server and OS **MUST** be kept up-to-date with security patches.
Critical patches **SHOULD** be applied within 48 hours of release.

* Firewall Setup: The firewall **SHOULD** be configured to allow only necessary ports,
such as 80 (HTTP) and 443 (HTTPS). All unnecessary ports **SHOULD NOT** be open.

* Backup Plan: Regular backups of the web server data **MAY** be performed, and it is
recommended that backup integrity checks are conducted to ensure recoverability.

#### Compliance
Failure to comply with these requirements results in the web server being
considered non-compliant with the organization's security policies.

## 6. Example: Test script using RFC2119 Keywords 

The following example of a fictitious code for a test of "process_requirements"
is intended to illustrate the use of RFC2119 keywords in connection with the
creation of SCS-compliant standard tests.

```python
import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def process_requirements(var1, var2):
    try:
        # debug log for input variables
        logger.debug(f"Received input var1: {var1}, var2: {var2}")
        
        # example of an error case (equivalent to MUST and MUST NOT)
        if var1 < 0:
            logger.error("var1 must be positive")
        elif var1 > 100:
            logger.error("var1 must not exceed 100")
        
        # add debug log to confirm evaluation of var1
        logger.debug(f"var1 evaluated: {var1 > 0 and var1 < 100}")

        # example of a warning case (equivalent to SHOULD and SHOULD NOT)
        if var2 < 10:
            logger.warning("var2 should be at least 10 for optimal performance")
        elif var2 > 50:
            logger.warning("var2 should not exceed 50 for optimal performance")
        
        # add debug log to confirm evaluation of var2
        logger.debug(f"var2 evaluated: {var2 > 10 and var2 < 50}")

        # example of an informative case (equivalent to MAY)
        if var1 + var2 < 100:
            logger.info("Combination is within recommended range")
        else:
            logger.info("Combination exceeds the recommended range but may still proceed")
        
        # debug log before completing the process
        logger.debug(f"Final evaluation before completion: var1 + var2 = {var1 + var2}")

        # success log
        logger.debug("Process completed successfully")

    except ValueError as e:
        # debug log before raising a critical error
        logger.debug("Encountered a critical error about to log", exc_info=True)
        logger.critical(f"Process failed: {e}", exc_info=True)
```
Note: The DEBUG channel is used for additional information for developers to better understand a
process and does not apply to RFC2119 keywords.
