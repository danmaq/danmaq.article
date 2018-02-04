---
title: "HDML.pm - EZwebコンテンツを動的生成するモジュール"
post_id: "3034"
date: "2002-02-21T00:00:00+09:00"
draft: true
tags: []
---

```Perl
use HDML;
my $hdml = HDML->new;
print $hdml->hdml(
　{ -version => '3.0', -public => 1, -markable => 'true' },
　$hdml->display(
　　{ -title => 'Test Card - 1' },
　　$hdml->action({ -type => 'accept', -task => 'gosub', -dest => '#2' }),
　　'FooFoo'
　),
　$hdml->choice(
　　{ -name => '2' },
　　$hdml->line('BazBazBazBazBazBaz', $hdml->wrap),
　　"Bar\n",
　　$hdml->ce({ -value => 'one' }, '1'),
　　$hdml->ce({ -value => 'two' }, '2'),
　　$hdml->ce({ -value => 'three' }, '3')
　)
);
```

perlで動的にHDML(Handbeld Device Markup Language)を生成するモジュールです。

まるでCGI.pmでHTMLを生成するような感覚で簡単にHDMLを作ることが出来ます。

## ダウンロード


  * 動作環境: perl 5.005以降(5.6.1以降を推奨)
  * 最終バージョン: 0.55(2002/2/26)
  * [ダウンロード](https://danmaq.com/filez/perl/HDML-0.55.ZIP) ([filesize]https://danmaq.com/filez/perl/HDML-0.55.ZIP[/filesize])
