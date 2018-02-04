---
title: Count.pm - Counter module pursuing simplicity
post_id: '3040'
date: '2002-03-18T00:00:00+09:00'
draft: true
tags: []
---

```Perl
use Count; 
 my $self = Count->new('count.dat'); # New and load data. 
 my $cdata = $self->count; # +1 and save data. 
 $self->count(6);          # +6 and save data. 
 print $self->count(-20);  # -20 and save data. 

```

It's just a Perl module that turns counts. Since the display function is completely omitted, it can be applied to a wide range of applications besides the access counter. Includes increment designation function.

I think that the source is also designed for extremely easy viewing so it is perfect for learning Perl.

## download

*   Operating environment: perl 5.005 or later (5.6.1 or later is recommended)
*   Final version: 0.05 (March 28, 2002)
*   [Download](https://danmaq.com/filez/perl/Count-0.05.zip) (\[filesize\] [https://danmaq.com/filez/perl/Count-0.05.zip\[/filesize](https://danmaq.com/filez/perl/Count-0.05.zip[/filesize) \])
