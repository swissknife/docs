---
id: redundant_builds
title: Redundant Build management on steroids
sidebar_label: Redundant Builds
---

CircleCI has a feature that lets you auto cancel redundant workflows. This feature while very helpful
leaves a lot to be desired. The biggest issue is that it auto cancels workflows on the same commit if
started via an API or any other mechanism. If you want to run multiple workflows in parallel some triggered
by the API, you are out of luck. The second place this fails miserably is that it auto cancels for _all_ branches
excepting the repository's main/master branch.

This is where the [Swissknife](https://beta.swissknife.dev) service comes in. The custom config we have lets you set up auto cancellation
with more customization based on branches and workflows. You can pick branches other than just main/master to allow
all commits to build (say a release branch), and also choose workflows to never cancel, say an integration test flow that
takes a lot of time to run which isn't necessary, to re-run when you change a readme.

:::tip

Use Swissknife's redundant build cancellation to allow your developers to trigger custom workflows that don't cancel the workflow's started by pushing thr branch.

:::

## Requirements

- This feature requires your org to subscribe to the [Swissknife Pro plan](https://beta.swissknife.dev)
- Requires you to connect Swissknife to github and CircleCI using the Org settings page.
- Requires you to turn off CircleCI's default auto cancel in your project's advanced page.

  ```
  https://app.circleci.com/settings/project/github/{ORG_NAME}/{REPO_NAME}/advanced
  ```

## Creating a Redundant Build Config

Creating a Redundant Build config requires configuring 2 parts,

- what branches to cancel redundant builds on
- what workflows to cancel.

This guide will walk you through configuring a redundant build.

- Navigate to the Redundant build page and create one for the repo you want to apply it for (or edit one if you already made it)
  ![img](/static/img/rb/rb_home.png)

- Branch Conditions allow for 2 modes, branches that match, or branches that don't match. To mimic CircleCI's default auto cancel feature, one would choose `don't match` and add main/master to the list of branches. E.g. As seen below
  ![img](/static/img/rb/dont_match_master.png)

  - To also exclude release branches, add a branch prefix of `release/`. In this case both the branch list and branch prefix are obeyed.

- Workflow conditions similar to branch conditions allow for workflows that match, or don't match. Additionally they allow cancelling `all Workflows` which is the condition one would pick to mimic circle's default setting.
  ![img](/static/img/rb/workflows_match.png)
