---
title: "Ansible で homebrew_cask を使うとフリーズする場合の処方箋"
post_id: "8797"
date: "2017-04-25T11:29:56+09:00"
draft: false
tags: ['diary', 'tech', 'ansible', 'mac', 'homebrew']
---

## 原因

中で `sudo` してるみたいでパスワード待ちになる。

## 処方箋

先んじてこのタスクを入れてから `homebrew_cask` するだけ。

<!-- more -->

```YAML
- name: Unlock sudo
  lineinfile:
    dest: /etc/sudoers
    regexp: '{{ ansible_env.USER }} ALL=\(ALL\) NOPASSWD: ALL'
    line: '{{ ansible_env.USER }} ALL=(ALL) NOPASSWD: ALL'
    validate: visudo -cf %s
  become: yes
```

満足するまでインストールできたら、後片付けを忘れずに。

```YAML
- name: Lock sudo
  lineinfile:
    dest: /etc/sudoers
    regexp: '{{ ansible_env.USER }} ALL=\(ALL\) NOPASSWD: ALL'
    line: ''
    validate: visudo -cf %s
  become: yes
```

## そいえば [Jekyll 化計画](/posts/blog/2017/02/09-wordpress-to-jekyll.ja.md)どうしたんだよ？

TOP ページのモックアップが大雑把にできたよ！ ナマケモノのフレンズだから牛歩以上にゆっくりな動きだよ！
