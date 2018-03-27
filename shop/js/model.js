
/*jqueryzoom&&jcarousel放大镜*/
(function($){
$.fn.jqueryzoom=function(options){
var settings={
xzoom:200,
yzoom:200,
offset:10,
position:"right",
lens:1,
preload:1};
if(options){
$.extend(settings,options);}
var noalt='';
$(this).hover(function(){
var imageLeft=$(this).offset().left;
var imageTop=$(this).offset().top;
var imageWidth=$(this).children('img').get(0).offsetWidth;
var imageHeight=$(this).children('img').get(0).offsetHeight;
noalt=$(this).children("img").attr("alt");
var bigimage=$(this).children("img").attr("jqimg");
$(this).children("img").attr("alt",'');
if($("div.zoomdiv").get().length==0){
$(this).after("<div class='zoomdiv'><img class='bigimg' style='width: auto;height: auto;' src='"+bigimage+"'/></div>");
$(this).append("<div class='jqZoomPup'>&nbsp;</div>");}
if(settings.position=="right"){
if(imageLeft+imageWidth+settings.offset+settings.xzoom>screen.width){
leftpos=imageLeft-settings.offset-settings.xzoom;}else{
leftpos=imageLeft+imageWidth+settings.offset;}}else{
leftpos=imageLeft-settings.xzoom-settings.offset;
if(leftpos<0){
leftpos=imageLeft+imageWidth+settings.offset;}}
$("div.zoomdiv").css({top:imageTop,left:leftpos});
$("div.zoomdiv").width(settings.xzoom);
$("div.zoomdiv").height(settings.yzoom);
$("div.zoomdiv").show();
if(!settings.lens){
$(this).css('cursor','crosshair');}
$(document.body).mousemove(function(e){
mouse=new MouseEvent(e);
var bigwidth=$(".bigimg").get(0).offsetWidth;
var bigheight=$(".bigimg").get(0).offsetHeight;
var scaley='x';
var scalex='y';
if(isNaN(scalex)|isNaN(scaley)){
var scalex=(bigwidth/imageWidth);
var scaley=(bigheight/imageHeight);
$("div.jqZoomPup").width((settings.xzoom)/(scalex*1));
$("div.jqZoomPup").height((settings.yzoom)/(scaley*1));
if(settings.lens){
$("div.jqZoomPup").css('visibility','visible');}}
xpos=mouse.x-$("div.jqZoomPup").width()/2-imageLeft;
ypos=mouse.y-$("div.jqZoomPup").height()/2-imageTop;
if(settings.lens){
xpos=(mouse.x-$("div.jqZoomPup").width()/2 < imageLeft ) ? 0 : (mouse.x + $("div.jqZoomPup").width()/2>imageWidth+imageLeft)?(imageWidth-$("div.jqZoomPup").width()-2):xpos;
ypos=(mouse.y-$("div.jqZoomPup").height()/2 < imageTop ) ? 0 : (mouse.y + $("div.jqZoomPup").height()/2>imageHeight+imageTop)?(imageHeight-$("div.jqZoomPup").height()-2):ypos;}
if(settings.lens){
$("div.jqZoomPup").css({top:ypos,left:xpos});}
scrolly=ypos;
$("div.zoomdiv").get(0).scrollTop=scrolly*scaley;
scrollx=xpos;
$("div.zoomdiv").get(0).scrollLeft=(scrollx)*scalex;});},function(){
$(this).children("img").attr("alt",noalt);
$(document.body).unbind("mousemove");
if(settings.lens){
$("div.jqZoomPup").remove();}
$("div.zoomdiv").remove();});
count=0;
if(settings.preload){
$('body').append("<div style='display:none;' class='jqPreload"+count+"'>360buy</div>");
$(this).each(function(){
var imagetopreload=$(this).children("img").attr("jqimg");
var content=jQuery('div.jqPreload'+count+'').html();
jQuery('div.jqPreload'+count+'').html(content+'<img src=\"'+imagetopreload+'\">');});}}})(jQuery);
function MouseEvent(e){
this.x=e.pageX;
this.y=e.pageY;}
//放大镜结束
//瀑布流开始
/*
    parend 父级id
    pin 元素id
*/

function waterfall(parent,pin){
    var oParent=document.getElementById(parent);// 父级对象
    var aPin=getClassObj(oParent,pin);// 获取存储块框pin的数组aPin
    var iPinW=aPin[0].offsetWidth;// 一个块框pin的宽
    var num=Math.floor(document.documentElement.clientWidth/iPinW);//每行中能容纳的pin个数【窗口宽度除以一个块框宽度】
    oParent.style.cssText='width:'+iPinW*num+'px;ma rgin:0 auto;';//设置父级居中样式：定宽+自动水平外边距

    var pinHArr=[];//用于存储 每列中的所有块框相加的高度。
    for(var i=0;i<aPin.length;i++){//遍历数组aPin的每个块框元素
        var pinH=aPin[i].offsetHeight;
        if(i<num){
            pinHArr[i]=pinH; //第一行中的num个块框pin 先添加进数组pinHArr
        }else{
            var minH=Math.min.apply(null,pinHArr);//数组pinHArr中的最小值minH
            var minHIndex=getminHIndex(pinHArr,minH);
            aPin[i].style.position='absolute';//设置绝对位移
            aPin[i].style.top=minH+'px';
            aPin[i].style.left=aPin[minHIndex].offsetLeft+'px';
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
            pinHArr[minHIndex]+=aPin[i].offsetHeight;//更新添加了块框后的列高
        }
    }
}

/****
    *通过父级和子元素的class类 获取该同类子元素的数组
    */
function getClassObj(parent,className){
    var obj=parent.getElementsByTagName('*');//获取 父级的所有子集
    var pinS=[];//创建一个数组 用于收集子元素
    for (var i=0;i<obj.length;i++) {//遍历子元素、判断类别、压入数组
        if (obj[i].className==className){
            pinS.push(obj[i]);
        }
    };
    return pinS;
}
/****
    *获取 pin高度 最小值的索引index
    */
function getminHIndex(arr,minH){
    for(var i in arr){
        if(arr[i]==minH){
            return i;
        }
    }
}


function checkscrollside(){
    var oParent=document.getElementById('main');
    var aPin=getClassObj(oParent,'pin');
    var lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//注意解决兼容性
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastPinH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}
//瀑布流系列结束