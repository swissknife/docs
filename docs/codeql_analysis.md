---
id: codeql_analysis
title: CodeQL Code Scanning
sidebar_label: CodeQL Code Scanning
---

Github recently launched [code scanning](https://github.com/features/security) which is based off of
an open source collection of CodeQL queries which analyze code to find security vulnerabilities. This
is only available on their enterprise plan & public repositories via github actions.
Swissknife tries to reduce this gap by offering the ability to run scans via CircleCI as well.

:::tip

Once the report is reported is generated it can be viewed at [beta.swissknife.dev](https://beta.swissknife.dev)

:::

## Usage

The Swissknife orb adds a job that can run scans against your codebase very easily. An example
snippet that runs a scan against all detected (language detection works only on Github repos) once
a day is seen with the example CircleCI workflow.

```yml
version: 2.1
orbs:
  swissknife: roopakv/swissknife@x.y // Grab the latest version from https://orb.swissknife.dev
workflows:
  daily-codeql:
    triggers:
      - schedule:
          cron: "0 10 * * *" # run at 10am UTC daily
          filters:
            branches:
              only:
                - master
    jobs:
      - swissknife/codeql-analysis:
          name: "CodeQL Scan"
```

This command has a few options that allow you to customize certain things

| parameter              | default                 | usage                                                                                                                                                                                 |
| ---------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom-init-steps`    | []                      | A set of custom CircleCI steps you can pass to the job. These steps are run after your code is checked out. This can be used to setup the environment etc                             |
| `languages`            | auto                    | If auto, and the repository is on github this tries and gets languages present in repo from Github. If set to a comma separated list of languages only these are supported.           |
| `output-dir`           | /home/circleci/analysis | The dir where the reports are stored                                                                                                                                                  |
| `ram-limit`            | 1024                    | The max RAM the analysis can used                                                                                                                                                     |
| `report-to-swissknife` | true                    | Whether the report can be sent to the Swissknife Service. Used to display easy to read reports. This requires the SWISSKNIFE_API_KEY variable to be set. [Report viewing coming soon] |
| `resource-class`       | medium                  | The resource class to use for the image on CircleCI                                                                                                                                   |
