---
title: README for danmaq.article
draft: true
---

[![CircleCI](https://circleci.com/gh/danmaq/danmaq.article/tree/master.svg?style=svg)](https://circleci.com/gh/danmaq/danmaq.article/tree/master)

# Articles markdown for danmaq.com

* Master language: _ja_ (Japanese)
* Other language: translated by _Google Translate_.
* See also: [danmaq/danmaq.gatsby](https://github.com/danmaq/danmaq.gatsby)

## Memo

### Common pipeline

* *.ja.md -> *.en.md via Google Translate
    * Require `google-translate.json` as a GCP key file.

### Dual Mode

* `yarn start`: watch save -> pipeline.
* `yarn run translate:all`: All files.