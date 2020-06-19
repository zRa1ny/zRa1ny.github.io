window.onload=function () {
	var Oul=document.getElementById("listul")
    var onclickdiv=document.getElementById("Navlist")
	var obj=write("json数组和json对象","第一篇内容正好刚刚使用json有不清楚的地方重新理解一遍，首先Json的语法规则<br>JSON 语法是 JavaScript 对象表示法语法的子集。数据在名称/值对中<br>数据由逗号分隔<br>花括号保存对象<br>方括号保存数组<br>JSON 数据的书写格式是：名称/值对 like this：“firstName“ ： “John“  <br>JSON 值可以是：数字（整数或浮点数）<br>字符串（在双引号中）<br>逻辑值（true 或 false）<br>数组（在方括号中）<br>对象（在花括号中）<br>null<br>JSON 对象在花括号中书写：<br>｛ “firstName“：“John“ , <br>“lastName“：“Doe“ ｝<br>多个值对之前用逗号分割；JSON 数组在方括号中书写：<br>｛  “employees“： [  ｛ “firstName“：“John“ ,<br> “lastName“：“Doe“ ｝, <br> ｛ “firstName“：“Anna“ , <br>“lastName“：“Smith“ ｝,  ｛ “firstName“：“Peter“ , <br>“lastName“：“Jones“ ｝  ]  ｝<br>对json对象进行一些操作，首先定一个<br>var json=｛“name“：“I“,<br>“time“：“now“,<br>“do“：“learn json“｝<br>然后增加一项习惯habit，json[“habit“]=“like“,再修改name为you，json[“name“]=“you“,<br>最后删除时间<br>delete json[“time“]，<br>对于一个json数组我们同样可以操作，<br>var jsonstr=“[｛’name’：’a’,<br>’value’：1｝,｛’name’：’b’,’value’：2｝]<br>“;var jsonarray = eval（’（’+jsonstr+’）’）;jsonstr字符串转化json数组<br> var arr  =｛“name“ ： “c““value“ ： “4“｝jsonarray.push（arr）")
	postBo(obj)
	var obj1=write("eval和parse的区别","...")
	postBo(obj1)
	var obj2=write("组织冒泡和组织默认事件","今天群里有一个同学发了一个问题，问题起因是他定义了一个drag函数，然后函数内部使用了e进行组织默认实践，结果在360浏览器正常运行但是火狐却报错，e不存在，第一时间有点懵，组织冒泡和组织默认一般都用，那里需要那里用，一般式不会出现这种问题。因为新手才有这种操作，但是引发我兴趣，经过一番测试，我发现在360里面时间默认进行了传递，所以在360可以正常运行，但是在火狐里面没有进行传递。然后我传递参数为事件对象进去，执行成功，然后引发了我对几个浏览器不同引擎的猜测和测验，因为个人博客没有上传服务器，仅作记录，后面会在我博客园微博放出源码和测试结果。")
	postBo(obj2)


	liclick(Oul,onclickdiv)	;
	fourMove();
	twoMove();
	

}



