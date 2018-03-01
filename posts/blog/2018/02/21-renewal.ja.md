---
title: "danmaq Web ページのリニューアルお知らせ (Jekyll じゃなくて Gatsby だけど)"
date: "2018-02-21T13:47:00+09:00"
draft: false
cover: ../../../assets/misc/2017-wp-to-jekyll.png
tags:
  - release
  - diary
  - gatsby
  - jekyll
  - wordpress
---

以前 WordPress やめて Jekyll でブログ作る！って豪語しましたが、ようやく実現のめどが立ってきました。
(実際には Jekyll ではなく Gatsby っていう ~~整髪料~~ 、もとい React ベースのブログツールです)

これによって、Markdown を GitHub にプッシュするだけで勝手にブログを更新できるようになりました！
さらに英語版ブログも作りました。ヘッダの国旗を押すと、英語と日本語を切り替えることができます。
記事を作ると、勝手にGoogle翻訳してくれる便利機能付きです。

まだこのページはテスト版ですが、4月～GW辺りを目途に、[旧ブログ](https://danmaq.com/) を完全に置き換えたいと思います。


# まだ残っている問題

* 記事の Markdown が WordPress からの機械的抽出で、手動調整が必要なところがかなりある
* 記事全件突っ込んでブログ作ると、ごく一部のChrome 環境で死ぬ。(しかも原因不明)
