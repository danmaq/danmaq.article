---
title: "またVectorのバグか？"
post_id: 3690
date: "2009-01-23T00:00:00+09:00"
draft: true
tags: []
---

FlexSDK3.2 で下記のプログラムを動かしたところ、Vector インスタンス作るところで強制型変換との例外が飛んでくる。
とりあえず帰宅後要調査ってことでメモ。

## ソース

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

## 出力

```
TypeError: Error #1034: 強制型変換に失敗しました。Vector.<*>@13baa19 を __AS3__.vec.Vector.<Foo> に変換できません。
  at Foo$/createHoge()[C:\Documents and Settings\mikuh\My Documents\Flex Builder 3\ASTest\src\Foo.as:6]
  at Foo$cinit()
  at global$init()[C:\Documents and Settings\mikuh\My Documents\Flex Builder 3\ASTest\src\Foo.as:3]
  at ASTest()[C:\Documents and Settings\mikuh\My Documents\Flex Builder 3\ASTest\src\ASTest.as:5]

[SWF] C:\Documents and Settings\mikuh\My Documents\Flex Builder 3\ASTest\bin-debug\ASTest.swf - 1,344 バイト (圧縮後)
```
