---
title: SCS RFC2119 Keyword Test Guide
type:
status: Draft
track: Global
---
The process of test creation in Sovereign Cloud Stack (SCS) involves developing and
validating tests that align with the specific requirements and standards set by SCS.
This entails a comprehensive understanding of the SCS framework, which is built on
open-source components and aims to provide interoperable and sovereign cloud services.
In creating tests for SCS, it's essential to consider the various aspects of cloud
technology, including infrastructure, services, and the integration of these components. 
The tests should be designed to ensure that the SCS standards are met, which includes
adhering to specified requirement levels as indicated by RFC2119 keywords such as "MUST,
" "SHOULD," and "MAY."

A systematic approach to test creation involves several steps:
## 1. Understanding SCS Standards and RFC2119 Keywords

* SCS standards use RFC2119 keywords like "MUST," "MUST NOT," "SHOULD," "SHOULD NOT" and 
"MAY" to define requirements for SCS-compatible IaaS and KaaS. These
standards are crucial for ensuring interoperability and sovereignty in cloud services,
as they are built on open-source components such as Kubernetes.

## 2. Interpreting RFC2119 Keywords in the Context of SCS

* **MUST and MUST NOT**: These are binary and straightforward to test. Compliance or
non-compliance directly affects the standard meeting. For visualization, fulfilled
requirements could be marked in green, and unfulfilled ones in red.
* **SHOULD and SHOULD NOT**: These represent recommendations. While fulfilling these do
not directly affect standard compliance, it is advised for future-proofing against
potential standard evolutions. Non-compliance could be visualized in yellow, possibly
with a valid reason for non-fulfillment.
* **MAY**: This is more flexible and could be used to provide additional
information or best practices. Their impact on compliance is not as direct as "MUST" or
"SHOULD" categories. These can be marked as blue.

## 3. Channels for Output in Test Scripts

* Align the RFC2119 keywords with specific channels in test scripts:
  * "MUST" and "MUST NOT" should lead to errors
  * "SHOULD" and "SHOULD NOT" to warnings
  * "MAY" to notes or hints.

## 4. Compliance and Test Passing Criteria

* Emphasize that for a test to pass, it must meet all the "MUST" requirements without 
errors. The presence of warnings or informational items from "SHOULD" and "MAY" 
categories does not directly impact the pass/fail status but is important for overall 
quality and compatibility with future standards.

## 5. Conclusion and Continuous Improvement

* Summarize the importance of adhering to these guidelines for maintaining compliance 
and adaptability within the SCS framework. Highlight the need for ongoing updates and 
revisions to the document to align with evolving standards and best practices in cloud 
infrastructure and services.
