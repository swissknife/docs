---
id: ttl_cache
title: TTL Cache
sidebar_label: TTL Cache
---

CircleCI's caching lets you cache directories based on checksum files say `package.json` or `go.mod`.
However in some scenarios it makes sense to have a cache with a TTL. This is helpful when the cache needs
to be expired in some time period in order to generate a newer cache so that builds continue to use the
cache effeciently. A good example of this would be things like webpack builds, golangci-lint, eslint
etc.

:::tip

Use a cache with a TTL everywhere that an operation is based on many files in the repo and the inbuilt
command manages its own cache. E.g) a TTL cache is very useful in the case of golangci-lint.

:::

## Usage

Simply use Swissknife ttl cache instead of `restore_cache` and `save_cache`.

Include the orb in your config as follows.

```yml
version: 2.1
orbs:
  swissknife: roopakv/swissknife@0.46.0 // Grab the latest version from https://orb.swissknife.dev
```

### Restore Cache

The following step is used to restore cache. The cache key prefix is a string similar to the
key you would pass to `restore_cache` or `save_cache`.

```yml
- swissknife/ttl-cache:
    type: restore
    cache-key-prefix: go-mod-v1-{{ checksum "go.mod" }}-{{ checksum "go.sum" }}
```

### Save Cache

The following step is used to save cache. The cache key prefix is a string similar to the
key you would pass to `restore_cache` or `save_cache`. The `save-cache-directory-1`, and similarly 2
and 3 are the directories to save in the cache. Currently ttl-cache allows saving upto 3 directories,
All directories saved are saved recursively. These are very similar to the paths field in the native
`save_cache` command.

```yml
- swissknife/ttl-cache:
    type: save
    cache-key-prefix: go-mod-v1-{{ checksum "go.mod" }}-{{ checksum "go.sum" }}
    save-cache-directory-1: /path/to/save
    save-cache-directory-2: /another/path/to/save
```

### Branch based cache behavior

In many cases including the branch in the cache key can be somewhat helpful and the `ttl-cache`. When
including the branch in the cache there are two ways

- simple branch inclusion
- trust only base branch

The simple branch inclusions means that there is a cache per branch. In many cases this is simple and
just works.

The trust only base branch is very helpful in certain cases. Basically caches generated on the base branch
(master, main etc.) are restored. This way a branches for a pull request get the benefit of caches,
but also a cache generated on that branch is never used by the base branch keeping the base branch
clean. This approach is the default approach and is best for things like lint cache, build cache
etc.
