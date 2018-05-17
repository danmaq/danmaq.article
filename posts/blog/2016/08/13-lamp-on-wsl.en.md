---
title: Talk about building a LAMP environment on Ubuntu on Windows
post_id: 8670
date: '2016-08-13T14:37:38+09:00'
draft: false
cover: ../../../assets/misc/2016-wsl-lamp.png
tags: []
---

Ubuntu now works on Windows 10 with Anniversary Update of Windows 10.

Linux without virtualization? What ... I do not know what you are saying g (I thought about it well, so it was not surprising as I went through Interix until this time)

I tried doing this as soon as I had to tailor it to the LAMP development environment.

## ■ Preparation

The initial setting is [roughly about this area Pakuri](http://qiita.com/Aruneko/items/c79810b0b015bebf30bb)  
Until the bash installation is over, ↑ is completely identical, so it is omitted.

**\[■ measures for warning of sudo** \] ( [http://qiita.com/ogomr/items/89e19829eb8cc08fcebb](http://qiita.com/ogomr/items/89e19829eb8cc08fcebb) )

### ○ Link the host name to localhost

```sh
$ sudo sh -c 'echo 127.0.1.1 $(hostname) >> /etc/hosts' 

```

## ■ Tomatashi to update the system

### 〇 Switch over the repository of apt-get to the domestic server and speed up the application

```sh
$ sudo sed -i -e 's%http://.*.ubuntu.com%http://ftp.jaist.ac.jp/pub/Linux%g' /etc/apt/sources.list 

```

### ○ Tarbow Recycle system

```sh
$ sudo apt update 
 $ sudo apt -y full-upgrade 
 $ sudo apt-get -y autoremove 

```

To upgrade to Ubuntu 16 this alone is not possible. [I need additional procedures](http://qiita.com/Aruneko/items/2670f42d36a7508c13bb)

However, as procps does not function anymore, it will not be the current situation, so just those who are on the pillar etc please.

## ■ Install the minimum necessary tools

### ○ To those who do not finish without having to run a train

```sh
$ sudo apt-get -y install sl 
 $ sl 

```

### 〇 Since vim (Full version) is used regularly, it is inserted and git is also used, so let's insert it well

```sh
$ sudo apt-get -y install vim-nox git 

```

〇 Do not need landscape so discard it

```sh
$ sudo apt-get -y purge landscape-client landscape-common 

```

## ■ Password with sudo You will be asked for each and every one stop it

### 〇 Create wheel group and make yourself belong

```sh
$ sudo addgroup wheel 
 $ sudo usermod -aG wheel ユーザー名

```

### ○ Only members of the wheel group can become root

```sh
$ sudo vim /etc/pam.d/su 

```

```
# Uncomment this if you want wheel members to be able to 
 # su without a password. 
 # auth       sufficient pam_wheel.so trust 
 auth       sufficient pam_wheel.so trust group=wheel 

```

Insert this last line ↑

### Users belonging to the wheel group should be able to pass face with sudo

```sh
$ sudo visudo 

```

```
# Same thing without a password 
 %wheel ALL=(ALL) NOPASSWD:ALL 

```

Insert at the end ↑

// Although it is visudo, nano starts, it is one of the seven wonders ... ...

## ■ Enter startup / shutdown script

On Ubuntu on Windows the rcX.d script will not run automatically. In constructing the LAMP environment, it is painful with this, so we will process it automatically. It's a bit long so at KIAI.

### ○ Write start script

[Script for hitting scripts under /etc/rcX.d/ for Ubuntu on Windows at once - GitHub Gist](https://gist.github.com/danmaq/8825128e199c787b46ca61e4786447a8)  
↑ Because I wrote a script with improvisation, please make this file in the current folder.

### 〇 Move the created file

```sh
$ chmod 700 rund4wsl.sh 
 $ sudo chown root:root rund4wsl.sh 
 $ sudo mv rund4wsl.sh /usr/local/sbin/rund4wsl 

```

### 〇 Let's try

```sh
$ sudo rund4wsl -l 0 -o stop 

```

Successful when bash is shut down.

By the way, the -l option is a run level, and the -o option is a command to round to each script.  
Specify -l 3 -o start at startup and -l 0 -o stop at shutdown.

(From here on Windows side work)

### 〇 Write script to call script from Windows side

[Script for hitting scripts under /etc/rcX.d/ for Ubuntu on Windows :: GitHub Gist](https://gist.github.com/danmaq/8825128e199c787b46ca61e4786447a8)  
Please make a batch file referring to the comment of ↑. I like the place, but it may be good behavior to create a bin folder just below `C:/Users/[ユーザー名]/` put it in there.

### 〇 Register call script

[Set local group policy (security policy) for each user :: My memoirs ~ Various things ~](https://orebibou.com/2015/03/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%94%E3%81%A8%E3%81%AE%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC%E3%82%BB%E3%82%AD%E3%83%A5/)  
Refer to ↑ to open the Group Policy Object Editor with your user name.

`/コンソール ルート/ローカル コンピューター\\[ユーザー名] ポリシー/ユーザーの構成/Windows の設定/スクリプト(ログオン/ログオフ)` .  
It registers in logon script and logoff script respectively.

### ○ Operation check

Log on to Windows again and start bash.  
(Work from bash side again from here)

```sh
$ ps x | grep rund4wsl 

```

↑ and grep other than those applicable to you is successful.

## ■ Construct LAMP

Add Apache · MariaDB (MySQL) · PHP. Since php that can be installed by Ubuntu 14's standard is 5.5.9 and it is a typemaker model, let's set it to 7.1. [Most of the process is mostly around here.](http://qiita.com/walrein/items/b0cc229619ac78852898)

```sh
$ sudo add-apt-repository ppa:ondrej/php 
 $ sudo apt-get update 
 $ sudo apt-get -y install mariadb-server libapache2-mod-php7.1 

```

As mariadb's root user password is asked during installation, set it as you like

### ○ Since I added a repository, I will do it at once

```sh
    sudo apt -y full-upgrade 
    sudo apt-get -y autoremove 

```

I will now exit bash, log on to Windows again and start MariaDB and Apache.  
Check [http: // localhost /](http://localhost/) at Edge.

![](../../../assets/misc/2016-wsl-lamp.png)  
Yay! I caught Ubuntu!

### ○ Initialize the database

```
$ sudo mysql_secure_installation 

```

As the root user password of mariadb is asked, just the first question to put the guy who decided earlier is completed, and then it is completed with Enter hit!

Let's see if PHP is also properly included

```sh
$ php -v 

```

## ■ Q & A

[If there is something else, please ask a question](https://twitter.com/danmaq) .
