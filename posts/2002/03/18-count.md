---
title: "Count.pm - シンプルさを追求したカウンタモジュール"
post_id: "3040"
date: "2002-03-18T00:00:00+09:00"
draft: false
tag: []
---

```Perl
use Count;
my $self = Count->new('count.dat'); # New and load data.
my $cdata = $self->count; # +1 and save data.
$self->count(6);          # +6 and save data.
print $self->count(-20);  # -20 and save data.
```

ただカウントを回すだけのPerlモジュールです。
表示機能を完全に省いてますのでアクセスカウンタ以外にも幅広い用途に応用できます。
増量指定機能付き。

ソースも極めて見やすく設計してますのでPerlの学習にも最適かと思われます。

## ダウンロード


  * 動作環境: perl 5.005以降(5.6.1以降を推奨)
  * 最終バージョン: 0.05(2002/3/28)
  * [ダウンロード](/filez/perl/Count-0.05.zip) ([filesize]https://danmaq.com/filez/perl/Count-0.05.zip[/filesize])
