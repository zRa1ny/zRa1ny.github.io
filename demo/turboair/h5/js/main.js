//绑定 DOMContentLoaded 设置rem
//绑定resize 设置rem
//绑定window.onload 隐藏loading
//第一时间执行，不能放置到windown.onload中
setRemAndHideLoading(document, window);
window.onload = function () {
    // alert("onload")
    $("#tabs>div").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab-content').hide().eq($(this).index()).show();
    })

    $('.back').click(function () {
        history.go(-1);
    })

    $('.menu').click(function () {
        $('.menus').slideToggle();
    })

}

/*   
 <!-- siwper 画屏+动画  html --> 
 <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: forestgreen;" data-hash="s1">
            <div class="ani" s-a-effect="fadeInDown" s-a-delay="2s" s-a-iteration-count="infinite"></div>
        </div>
    </div>
</div> 
*/
// 实例化swiper对象
//    var mySwiper = new Swiper('.swiper-container',{
//        //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
//        direction: 'vertical',
//        //将hashnav设置为true，并在每个slide处增加data-hash属性，可在当前页刷新。
//        hashnav:true,
//        onInit: function(swiper){
//            swiperAnimateCache(swiper);
//            swiperAnimate(swiper);
//            $('.page-L').scrollTop(0);
//        },
//        onSlideChangeEnd: function(swiper){
//            swiperAnimate(swiper);
//          $('.page-L').scrollTop(0);
//        }
//    });
//    // 引导页的enter键点击划入第二页
//    $('#s1 .enter img').on('click',function(event) {
//        mySwiper.slideTo(1,1000,false);
//        swiperAnimateCache(mySwiper);
//        swiperAnimate(mySwiper);
//    });
// // 需要局部滚动的页面，阻止事件冒泡 -- 阻止swiper滑动
//    $('.info').on('touchmove',function(){
//        event.stopPropagation();
//    });
/***************************************** 地图 ***************************************************/
//添加公司地址位置，修改公司地址方法如下：
// http://api.map.baidu.com/lbsapi/creatmap/index.html，该地址是百度地图生成器，
//打开网址后，将公司地址输入，获取到横纵坐标，请“coord=25.015643,102.753885”替换为获取到的横纵坐标，title替换为公司名称
// $('.map').click(function() {
//     location.href = 'http://api.map.baidu.com/marker?location=31.184249,121.416137&title=延锋伟世通电子科技（上海）有限公司&content=徐汇区钦州北路1001号&output=html';
// });


/***************************************** 音乐播放 ***************************************************/
// $(document).one("touchstart", function() {
//     $("#music").removeClass().addClass("pause");
//     $("#myMusic")[0].play();
//     $(".audio").addClass("Rot");
// })
// $("#music").click(function() {
//     if($(this).attr("class") == "play") {
//         $(this).removeClass().addClass("pause");
//         $("#myMusic")[0].play();
//         $(".audio").addClass("Rot");
//     } else if($(this).attr("class") == "pause") {
//         $(this).removeClass().addClass("play");
//         $("#myMusic")[0].pause();
//         $(".audio").removeClass("Rot");
//     }
// })
// document.addEventListener("WeixinJSBridgeReady", function() {
//     document.getElementById('myMusic').play();
// }, false);
//

/***************************************** 设置rem 隐藏loading ***************************************************/

function setRemAndHideLoading(doc, win) {
    // alert('执行')
    var docEl = document.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var dpr = 0;
    var scale = 0;
    // 对iOS设备进行dpr的判断，对于Android系列，始终认为其dpr为1
    if (!dpr && !scale) {
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = /android/.test(ua);
        var isIPhone = /iphone|ipad/.test(ua);
        var devicePixelRatio = win.devicePixelRatio;

        if (isIPhone) {
            dpr = devicePixelRatio;
        } else {
            dpr = 1;

        }

        scale = 1 / dpr;
    }
    // 设置data-dpr和viewport
    docEl.setAttribute('data-dpr', dpr); // 自定义
    // 动态改写meta:viewport标签
    // metaEl无则为null
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale +
            ', minimum-scale=' + scale + ', user-scalable=no');
        doc.documentElement.firstElementChild.appendChild(metaEl);
    } else {
        metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale +
            ', minimum-scale=' + scale + ', user-scalable=no');
    }
    // 动态设置根元素fontSize
    // 根元素fontSize公式：width/fontSize = baseWidth/baseFontSize
    // 其中，baseWidth, baseFontSize是选为基准的设备宽度及其根元素大小，width, fontSize为所求设备的宽度及其根元素大小
    // fontSize = baseFontSize * width / baseWidth;  
    // baseFontSize默认为16px；baseWidth则为设计时的参照宽度，一般为iphone6  375px；width为客户端的机型宽度；

    // var docEl = win.document.documentElement;
    // var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    // 设置根元素font-size 当设备宽度为375(iPhone6)时，根元素font-size=16px; 
    var refreshRem = function () {
        var clientWidth = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
        if (!clientWidth) return;
        var width = clientWidth; // 
        var fz = 16 * width / 375; // 
        // alert(fz)
        docEl.style.fontSize = fz + 'px';
    };
    var hideLoading = function () {
        document.getElementById('loading').style.display = 'none';
    }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, refreshRem, false); //绑定在改变尺寸的自动刷新设置rem
    doc.addEventListener('DOMContentLoaded', refreshRem, false); //绑定在dom树渲染完成设置rem
    // win.addEventListener('load', hideLoading, false); //绑定在window。onlaod的时候关闭loading层
    // refreshRem();
}