---
title: How about this aya!
post_id: '3094'
date: '2003-12-18T08:53:00+09:00'
draft: false
tag: []
---

The revenge of [last time "How to make the floppy beaten"](/floppy_crasher) .

```
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

```