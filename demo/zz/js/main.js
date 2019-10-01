//绑定 DOMContentLoaded 设置rem
//绑定resize 设置rem
//绑定window.onload 隐藏loading
//第一时间执行，不能放置到windown.onload中
setRem(28, document, window);
window.isReady = true;
setLoadAni(function() {
    if (window.isReady) {
        window.isReady = false;
        init({
            companyData: companyData
        });
    }
});

init({
    companyData: companyData
});


function init(obj) {
    var $index = $(".index"),
        $container = $('.container'),
        ani = new AnimateControl(),
        companyData = obj.companyData;

    $index.animate({
        top: "0",
        opacity: '1'
    }, function() {
        ani.swiperAnimate();
    })

    $('.cir').click(function() {
        console.log('click')
        $('.' + $(this).attr('page')).addClass('animated zoomIn').show();
    })

    function hidePage() {
        console.log(this)
        $(this).removeClass('animated scaleOut').hide();
        $(this).off('animationend', hidePage);
        $(this).off('webkitAnimationEnd', hidePage);
    }

    $('.title-back').click(function() {
        var $page = $(this).parents('.page');
        $page.removeClass('zoomIn').addClass('scaleOut');
        $page.on('webkitAnimationEnd', hidePage)
        $page.on('animationend', hidePage)
    })


    $(".enter").click(function(e) {
        e.stopPropagation();
        // $container.fadeIn()
        $index.animate({
            top: "-100vh",
            opacity: '0'
        }, function() {
            $container.animate({
                top: "0",
                opacity: '1'
            }, function() {})

        })

    })

    $('.join-2-big-show').click(function() {
        $('.join .small-join').css({
            "max-height": "0"
        });
        $('.join .big-join').css({
            "max-height": "100vh"
        });
    })

    $('.join-backpage').click(function() {
        $('.join .small-join').css({
            "max-height": "100vh"
        });
        $('.join .big-join').css({
            "max-height": "0"
        });
    })

    $('.showActive').click(function() {
        $('.depart .nomral-box').css({
            "max-height": "0"
        });
        $('.depart .depart-box').css({
            "max-height": "100vh"
        });
    })

    $('.depart-backpage').click(function() {
        $('.depart .nomral-box').css({
            "max-height": "100vh"
        });
        $('.depart .depart-box').css({
            "max-height": "0"
        });
    })


    $('.group .campany').click(function(e) {
        var curData = companyData[$(this).attr('company')];
        $(this).addClass('active').siblings().removeClass('active');
        $('#group-deatail-title').text(curData.title)
        $('#group-deatail-img-src').attr('src', './images/company/' + curData.img)
        $('#c-name').text(curData.name)
        $('#c-text').text(curData.content)
        $('#group-deatail').fadeIn();
    })
    $('.group-deatail-back').click(function() {
        $('#group-deatail').fadeOut()
    })


}