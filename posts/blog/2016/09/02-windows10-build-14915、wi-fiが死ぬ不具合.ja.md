---
title: "Windows10 build 14915、Wi-Fiが死ぬ不具合"
post_id: "8741"
date: "2016-09-02T09:04:38+09:00"
draft: true
cover: ../../../assets/misc/2016-windows10-insider-problem.jpg
tags: []
---


ようやく Nightly(Weekly?) Build 特有のきな臭さが出てきたな……。 Windows 10 Insider Preview の新しいビルド、14915 が来ていたので寝る前にインストール。 朝起きたら無線 LAN がうんともすんとも言わなくなった。 問題が起きた PC は、[Microsoft Surface Pro](https://danmaq.com/surface-pro)。

## やったこと

  1. ドライバを削除して強制再インストール→効果なし
  2. ツーボタン シャットダウン→効果なし

**[Windows 10 Insider Preview Build 14915 killing Wi-Fi for some users, and there's no fix - betanews](http://betanews.com/2016/09/01/insider-preview-build-14915-kills-wifi/)**

 やはりアップデートが不具合を誘発している原因の模様。 USB 経由での有線接続は行けるようなので、それで騙し騙し運用しつつ、修正アップデートを待つことになりそう。


## 追記
報告遅れたけど、14926 の時点でWi-Fi接続は改善されている模様。 その代わりスタートメニューの表示がおかしくなってしまったが……それはいずれ書こう。
