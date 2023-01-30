---
id: pr_triggers
title: Trigger builds on PR
sidebar_label: PR Triggers
---

There has been a lot of asks to trigger a build when a PR is [opened](https://ideas.circleci.com/cloud-feature-requests/p/trigger-new-build-when-a-pull-request-is-opened). Simply put without changing other functionality the ability to trigger a build
when a PR is opened is helpful.

Guess what [Swissknife](https://beta.swissknife.dev) lets you do? Simply choose the repo's you want to
trigger builds for and you are done.

## Requirements

- This feature requires your org to subscribe to the [Swissknife Pro plan](https://beta.swissknife.dev)
- Requires you to connect Swissknife to github and CircleCI using the Org settings page.

## Choose Repos you need to trigger builds for when a PR is opened

- Navigate to the PR Triggers page and create a setting for the repository you want to set up triggers for
  ![img](/img/prt/prt_dialog.png)

- Run as user requires all users to have logged in to Swissknife and connected circleci.
  - You can choose to run as user and fallback to the org token for a best effort case.
- Note this triggers a build for both `opened` and `reopened`
