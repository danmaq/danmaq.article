---
title: Is it also a bug in Vector?
post_id: 3690
date: '2009-01-23T00:00:00+09:00'
draft: true
tags: []
---

When running the following program with FlexSDK 3.2, an exception to forced type conversion comes up in the place where Vector instance is created. For the time being, I took notes by asking for a survey after returning home.

## Source

```ActionScript
import flash.display.Sprite; 
 public class ASTest extends Sprite{ 
  public function ASTest(){ trace( Foo ); } 
 } 
 public class Foo{ 
  public static var hoge:Vector.<Foo> = createHoge(); 
  private static function createHoge():Vector.<Foo>{ 
    var vec:Vector.<Foo> = new Vector.<Foo>(); 
    // ...initializing... 
    return vec; 
  } 
 } 

```

## output

```
TypeError: Error #1034: 強制型変換に失敗しました。Vector.<*>@13baa19 を __AS3__.vec.Vector.<Foo> に変換できません。 
  at Foo$/createHoge()[C:\Documents and Settings\mikuh\My Documents\Flex Builder 3\ASTest\src\Foo.as:6] 
  at Foo$cinit() 
  at global$init()[C:\Documents and Settings\mikuh\My Documents\Flex Builder 3\ASTest\src\Foo.as:3] 
  at ASTest()[C:\Documents and Settings\mikuh\My Documents\Flex Builder 3\ASTest\src\ASTest.as:5] 
 
 [SWF] C:\Documents and Settings\mikuh\My Documents\Flex Builder 3\ASTest\bin-debug\ASTest.swf - 1,344 バイト (圧縮後) 

```
