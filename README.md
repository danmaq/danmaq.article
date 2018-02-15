---
draft: true
---

[![wercker status](https://app.wercker.com/status/85b41d5ce327dee9d18b34a498e171bf/s/master "wercker status")](https://app.wercker.com/project/byKey/85b41d5ce327dee9d18b34a498e171bf)
[![CircleCI](https://circleci.com/gh/danmaq/danmaq.article/tree/master.svg?style=svg)](https://circleci.com/gh/danmaq/danmaq.article/tree/master)

# Articles markdown for danmaq.com

* Master language: ja
* Other language: translated by Google Translate.

## Memo

### Common pipeline

* *.ja.md -> *.en.md via Google Translate

### Dual Mode

* yarn start: watch save -> pipeline
* yarn run translate:
    * uncommited diff
    * new file
    * *.ja.md has newest commit
