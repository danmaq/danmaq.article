---
title: "数当てバトルゲーム"
post_id: "2909"
date: "1996-03-01T00:00:00+09:00"
draft: true
tags: []
---


よくゲームプログラム集などに載ってる数当てゲームをうまくバトルゲームに発展させたものです。

ルールは大体想像がつくかと思いますが、簡単に説明するとランダムで出される 1～9 までの数を五ターン以内に当てて、少ないターン数で答えれば敵に大ダメージを与えることが出来ます。
一定のダメージを敵に与えると敵を倒すことが出来、第二戦へと突入します。

敵は戦闘を重ねるごとに強くなっていきますので一ターンごとに出るヒントを元に慎重に推理することが重要となってきます。

このゲームの目玉は特定条件で出る_『運命のスロット』_と言う隠し技なのですが、その名の通り出目によって今後の戦闘の運命を左右される重要な要素です。
例えば 2 でそろうと二回攻撃、7 なら超必殺、8 なら HP 全回復などありますが中にはプレイヤーの攻撃力半減、果ては_即ゲームオーバー_などとシビアな出目もあります。
この要素がどうやらウケたらしく、部活内でも結構広まってました(笑

また、部活の顧問もこれを見て今までプログラムの効率的な組み方程度しか教えてくれなかったところを、初めてゲームとしての批評を下してくれました。
これが私のプログラムをいっぱしの『ゲームソフト』と見てくれたのか、それとも余りにクソゲーだったので見ていられなくなったのかは結局分かりませんでしたが。
少なくとも自分の作品の中では、まともな部類ですｗ

## Java移植版について

仕事上 Java のスキルが必要だったので勉強がてら移植したものです。
完全な移植ではなく、ビジュアル要素や「運命のスロット」機能などはありません。

* ジャンル: クイズ
* 開発言語(旧): N88-日本語BASIC(86) MS-DOS版
* 開発言語(移植版): JavaSE 6
* 最終更新: 2007/1/4
* [JAVA移植版をダウンロード](https://danmaq.com/filez/app/java/NumBattleGame.zip) ([filesize]https://danmaq.com/filez/app/java/NumBattleGame.zip[/filesize])