---
title: "フロッピーをガリガリ言わせる方法"
post_id: "3092"
date: "2003-12-11T19:05:00+09:00"
draft: false
tags: []
---


このコードは環境によっては正しく動作しないようなので、[改良版を作りました](/floppy_crasher2)。


    #include <string>

    #include <fstream>



    void main( void ){

     using namespace std;

     string str = "A:\a";

     while( 1 ){ ifstream( ( str + "\a" ).c_str() ); }

    }
