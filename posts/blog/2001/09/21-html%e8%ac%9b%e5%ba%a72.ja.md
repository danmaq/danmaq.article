---
title: "HTML講座2"
post_id: "3017"
date: "2001-09-21T15:34:00+09:00"
draft: true
tags: []
---

```HTML
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
  <head>
    <meta content="text/html; charset=SHIFT_JIS" http-equiv="Content-Type">
    <title>もじもじのホームページ</title>
  </head>
  <body>
    <p>もじもじ文字</p>
  </body>
</html>
```

## 解説

`<head>`という新しいタグが出てきた。ここでページの設定などいじることができる。

`<meta>`。
これは非常に重要なタグだが、現段階では難しいのでこのままコピーすることをお勧めする。
もし、これをコピーした結果、文字化けするようなら `SHIFT_JIS` のところを `EUC-JP` か `iso-2022-jp` か、あるいは `utf-8` かに置き換えると直る。

`<title>` で囲んだ部分がそのページのタイトルとなる。
たとえば上の例では「もじもじのページ」となる。

あとは前回と同じ。
