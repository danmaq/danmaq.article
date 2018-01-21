---
title: "[●情報流出]アカウントのメルアドで統計とってみた"
post_id: "2550"
date: "2013-08-27T23:14:25Z"
draft: false
---

<!--2ちゃんねるビューア(通称●)のアカウント情報流出した件について、中の人: 停止信号 ★氏が流出対象者のメールアドレス一覧を公開していたので適当に集計してみました。-->

# [●情報流出]アカウントのメルアドで統計とってみた

2ちゃんねるビューア(通称●)のアカウント情報流出した件で一騒ぎ起きていますね。 中の人: 停止信号 ★氏が<http://j416.dip.jp/2ch/> で流出対象者の一意IDとそれに紐づくメールアドレスが公開されています。 んで、40000件超の流出アカウントのメールアドレスが公開されているので、折角だから統計とってみました。 8月27日の時点でうｐろだが流れてしまって404になっていますが、一度公開された情報ゆえ誰かしらがミラーなり魚拓なりとっているかと思いますのでそちらを探してご参照戴ければ幸いです。(元ファイルを上書きして消してしまい、CSV化したテキストしか残っていないため転載断念しました)  _Excel使って派手派手なグラフとか作ってみようと一瞬考えたけどﾏﾝﾄﾞｸｾ。_どうせ誰か勝手にやるだろうし。 **■概要** 上記の公開データのうち、メールアドレスの部分を適当にCSVに整形して、MySQLに食わせて色々と集計してみました。 **●集計件数** `41,591件` メールアドレスとして明らかにおかしいのが数十件あったので手動で補正しましたが、元のアドレスが予想不能なまでにおかしいデータが数件あったので、そちらについては除外しました。 なので元データより少し少ないです。 **●ドメイン別件数** `4,155件` 以下ドメインと書いた場合、サブドメインを除外した集計です。 (例：`xxx.yyy.ne.jp` → `yyy.ne.jp` で判断) **●サーバ管理者と思われるユーザの件数** `257件` メールのユーザ名が下記のものを集計しました。 `abuse, admin, administrator, anyone, contact, info, mailmaster, noone, nothing, postmaster, someone, support, webmaster` そんなにいないだろうと思っていましたが結構多くてビックリ。 かくいう私も仲間なんですけどね。(ただし今回私はリスト入りしていませんでした) **●TLD別集計TOP10**

順位
TLD
件数

`1`
`.jp`
`33,472`

`2`
`.com`
`6,293`

`3`
`.net`
`966`

`4`
`.org`
`155`

`5`
`.to`
`131`

`6`
`.us`
`67`

`7`
`.info`
`55`

`8`
`.cc`
`50`

`8`
`.name`
`50`

`10`
`.tv`
`32`
やっぱりというか、日本ドメインが圧倒的ですね。 **●属性型JPドメイン集計TOP10**

順位
ドメイン
件数

`1`
`.ne.jp`
`25,540`

`2`
`.or.jp`
`2,731`

`3`
`.co.jp`
`623`

`4`
`.ac.jp`
`217`

`5`
`.gr.jp`
`45`

`6`
`.ad.jp`
`17`

`7`
`.go.jp`
`5`

`8`
`.ed.jp`
`2`
8件のみでした。 lg.jpとかもちょっと期待していましたが見つかりませんでした。 **●ドメイン集計TOP20**

順位
ドメイン
件数

`1`
`ocn.ne.jp`
`3,805`

`2`
`nifty.com`
`3,382`

`3`
`docomo.ne.jp`
`3,346`

`4`
`ezweb.ne.jp`
`2,510`

`5`
`so-net.ne.jp`
`2,489`

`6`
`biglobe.ne.jp`
`1,956`

`7`
`softbank.jp`
`1,568`

`8`
`plala.or.jp`
`1,502`

`9`
`ybb.ne.jp`
`1,362`

`10`
`dion.ne.jp`
`1,209`

`11`
`softbank.ne.jp`
`713`

`12`
`odn.ne.jp`
`649`

`13`
`home.ne.jp`
`618`

`14`
`dti.ne.jp`
`614`

`15`
`eonet.ne.jp`
`604`

`16`
`nifty.ne.jp`
`528`

`17`
`email.ne.jp`
`466`

`18`
`me.com`
`427`

`19`
`iij4u.or.jp`
`347`

`20`
`vodafone.ne.jp`
`325`
結構ばらけたので20位まで集計しました。 携帯キャリアの序列がわかりやすいですｗ 巻き添え規制の喰らいやすさで定評のあるプロバイダがちらほら見えますね。 **●.co.jpユーザ集計TOP20**

順位
ドメイン
件数

`1`
`yahoo.co.jp`
`34`

`2`
`vip.co.jp`
`16`

`3`
`ybb.co.jp`
`12`

`4`
`docomo.co.jp`
`10`

`5`
`design.co.jp`
`6`

`6`
`hot.co.jp`
`5`

`6`
`nec.co.jp`
`5`

`8`
`drive.co.jp`
`4`

`8`
`kyodotokai.co.jp`
`4`

`10`
`chunichi.co.jp`
`3`

`10`
`satelight.co.jp`
`3`

`10`
`seiwado.co.jp`
`3`

`10`
`softbank.co.jp`
`3`

`14`
`brother.co.jp`
`2`

`14`
`cs-grp.co.jp`
`2`

`14`
`daifuku.co.jp`
`2`

## Comments

**[yasudonok](#22 "2013-08-27 23:29:52"):** [●情報流出]アカウントのメルアドで統計とってみた by @danmaq http://t.co/SU3FbMydwi
