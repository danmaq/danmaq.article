---
title: '[● Information leakage] I have taken statistics on the account merid'
post_id: 2550
date: '2013-08-27T23:14:25+09:00'
draft: true
tags: []
---

2 chan channel viewer (commonly known as ●) account information It is one thing waking up with the incident that leaked out. Inside person: Stop signal ★ Mr. ___ [http://j416.dip.jp/2ch/](http://j416.dip.jp/2ch/) has released the unique ID of the spill target and the mail address associated with it. So, since the e-mail address of more than 40,000 spill accounts has been released, I got statistics as it is a point. As of August 27, parocco has flowed to 404, but because of the information released once it seems that someone is a mirror and a fishery, so if you can look for it and see it I'm happy. (We overwrote and erased the original file and only _abbreviated_ CSV converted text, so I abandoned it.) _I thought for a moment to make a flashy graph using Excel, but it was Mandochse._ Anyway I will do it without permission.

## ■ Overview

Of the above public data, I formatted the part of the e-mail address appropriately into CSV, and added it to MySQL and compiled variously.

## ● Total count

`41,591件` There were dozens of obviously funny e-mail addresses, so I corrected them manually, but since there were several funny data before the original address was unpredictable, I excluded that. So it's a bit less than the original data.

## ● Count by domain

If you write below `4,155件` domains, it is aggregation excluding subdomains. (Example: `xxx.yyy.ne.jp` → `yyy.ne.jp` )

## ● Number of users considered to be server administrators

`257件` The following user name `257件` mail totaled the following. `abuse, admin, administrator, anyone, contact, info, mailmaster, noone, nothing, postmaster, someone, support, webmaster` I thought that it was not that much, but it was quite surprising. That is why I am a friend. (But I did not enter the list this time)

## ● TLD Total TOP 10

Number of ranked TLD

`1` `.jp` `33,472`

`2` `.com` `6,293`

`3` `.net` `966`

`4` `.org` `155`

`5` `.to` `131`

`6` `.us` `67`

`7` `.info` `55`

`8` `.cc` `50`

`8` `.name` `50`

`10` `.tv` `32` thought, the Japanese domain is overwhelming.

## ● Attribute type JP domain aggregation TOP 10

Rank Domain Count

`1` `.ne.jp` `25,540`

`2` `.or.jp` `2,731`

`3` `.co.jp` `623`

`4` `.ac.jp` `217`

`5` `.gr.jp` `45`

`6` `.ad.jp` `17`

`7` `.go.jp` `5`

`8` `.ed.jp` `2` was only 8. I was expecting a bit like lg.jp, but I could not find it.

## ● Domain TOP 20

Rank Domain Count

`1` `ocn.ne.jp` `3,805`

`2` `nifty.com` `3,382`

`3` `docomo.ne.jp` `3,346`

`4` `ezweb.ne.jp` `2,510`

`5` `so-net.ne.jp` `2,489`

`6` `biglobe.ne.jp` `1,956`

`7` `softbank.jp` `1,568`

`8` `plala.or.jp` `1,502`

`9` `ybb.ne.jp` `1,362`

`10` `dion.ne.jp` `1,209`

`11` `softbank.ne.jp` `713`

`12` `odn.ne.jp` `649`

`13` `home.ne.jp` `618`

`14` `dti.ne.jp` `614`

`15` `eonet.ne.jp` `604`

`16` `nifty.ne.jp` `528`

`17` `email.ne.jp` `466`

`18` `me.com` `427`

`19` `iij4u.or.jp` `347`

`20` `vodafone.ne.jp` `325` Because it was pretty divergent, I counted up to 20th place. It is easy to understand the hierarchy of mobile carriers w Some of the providers with proven reputation for easy ease of collateral regulation can be seen.

## ● .co.jp User Total TOP20

Rank Domain Count

`1` `yahoo.co.jp` `34`

`2` `vip.co.jp` `16`

`3` `ybb.co.jp` `12`

`4` `docomo.co.jp` `10`

`5` `design.co.jp` `6`

`6` `hot.co.jp` `5`

`6` `nec.co.jp` `5`

`8` `drive.co.jp` `4`

`8` `kyodotokai.co.jp` `4`

`10` `chunichi.co.jp` `3`

`10` `satelight.co.jp` `3`

`10` `seiwado.co.jp` `3`

`10` `softbank.co.jp` `3`

`14` `brother.co.jp` `2`

`14` `cs-grp.co.jp` `2`

`14` `daifuku.co.jp` `2`

## Comments

**[yasudonok](#22 "2013-08-27 23: 29: 52") :** \[● Information leakage\] I **[looked](#22 "2013-08-27 23: 29: 52")** at statistics on the account's merads by @ danmaq [http://t.co/SU3FbMydwi](http://t.co/SU3FbMydwi)
