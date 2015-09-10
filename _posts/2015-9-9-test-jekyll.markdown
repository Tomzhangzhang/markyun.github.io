---
id:		03
title:  "Test 网站功能"
date:   2015-9-9 12:18:00
description: "网站功能测试用。"
layout: post
comments: false

---

一个女孩让一个我在楼下等他一百天就嫁给我。结果我在第99天时微笑着离开了。后来，有人问我，你坚持了这么久，眼看就要成功了，为什么在关键时刻离开？我解释着说：当时都没想到自己能坚持这么长时间。心里就想到，我有这么大的毅力，为什么不去做程序员?


记得几年前我刚刚进公司时，写的代码乱七八糟，错误百出，bug连连，不仅项目经理骂我，其他同事也对我怨声载道。后来听人介绍，就报了一个培训班。经过1个月的刻苦学习，终于功夫不负有心人啊———— 他们骂不过我了。


结婚后，她手机通讯录里依然存着已故前男友的号码，老公知道却装作不知道。有一天她出了车祸，在翻倒的车里她下意识的拨出一个号码，那是前男友的号码，但是话筒里却传来老公的声音，后来，她获救了。病床前，老公告诉她：是我替换了号码，我知道我无法取代他，但我可以替他来保护你。她愣住了，这才想起来，原来她老公是南京大学的....


长沙某名校（高中）门卫，五十五岁的张大爷因屡次遭到校花骚扰，被迫提出辞职！ 称现在的年轻人真让人受不了。 据说该校花没事总往门卫室跑，喜欢聊一些隐私问题，还有次装晕倒硬要张大爷人工呼吸。 张大爷无奈提出辞职，校长再三挽留才留下继续工作。 为避免类似事件发生， 校方恳请张大爷以后不要开宾利来上班， 张大爷也表示只好换成了奔驰。


晚上在外面遛狗，突然跳出来一杀手把狗杀死。我问：为何杀我的狗。对方答：有人出钱买你的狗命！我：你语文老师是谁，我要感谢他，我高兴答到。后来我们聊的越来越投机。杀手突然问：女朋友哪里人？我答还没女朋友。杀手一刀捅进我的心脏，嘴里嘀咕：单身狗也是狗！！




：“爸，最近身体怎么样啊，家里生意还好吧，吃饭了吗？”

：“已汇”


我爸: 你看四叔他儿子，比你大一岁，人家上周买了个卡迪拉克。你买个自行车的钱都不够！
我:那 卡迪拉克我四叔出了三十多万。
我爸: 那不还有十几万自己出的吗。
我:那 十几万丈母娘出的。
我爸: 你特么连个对象都没有。
我: ………！



男人在那么多的女人中只看上了她，女人也很感激男人，所以女人尽量满足了男人一切要求，事后男人不爱她了，变心了，女人只是象征性的要了1000的分手费。

警察: 所以这就是你在洗头房嫖娼的借口咯？

博客网站功能测试。
![功能测试](/assets/images/Kactus-theme-post.png)


图片
![南京](http://i3.tietuku.com/8d1ffe7d2f1d6bfc.jpg)

{% highlight javascript %}
$(document).ready(function() {
	$(".topHead").hide();
	// #scrollTop
	$(window).scroll(function() {
		if ($(this).scrollTop() > 550) {
			$(".topHead").fadeIn();
		} else {
			$(".topHead").fadeOut();
		}
	});
    $("a.topHead").click(function() {
        $('body,html').animate({
			scrollTop: 0
		}, 800);
        return false;
    });
});
{% endhighlight %}



{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

{% highlight html %}
<article class="post">
    <header>
        <h1>{{ page.title }}</h1>
        <h2 class="headline">{{ page.date | date:"%B %-d, %Y" }}</h2>
    </header>
    <section id="post-body">
        {{content}}
    </section>
</article>
{% endhighlight %}

{% highlight css %}
h2.month {
    font: bold 13px/1 'Helvetica Neue',helvetica,Arial,sans-serif;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-transform: uppercase;
    border-bottom: 1px solid #eee;
}
{% endhighlight %}


参考：

jekyll中文版   [http://jekyll.bootcss.com/]( http://jekyll.bootcss.com/ "jekyll.bootcss.com/")



