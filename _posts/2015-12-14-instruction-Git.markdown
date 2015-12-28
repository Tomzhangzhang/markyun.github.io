---
id:		06
title:  "协作开发项目（BI）遇到的问题!"
date:   2015-12-14 00:47:14
description: "Git 简单使用说明"
layout: post
comments: true

---


		/*
		Name:  UED Git 简单使用说明
		Author:markyun
		Create Date:2014-10-18
		*/

1安装msysgit：
msysgit是Windows版的Git，从http://msysgit.github.io/下载，然后按默认选项安装即可。
安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！

2 配置用户名：
		git config --global user.name "Your Name"
		git config --global user.email "email@example.com"


3、创建仓库（或者 克隆一个远程仓库 ）：

		git init

Initialized empty Git repository in /Users/michael/learngit/.git/ （告诉你是一个空的仓库）
请确保目录名（包括父目录）不包含中文

4、添加文件到仓库：

把文件（readme.txt）放在创建的仓库内
		git add readme.txt  可反复多次使用，

添加多个文件；git add .
（.）点表示当前目录下的所有内容，交给git管理，也就是提交到了git的本地仓库。
用命令git commit告诉Git，把
文件提交到仓库：
		git commit -m "Update README.md, add the front-end interview questions "
		[master (root-commit) cb926e7] wrote a readme file
		 1 file changed, 2 insertions(+)
		 create mode 100644 readme.txt
5、修改文件后，更新仓库
		git status   查看仓库当前的状态， 告诉我们，什么文件被修改过了，但还没有准备提交的修改。
		git diff  文件名，  查看具体修改了什么内容
		git add 文件名    更新和添加一样
		git commit

6、版本回退：

先 git log 添加的注释
也可以：git reflog 记录你的每一次添加命令和注释 和commit_id：
只回到上一个版本就是HEAD^， git reset --hard HEAD^
上上一个版本就是HEAD^^ git reset --hard HEAD^^
git reset --hard commit_id。
7、暂存区
Git和其他版本控制系统如SVN的一个不同之处就是有暂存区的概念。
第一次修改 -> add -> 第二次修改 -> add -> commit

只会提交第一次的修改内容到主分支


8、撤销提交操作（add）

		git checkout -- readme.txt   （--很重要，没有--，就变成了“创建一个新分支”的命令）

把readme.txt文件在工作区的修改全部撤销，这里有两种情况：
当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。
一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，
第一步用命令git reset HEAD file，就回到了场景1，第二步按场景1操作
二是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
总之，就是让这个文件回到【最近一次git commit后】 或【git add之前】的状态；

假设你不但改错了东西，还从暂存区提交到了版本库，怎么办呢？ 可以回退到上一个版本。
不过，这是有条件的，就是你还没有把自己的本地版本库推送到远程。

9、删除文件
		git rm test.txt
		rm 'test.txt'
		m "remove test.txt"
		git commit
		-
		如果删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：
		git checkout -- test.txt

10、设置SSH Key
.由于你的本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以，需要SSH Key
默认存放在 C:\Users\Administrator\.ssh   id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。
		ssh-keygen -t rsa -C “mygood@126.com"
为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，
而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。
11、绑定到远程仓库  （注意格式的gitlab，不支持ssh，请使用http）

		关联一个远程库   git remote add origin git@github.com:markyun/beilibao.git
		远程库的名字就是origin，这是Git默认的叫法，也可以改成别的，但是origin这个名字一看就知道是远程库。

12、推送到远程仓库

		git remote -v //查看你当前项目远程连接的是哪个仓库地址。
		git push -u origin master //将本地的项目提交到远程仓库中。

正常情况下这样显示：
		git push -u origin master
		Counting objects: 19, done.
		o 4 threads.
		Compressing objects: 100% (
		Delta compression using up
		t19/19), done.
		Writing objects: 100% (19/19), 13.73 KiB, done.
		lliao/learngit.git
		 * [new branch]
		Total 23 (delta 6), reused 0 (delta 0)
		To git@github.com:micha
		e  master -> master
		 to track remote branch master from origin.
		Branch master set u
		p

如果提示：
ssh:connect to host github.com port 22:bad file number could not read from remote repository（说不能读取远端库，请确保有正确的访问权限并且仓库存在。看看你本机22端口有没有打开）

ssh github.com 测试是否能正常使用SSH
当你第一次使用Git的clone或者push命令连接GitHub时，会得到一个警告：
		The authenticity of host 'github.com (xx.xx.xx.xx)' can't be established.
		RSA key fingerprint is xx.xx.xx.xx.xx.
		cting (yes/no)?
		Are you sure you want to continue conn
		e
这是因为Git使用SSH连接，而SSH连接在第一次验证GitHub服务器的Key时，需要你确认GitHub的Key的指纹信息是否真的来自GitHub的服务器，输入yes回车即可。
Git会输出一个警告，告诉你已经把GitHub的Key添加到本机的一个信任列表里了：
		Warning: Permanently added 'github.com' (RSA) to the list of known hosts.
这个警告只会出现一次，后面的操作就不会有任何警告了。

13、从服务器上把一个远程仓库中的工程完全的拷贝下来

		git clone git@github.com:china-UED/test.git
		假如本地已经存在了这个项目，而仓库中又有一新的更新，如何把更的合并到本地的项目中？
		git fetch origin    //取得远程更新，这里可以看做是准备要取了
		git merge origin/master  //把更新的内容合并到本地分支/master

----------------待补充--------------

14、创建与合并分支

15、冲突的处理

16、多人协作

17、其他

	 git config --list 查看配置
	 git config --global core.autocrlf false  关闭 github的换行符自动转换”功能




[git-guide ](http://www.bootcss.com/p/git-guide/ "git-guide")

![南京](https://raw.githubusercontent.com/markyun/markyun.github.io/master/assets/images/Nanjing2.jpg)