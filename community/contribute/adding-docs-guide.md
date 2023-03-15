# Adding Docs Guide

In this Guide you will learn how to integrate your documentation to the SCS documentation, which you will find on [docs.scs.community](https://docs.scs.community).

## Step 1 – Documentation type

Determine the type of your documentation and click to continue.

1. [Technical documentation](#1-technical-documentation)
2. [Operational documentation](#2-operational-documentation)
3. [Community documentation](#3-community-documentation)

If unsure don't hestitate to ask us at [Matrix](https://github.com/SovereignCloudStack/docs/blob/main/community/communication/matrix.md)

## 1. Technical Documentation

### Step 1 – Checklist

Your repository containing the documentation has to...

- be a public repository
- contain a directory named `/doc` or `/docs` within root, containing the documentation files

The documentation files have to be in markdown format and...

- comply [SCS licensing guidelines](https://github.com/SovereignCloudStack/docs/blob/main/community/github/dco-and-licenses.md)
- match our
  - [markdown file structure guideline](https://github.com/SovereignCloudStack/docs/blob/main/community/contribute/doc-files-structure-guide.md)
  - linting Rules
  - [styleguide](https://github.com/SovereignCloudStack/docs/blob/main/community/contribute/styleguide.md)

### Step 2 – Adding your repo to the docs.json

File a Pull Request within the [docs-page](https://github.com/SovereignCloudStack/docs-page) repository and add your repo to the docs.package.json:

```json
[
  {
    "repo": "demo-organisation/demo-repository",
    "source": "doc/*.md",
    "target": "docs",
    "label": "demo-repository-label"
  }
]
```

| key    | description                                                                                                       |
| ------ | ----------------------------------------------------------------------------------------------------------------- |
| repo   | reference to github organisation and repository                                                                   |
| source | path to content to copy: Either glob matching individual markdown files OR the path of a single directory         |
| target | directory where the files should be copied to within the docs-page repo                                           |
| label  | label for directory. only mandatory if source file is set to copy only \*.md files and not the complete directory |

Once it is approved and merged, a postinstall script will be triggered within the build process. This initiates downloading, copy and distilling which results in this static generated [documentation](https://docs.scs.community) page – now with your content.

An explanation on how the sync & distill workflow and a guide on how to test it in a local development environment you will find [here](https://github.com/SovereignCloudStack/docs/blob/main/community/contribute/docs-workflow-explanation.md).

## 2. Operational documentation

Your doc files contain operational knowledge. Which layer in the stack do they belong to?

1. iaas
2. iam
3. kaas
4. operations

File a Pull Request within the [docs](https://github.com/SovereignCloudStack/docs) repository and add your markdown files to the fitting directory.

## 3. Community documentation

Your doc files contain knowledge regarding our community? Choose the right directory. If unsure don't hestitate to ask us at [Matrix](https://github.com/SovereignCloudStack/docs/blob/main/community/communication/matrix.md).

File a Pull Request within the `docs` repository and add your markdown files to the fitting directory.
