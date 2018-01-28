---
title: Object oriented to learn with a magical girl (Soul gem smell GoF)
post_id: '3716'
date: '2012-01-24T16:36:49+09:00'
draft: false
tag: []
---

[Class comment](http://b0r0nji.blogspot.com/2011/12/blog-post.html) which [starts from "what kind of sister pants what color"](http://b0r0nji.blogspot.com/2011/12/blog-post.html) was very interesting, so it is two months behind but it is a test that tried doing the second disinfection while falling with a cold. Perhaps I do not think that development will be good development. A little more difficulty will rise.

In this world (surely) there is a magical girl and a witch. Let's classify each one. The name is good for `Syojo` and `Majo` ( `MahouSyojo` or `MahouSyojo` long time ... ...)

Well, as a magical girl hunts a witch, let's put that feature in at once.

```C++
class Syojo 
 { 
 public: 
    virtual void hunt(Majo *m); 
 }; 

```

Well, it is a little, but is it such a place? In order to actually hunt a witch, you can call the method as follows.

```C++
Syojo syojo; 
 Majo majo; 
 syojo.hunt(&majo); 

```

By the way, there are various characters even if you say a bite with a magical girl, each hunting method is different. If this is the only one hunting becomes one pattern. It is as if a magical girl should be a magical girl.

One solution is to have a character identification constant and branch it.

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

However, in this way, it is somewhat daunting to increase the `switch` branch every time you have new functions such as "fellowship".

So, there will be inheritance that is object-oriented and remembered next to the class.

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

In this case you can act with individuality properly. Let's also write the logic to hunt in this case.

```C++
Sayaka sayaka; 
 Homuhomu homu; 
 Mami mami; 
 Majo majo; 
 sayaka.hunt(&majo); 
 homu.hunt(&majo); 
 mami.hunt(&majo); 

```

I notice somewhat inconvenient things here. Perhaps `Kyoko` may be in place of `Homuhomu` , and it is a `Homuhomu` to rewrite code every time that situation `Homuhomu` . So let's change the interpretation as follows.

*   "A few magical girls are hunting witches, I do not know who they are."

In this case, it is possible to describe like this, taking advantage of the polymorphism of the class.

```C++
Syojo *sisters［］ = { &sayaka, &homu, &mami }; 
 for(int i = sizeof(sisters) / sizeof(Syojo *); --i >= 0; ) 
 { 
    sisters［i］->hunt(&majo); 
 } 

```

`sisters` 1 (entity is `homu` ) stops the time and fights, and `sisters` No. 2 (entity is `mami` ) is the `mami` deadly technique and enemies I will shoot.

By the way, for the sake of convenience, I have been making instant magical girl objects on the spot for the sake of convenience, but in reality they actually make contracts at an earlier stage, make a magical girl, have magical powers, gradually raise a strong witch and sow it up. In other words, it is more expensive to make a magical girl die (and make a new magical girl) than to fight it.

```C++
void Syojo::init(Kyubey *q) 
 { 
    this->keiyaku(q); /* 魔法少女の */ 
    this->teatime(); /* 初期化は */ 
    this->reajuu(); /* 手間がかかる！ */ 
 } 

```

For example, supposing to hunt a certain prolific witch, you will need a magical girl in dozens of people. However, there are limits to the magical girl who can procure.

We will make five magical girls that we could procure. It will be difficult to beat with only these five people. So we will repeat the process below.

*   fight
*   Destroy carcasses
*   Create a magical girl (generation ~ contract ~ nurture etc.)

I do not think it is very efficient, right? Actually, this is inefficient from the perspective of the program. To create / destroy a magical girl, `new` · `delete` , that is, securing and releasing memory is done, but this is really a very heavy process.

So QB thought.  
"Is it OK to separate the body and the soul and use the body?"  
Let's quickly transcribe QB's plan to code.

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

Then you have to implement soul like this.

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

To make it fight with a witch, you should do as follows.

```C++
Syojo syojo 
 Majo majo; 
 syojo.soul = Mami::getInstance(); 
 syojo.hunt(&majo); 

```

It changed to Mami by putting soul into a magical girl who was just a casing. Make a soul such as `Madoka` or `Sayaka` with this nori and put it in, the attack pattern of the magical girl changes on the spot. Although the body is Mami, if you look at the attack pattern you will be able to do a bit of a spear use.

However, if you `AccessViolation` witch without a soul in it, it will cause **Tanpo** ( `AccessViolation` C ++), so you must always have an empty soul gem. Here is a slightly different rule from the main part so be careful.

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