---
title: How to make a floppy beaten up
post_id: '3092'
date: '2003-12-11T19:05:00+09:00'
draft: false
tags: []
---

This code seems to not work properly depending on the environment, so [I made](/floppy_crasher2) an [improved version](/floppy_crasher2) .

```
#include <string> 
 
 #include <fstream> 
 
 
 
 void main( void ){ 
 
 using namespace std; 
 
 string str = "A:\a"; 
 
 while( 1 ){ ifstream( ( str + "\a" ).c_str() ); } 
 
 } 

```