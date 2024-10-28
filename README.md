# SCS Docs Page Readme

## Rendered docs

The rendered docs are on the [SCS Docs Pages](https://docs.scs.community/).
The staging branch gets rendered to the [staging server](https://docs-staging.scs.community/).
Note that there are a few minutes delay due to the way the sync is done.

## Licenses

The content of this repository is published under multiple licenses.
All documentation content files within `docs, dev-docs, standards and community` are licensed under [CC-BY-SA 4.0](LICENSE-DOCS).
All source code of this documentation page is licensed under the [MIT](LICENSE-CODE) license.

## Overview

SCS Docs Page is a static page rendering the markdown content of all Docs regarding SCS. Underlaying engine is [Docusaurus](https://docusaurus.io/), a React based static page generator.

## Developing locally

In order to run the Docs locally, make sure you have node.js and npm installed.

CD in your Terminal to the root directory of the cloned repository. Install all the dependencies and start the local development server.

```bash
npm install
npm start
```

## Linting problems

The repository establishes commit hooks which check the files for correctness and style.
Have a look at the [linting-guide](https://docs.scs.community/community/contribute/linting-guide/) to get detailed information.
