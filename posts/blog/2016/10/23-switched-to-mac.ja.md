---
title: "自宅環境をMacに移行しました"
post_id: "8751"
date: "2016-10-23T08:10:18+09:00"
draft: false
tags: []
---

えー、自宅のWindows PCが死にました。

Surface Pro とデスクPC (ツクモ BTO をベースとした自作PC) が死にました。  
Surface Pro は電源が死んだのか、本体が死んだのか不明、デスクPCの方は HDD が死んだだけのようです。

そんなわけで2015年初頭あたりから構想していた、[自宅PC環境を全部Macに移行する計画を実施しました！](https://twitter.com/danmaq/status/786926861414572033)  
具体的にはこんな感じです。

## Mac Pro または iMac に環境を全移行する

 現在は暫定として Mac mini 2012 への移行で留めています。

## Mac でできることは Mac でやる

  * ウェブブラウザやメール、その他アクセサリ
  * SNS(Skype、Twitter他)
  * クラウドストレージ(Dropbox、OneDrive他)
  * MS Office
  * Adobe一式
  * Unity
  * Minecraft

## Windows でしかできないことは、Parallelsで！

Parallels はホスト型・ハイパーバイザ型両対応みたいですね。  
当初純ハイパーバイザ型なVM、Veertu を選んでいたのですが、3Dアクセラレーションが完全にCPU持ちっぽくてまだ尚早かな、と判断して断念。
実際、Veertu だと 3DMARK99 の時点で 20fps くらいだったのが、Parallels だと 3DMARK2001SE まで 60FPS 安定でした。

(2003辺りから所々でカクつきが見えるようになってくる)

* 弥生会計
* Visual Studio
* MikuMikuDance
* 東方とか

## モバイル環境は？

ここまで Mac Mac 言っておいてアレですが、Microsoft Surface Pro 4 を買いました！

まだ Macbook への移行は考えていません。
スクリーンタッチは割と必須っぽい！

iPad Pro + VNC でデスクトップ接続なんかも考えたのですが、以下の理由で保留しています。

* モバイル転送量制限 10GB とかあっという間すぎわろた→ミニマム 50GB 辺りから検討かな
* 通勤路線としてしばしば使う、錦糸町〜品川間の回線細すぎ(実質電話くらいしかできない)問題→引っ越しが必要

## Mac に移行して思ったこと

 あれ？想像していたより辛くなくね？
