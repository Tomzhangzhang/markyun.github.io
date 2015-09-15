---
id:		03
title:  "Test 网站功能"
date:   2015-9-9 12:18:00
description: "网站功能测试用。"
layout: post
comments: false

---


构建github库：username.github.io

安装jekyll相关资源

修改配置文件以及建立自己的对应网页添加文章

安装相关插件，如markdown解析包、代码高亮包pygments等，（fork别人的也是可以的）

本地使用jekyll编译预览效果，没问题后上传至github(直接传上去预览效果也是可以的)



文件夹_layouts：用于存放模板的文件夹，

文件夹_posts：用于存放博客文章的文件夹

文件夹css：存放博客所用css的文件夹,比如主题文件以及高亮文件都是放在此处的

.gitignore：可以删掉，后面会将项目添加到git项目，所以这个不需要了

_coinfig.yml：jekyll的配置文件，里面可以定义相当多的配置参数，具体配置参数可以参照其官网

index.html：项目的首页

_includes:用于存放一些固定的HTML代码段，文件为.html格式，可以在模板中通过liquid标签引入，常用来在各个模板中复用如 导航条、标签栏、侧边栏之类的在每个页面上都一样不变的内容，需要注意的是，这个代码段也可以是未被编译的，也就是说也可以使用liquid标签放在这些代码段中。



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
![南京](/assets/images/Nanjing.jpg)

{% highlight javascript %}
/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

// Styles

gulp.task('styles', function() {
  return sass('src/styles/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);

});
{% endhighlight %}


```c
/* hello world demo */
#include <stdio.h>
int main(int argc, char **argv)
{
    printf("Hello, World!\n");
    return 0;
}
```


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
