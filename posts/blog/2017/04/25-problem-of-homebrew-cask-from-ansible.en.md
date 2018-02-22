---
title: A prescription for freezing when using homebrew_cask with Ansible
post_id: '8797'
date: '2017-04-25T11:29:56+09:00'
draft: false
tags:
  - diary
  - tech
  - ansible
  - mac
  - homebrew
---

## Cause

I seem to `sudo` in while waiting for a password.

## prescription

Just go `homebrew_cask` after putting this task ahead.

```YAML
- name: Unlock sudo 
  lineinfile: 
    dest: /etc/sudoers 
    regexp: '{{ ansible_env.USER }} ALL=\(ALL\) NOPASSWD: ALL' 
    line: '{{ ansible_env.USER }} ALL=(ALL) NOPASSWD: ALL' 
    validate: visudo -cf %s 
  become: yes 

```

If you can install it until you are satisfied, do not forget to clean up again.

```YAML
- name: Lock sudo 
  lineinfile: 
    dest: /etc/sudoers 
    regexp: '{{ ansible_env.USER }} ALL=\(ALL\) NOPASSWD: ALL' 
    line: '' 
    validate: visudo -cf %s 
  become: yes 

```

## So what happened to [Jekyll's plan](/posts/blog/2017/02/09-wordpress-to-jekyll.en) ?

The mockup on the TOP page was roughly done! Because it's a sloth Friends, it's a slow movement beyond cattle!
