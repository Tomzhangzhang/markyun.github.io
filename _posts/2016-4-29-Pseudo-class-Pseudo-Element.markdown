---
id:		07
title:  "Pseudo-class（伪类）、Pseudo-Element（伪元素）简要记录"
date:   2016-5-3 16:47:14
description: "Pseudo-class（伪类）、Pseudo-Element（伪元素）简要记录和使用说明"
layout: post
comments: true

---



伪类、伪元素配合CSS3可以完成非常多有意思的效果，为方便个人开发时候的快速查阅，记录了以下常用到的一些伪类伪元素的简要中文说明；

简单区分：

	:Pseudo-classes		伪类:DOM在不同状态、不同位置下的特殊效果；
	::Pseudo-elements	伪元素：DOM按匹配规则伪造出的元素；

#### 注意点： ####
- 伪类添加的内容元素或伪类效果通在DOM的源代码中是看不见的，需要借助开发者工具才能看见;
- 使用屏幕阅读器等设备无法访问和读取伪元素生成的内容。因此不应该使用伪元素来添加正文内容等重要信息到页面上展示，应确保主体内容的完整性。
- 伪类添加的元素也可以使用CSS样式进行控制,具体查看下面浏览器的兼容性；
- content方式可以添加的图片、unicode、字符串；其中图片不能调整大小，要选择合适的图片;
- 伪元素是在DOM内容生成之后添加的，它将被堆积在DOM的父元素的顶上；
- 伪元素由双冒号和伪元素名称组成，为了兼容使用单冒号的伪类也有效；
- 伪类添加的内容和元素不能使用任何Javascript的事件处理程序；
- js获取伪类的值：win.getComputedStyle(doc.querySelector('.element'), ':before').getPropertyValue('color')



#### Browser Support ####


- 具体浏览器兼容性可以使用 [Can I Use](http://caniuse.com/#search=CSS3) 或 [MDN CSS Browser Support](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

#### 常用伪元素、伪类列表 ####

	::after 		在元素的内容之后
	::before  		在元素的内容之前
	::first-line 	元素的第一行
	::first-letter 	元素的第一个字母
	::placeholder	占位符，用于input输入框之类的提醒
	::selection 	被选取的元素，用于改变网页被选中部分的效果

	:active 		当元素被点击的时
	:blank  		空白的元素
	:checked  		被选中的元素
	:default 		默认被选中或默认会被提交的元素
	:dir() 			匹配特定文字书写方向的元素
	:disabled		处于被禁止操作状态的元素
	:empty 			没有任何内容的元素
	:enabled 		处于可操作状态的元素
	:first 			用于打印文档的第一页
	:first-child 	父级元素下的第一个子元素
	:first-of-type 	父级元素下的第一个同类子元素
	:focus 			当元素成为焦点
	:fullscreen		当元素被HTML5 API调用RequestFullscreen方式全屏时
	:hover 			当鼠标移动到链接元素上面时
	:in-range		当元素属性值处于其指定的范围内时	
	:indeterminate	当元素属性值处于不确定状态的
	:invalid		当元素属性值不是指定的type属性时
	:lang()  		匹配有正确lang 属性值的元素，如 lang(zh-Hans)
	:last-child		元素的最后一个子元素
	:last-of-type 	元素的最后一个同类子元素
	:left			选择打印文档的左侧页
	:link 			未被访问的链接元素
	:not() 			否定选择器（不匹配条件则生效）
	:nth-child() 	元素的一个或多个特定的子元素
	:nth-last-child() 元素的一个或多个特定的子元素，从该元素的最后一个子元素开始算；
	:nth-of-type() 	选择指定的元素
	:nth-last-of-type()	选择指定的元素，从元素的最后一个开始计算
	:only-child		元素是它的父元素的唯一子元素
	:only-of-type 	元素是它的父级元素的唯一一个相同类型的子元素
	:optional		未指定required属性的表单元素
	:out-of-range	超出规定值范围的元素
	:read-only		元素设置了 'readonly' 属性生效
	:read-write		元素没有 "readonly" 属性生效
	:required		设置了 "required" 属性的元素	
	:right			选择打印文档的左侧页
	:root 			文档的根元素
	:scope			作用域的伪类，默认为HTML（案例 :scope #mammma {...}）
	:target 		当前活动的元素（匹配页面URI中对应的目标元素）
	:valid 			表示有效的元素
	:visited 		已被访问过的元素
	 content		在元素之前或之后添加的内容。


### Related Entries ###
- [Pseudo-elements](http://www.w3.org/TR/2005/WD-css3-selectors-20051215/#pseudo-elements)
- [Fullscreen API ](https://developer.mozilla.org/zh-CN/docs/DOM/Using_fullscreen_mode)
- [:scope](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope)