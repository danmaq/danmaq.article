---
title: "これでどうだぁぁあああ！"
post_id: "3094"
date: "2003-12-18T08:53:00+09:00"
draft: true
tags: []
---


[前回 “フロッピーをガリガリ言わせる方法”](https://danmaq.com/floppy_crasher) のリベンジ。


    #include <string>

    #include <fstream>

    void main(void){

     using namespace std;

     string str="A:\a";

     while(1){

      str+="\a";

      ifstream(str.c_str());

     }

    }
