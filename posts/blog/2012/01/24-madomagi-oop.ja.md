---
title: "魔法少女で学ぶオブジェクト指向(ソウルジェムはGoFの香り)"
post_id: "3716"
date: "2012-01-24T16:36:49+09:00"
draft: false
tags: []
---

[「ぐへへお姉ちゃんパンツ何色」から始めるクラス解説](http://b0r0nji.blogspot.com/2011/12/blog-post.html)が大変面白かったので、2か月遅れですが風邪でぶっ倒れながら二番煎じをやってみるテスト。
多分本家程テンポ良い展開にはならないと思う。
あと少し難易度上がります。

この世界には(きっと)魔法少女と魔女がいます。
それぞれクラス化してみます。
名前は `Syojo` と `Majo` で良いでしょう (`MahouSyojo` とか長くてダレる……)

さて、魔法少女は魔女を狩るため、早速その機能をつけましょう。

```C++
class Syojo
{
public:
    virtual void hunt(Majo *m);
};
```

まぁ、雑ですがこんなところでしょうか。実際に魔女を狩るためには、以下のようにメソッドを呼び出せばおｋです。

```C++
Syojo syojo;
Majo majo;
syojo.hunt(&majo);
```

ところで、魔法少女と一口に言っても色々なキャラがいて、それぞれ狩り方も異なります。
これだけだと狩り方がワンパターンになってしまいます。
まるで魔法少女のはずが魔獣のようです。

一つの解法として、キャラクタ識別定数を持って、分岐させる手があります。

```C++
void Syojo::hunt(Majo *m)
{
    switch(this->id)
    {
    case MADOKA:
        arrow(m);
        break;
    case BLOSSOM:
        oshiri_punch(m);
        break;
        :
        :
    }
}
```

ただ、このやり方だと、例えば「仲間割れ」とか新しい機能を積むたびに `switch` 分岐を増やすのもなんかダサいですよね。

そこでオブジェクト指向でクラスの次に覚えさせられるアレ、継承が出てきます。

```C++
class Sayaka : public Syojo
{
public:
    void hunt(Majo *m); /* 滅多斬り */
};

class Homuhomu : public Syojo
{
public:
    void hunt(Majo *m); /* 完全な世界 */
};

class Mami : public Syojo
{
public:
    void hunt(Majo *m); /* ティロなんとか() */
};
```

これならちゃんと個性を持った行動ができますね。
この場合の、狩りをさせるロジックも表記してみましょう。

```C++
Sayaka sayaka;
Homuhomu homu;
Mami mami;
Majo majo;
sayaka.hunt(&majo);
homu.hunt(&majo);
mami.hunt(&majo);
```

ここでちょっと不便なことに気づきます。
もしかしたら `Homuhomu` の代わりに `Kyoko` がいるかもしれないし、そういう状況のたびにコードを書き換えるのはちょっとダサいですよね。
そこで、下記のように解釈を変えてみましょう。

* 「数人の魔法少女が魔女を狩っている。誰が誰だかはよく判らない」

これならクラスの多態性を生かして、このように記述することが可能です。

```C++
Syojo *sisters［］ = { &sayaka, &homu, &mami };
for(int i = sizeof(sisters) / sizeof(Syojo *); --i >= 0; )
{
    sisters［i］->hunt(&majo);
}
```

これで狩りをさせる側は「狩りをしろ」と指示するだけで、`sisters` 1号(実体は `homu` )は時を止めて戦い、`sisters` 2号(実体は `mami` )は中二病な必殺技で敵を射止めます。

ところで、ここまでは便宜上その場で即席魔法少女オブジェクトを作っていましたが、実際はもっと早い段階で契約して魔法少女を作り、魔力を持たせて、徐々に強い魔女をけしかけて育てています。
つまり、魔法少女は戦わせるよりも、死なせる(そして新しい魔法少女を作る)ことのほうがコストがかかるのです。

```C++
void Syojo::init(Kyubey *q)
{
    this->keiyaku(q); /* 魔法少女の */
    this->teatime();　/* 初期化は */
    this->reajuu();　 /* 手間がかかる！ */
}
```

例えば、某プルプル魔女を狩ることを想定すると、魔法少女が数十人単位で必要になります。
しかし、調達できる魔法少女にも限りがあります。

仮に調達できた魔法少女を 5 人とします。
この 5 人だけでは倒すのは困難でしょう。
そのため下記のプロセスを繰り返すことになります。

* 戦う
* 死骸を破棄する
* 魔法少女を生成する (生成～契約～育てる etc.)

とても効率が良いとは思えないですよね？
実はこれはプログラム側から見ても効率が悪いのです。
魔法少女の生成・破棄には `new`・`delete`、即ちメモリの確保と解放を行うのですが、これは実はとっても重い処理なのです。

そこで QB さんは考えました。  
「肉体と魂を分離して、肉体は使いまわせばいいじゃないか」  
早速 QB さんの構想をコードに書き起こしてみましょう。

```C++
class Syojo
{
public:
    Syojo(void);
    Soul *soul = NULL; /* アクセサとかめんどくせーし */
    void hunt(majo *m) { soul->hunt(majo); };
};

class Soul
{
public:
    virtual void hunt(majo *m) = 0;
};
```

その上で、このように魂を実装すればよいのです。

```C++
class Mami : public Soul
{
public:
    static Soul *getInstance()
    {
        static Mami instance;
        return &instance;
    }
    void hunt(majo *m); /* ティロなんとか() */
private:
    Mami(void) {}
};
```

魔女と戦わせるには、下記のようにすればおｋです。

```C++
Syojo syojo
Majo majo;
syojo.soul = Mami::getInstance();
syojo.hunt(&majo);
```

ただの抜け殻だった魔法少女に魂を入れることでマミさんに変化しました。
このノリで `Madoka` や `Sayaka` などの魂を作って、入れてあげるとその場で魔法少女の攻撃パターンが変化します。
体はマミさんなのに、攻撃パターンを見るとちょっとガサツな槍使い、なんてこともできるようになります。

ただし、魂が入っていないままで魔女をけしかけると、__ぬるぽ__(C++ では `AccessViolation` でしょうか)の原因となりますので、空っぽのソウルジェムを常に持たせておかなければなりません。
ここは本編とちょっと異なるルールなので注意が必要です。

```C++
class EmptySoul : public Soul
{
public:
    static Soul *getInstance()
    {
    static EmptySoul instance;
    return &instance;
    }
    void hunt(majo *m) {} /* 何もしない */
private:
    EmptySoul(void) {}
};

Syojo::syojo(void)
{
    this->soul = EmptySoul::getInstance();
}
```
