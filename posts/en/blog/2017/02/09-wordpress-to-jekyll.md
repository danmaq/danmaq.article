---
title: Stop WordPress and start Jekyll!
post_id: '8783'
date: '2017-02-09T22:19:26+09:00'
draft: false
cover: ../../../../assets/misc/2017-wp-to-jekyll.png
tag:
  - release
  - diary
  - jekyll
  - wordpress
---

I have not heard back from you guys.

Well, from the end of this month to the beginning of March, I will transfer the blog system of danmaq.com from WordPress to Jekyll!

## danmaq.com, Why is the blog update frequency low?

I tried thinking about various reasons, such as I am not good at long blogging such a long sentence, and the splitting with Twitter is not good, The reason for being most comfortable is as follows.

*   **It is bad to open a browser for editing**
*   Although WordPress's editor says feces, somewhat **, the form of the browser itself is shit**
*   It's a shit that **Markdown can not** be **used** , and because Wordpress customization is over, Markdown usable plug-ins do not stabilize
*   Because it is hardly at home, there are so many mobile connections, and the line is thin (it usually goes down to 40 kbps) so WordPress' s rich UI is painful. Cut it off

It is a story that if the blue bird flies swiftly and feels sweet aside when riding in the Wagen car which tends to be stalled with tattered bugs, it is going to go over there. (I'm getting bold of opening Twitter applications recently, I will let Siri tweet)

So, if you do not open the browser, edit with only vim and terminal and push the article to GitHub, Jenkins who you are hooked at the server hooks and thinks that you can post it to WordPress without permission Then I got this introduction so I'd like to use Jekyll immediately! I thought it was.

> [I feel that](https://twitter.com/danmaq) @ [danmaq](https://twitter.com/danmaq) hexo or jekyll was a similar mechanism, is there a feeling that it is unlikely to meet the requirement?
> 
> \- Sai (@ saigyojiyu) [January 10, 2017](https://twitter.com/saigyojiyu/status/818766546700861441)

## Why you want to move to Jekyll

*   As mentioned above, you can contribute blogs in cooperation with Jenkins → GitHub Pages with `git push` one shot
*   **You** can post with **vim and terminal without browser** !
*   Better yet, once relocating danmaq.com to GitHub Pages, you can barely halt restrictions on rental servers
*   Unlike WordPress it's a static page so it looks light! (By the way, danmaq.com was a static blog until 2011 ... but it's manual!)
*   Markdown It's easy to edit because it is standard compliant!
*   WordPress Yoka Jekyll is about seven years new!
*   Depending on frenzy I feel like I can post posting linked with SNS! (Although it can be done in WordPress, too much fiddling and compatibility is Gehen Hung Hoon)

## Reason why you do not want to move to Jekyll

*   Initial cost of introduction. I do not charge money but I need technology beyond inserting WordPress on my own.
*   You need to prepare your own Makefile-like things like build it when it gets invoked.  
    → Bukkake, if only I can endure it!

Therefore, pages may be under construction from the end of this month, but please pardon our understanding!