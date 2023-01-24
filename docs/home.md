---
id: home
title: Getting started with Swissknife
sidebar_label: Getting Started
---

Swissknife is a CircleCI orb and service that backs up the orb to simplify and make building
complex tasks in pipelines easier.

## Using the orb

Using the orb is as simple as defining the orb at the top of your Circle `config.yml`. Note that
you have to be using v2.1 of Circle config to use orbs.

```
orbs:
  swissknife: roopakv/swissknife@0.69.0
```

Read more about the various commands and what you can do with the Orb in the Orb Features section.

## Service

The Swissknife service adds functionality which cannot be done by just an Orb. The service is
currently in beta and available at [https://beta.swissknife.dev](https://beta.swissknife.dev)
