---
title: HDML.pm - Module for dynamically generating EZweb content
post_id: '3034'
date: '2002-02-21T00:00:00+09:00'
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

This module generates HDML (Handbeld Device Markup Language) dynamically with perl.

You can easily create HDML as if you were generating HTML with CGI.pm.

## download

*   Operating environment: perl 5.005 or later (5.6.1 or later is recommended)
*   Final version: 0.55 (2002/2/26)
*   [Download](https://danmaq.com/filez/perl/HDML-0.55.ZIP) (\[filesize\] [https://danmaq.com/filez/perl/HDML-0.55.ZIP\[/filesize](https://danmaq.com/filez/perl/HDML-0.55.ZIP[/filesize) \])
