---
id: queue_workflows
title: Queue Workflows
sidebar_label: Queue Workflows
---

Currently running 1 workflow at a time is not a possibility on CircleCI. This is where the CircleCI
orb steps in and makes things a lot simpler. With the use of the CircleCI API, you can ensure that
only workflow runs at a time.

```yml
version: 2.1
orbs:
  swissknife: roopakv/swissknife@x.y
jobs:
  some-job:
    docker:
      - image: "circleci/node:latest"
    steps:
      - swissknife/wait_for_workflow:
          max-wait-time: "1800"
          workflow-name: ^(staging|production)$
```

the `wait_for_workflow` command ensures that only 1 workflow with the name staging or production
can run at a time. Today if you have a deploy job there is no guarantee that only one staging
deploy can run at a time.

You also have the option to end gracefully or fail the job if the timeout fails.

### Use cases

- Run only one deploy at a time.
- If you have limited resources, say number of parallel runs on Browserstack or Saucelabs, make
  sure workflows using these services run by one.
- Run database migrations one by one
- Run terraform plan and applies one by one.

:::note

Currently this command checks only on one branch (i.e. it checks that only 1 staging workflow is
running for the current branch). We are working on a v2 that fixes this limitation.

:::
