var setLoadAni = (function() {
    let callback;

    function setLoading(curPro) {
        console.log('setLoading')
        var progressDom = document.querySelector('.progress'),
            progressNumDom = document.querySelector('.progress-num');
        if (!progressDom || !progressNumDom) {
            console.log('dom is not ready')
            return;
        }
        if (!setLoading.stopflag) {
            console.log('设置 加载结束回调')
            setLoading.stopflag = true;
            document.addEventListener('DOMContentLoaded', function() {
                console.log('load')
                setLoading.max = 100;
            }, false)
        }
        if (curPro > 100) {
            console.log('loading end')
            callback()
            document.querySelector('.loading').style.display = 'none';
            return;
        }
        if (setLoading.max == 100) {
            setTimeout(function() {
                setLoading(curPro)
            }, 10)
        } else {
            setTimeout(function() {
                setLoading(curPro)
            }, 50)
        }

        if (curPro > setLoading.max) return;

        var curPro = curPro || 0;

        curPro += 0.5, curPcent = (Math.floor(curPro) / 100);
        progressNumDom.innerText = Math.round(curPcent * 100) + '%';
        progressDom.style.transform = "scaleX(" + curPcent + ")";
    }

    setLoading.max = 85;
    setLoading.stopflag = false;


    return function(cb) {
        callback = cb;
        setLoading()
    };
})();


var AnimateControl = (function() {

    function AnimateControl() {
        this.swiperAnimateCache()
    }

    AnimateControl.prototype.swiperAnimateCache = function() {
        for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
            allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("s-a-style-cache", allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("s-a-style-cache", " ");
            allBoxes[i].style.visibility = "hidden";
        }
    }

    AnimateControl.prototype.swiperAnimate = function(selector) {
        this.clearSwiperAnimate();
        var b, s = ".ani";
        if (selector) {
            s = selector + " .ani"
        }
        var b = document.querySelectorAll(s);
        for (i = 0; i < b.length; i++) {
            b[i].style.visibility = "visible";
            b[i].className = b[i].className + " animated";
            style = b[i].attributes["style"].value;
            effect = b[i].attributes["s-a-effect"] ? b[i].attributes["s-a-effect"].value : "";
            effect && (style = style + "animation-name:" + effect + "; -webkit-animation-name:" + effect + ";");
            duration = b[i].attributes["s-a-duration"] ? b[i].attributes["s-a-duration"].value : "";
            duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";");
            delay = b[i].attributes["s-a-delay"] ? b[i].attributes["s-a-delay"].value : "";
            delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";");
            iterationCount = b[i].attributes["s-a-iteration-count"] ? b[i].attributes["s-a-iteration-count"].value : "";
            iterationCount && (style = style + "animation-iteration-count:" + iterationCount + "; -webkit-animation-iteration-count:" + iterationCount + ";");
            b[i].setAttribute("style", style);
        }
    }

    AnimateControl.prototype.clearSwiperAnimate = function(selector) {
        for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
            allBoxes[i].attributes["s-a-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["s-a-style-cache"].value);
            allBoxes[i].style.visibility = "hidden";
            allBoxes[i].className = allBoxes[i].className.replace("animated", " ");
            allBoxes[i].attributes["s-a-effect"] && (effect = allBoxes[i].attributes["s-a-effect"].value);
        }
    }

    return AnimateControl;
})()


function animateCb(cb) {
    $(this).on('webkitAnimationEnd', function() {
        cb && typeof cb === 'function' && cb()
    });

    $(this).on('animationend', function() {
        cb && typeof cb === 'function' && cb()
    });
}

/**
 * @name: setRem
 * @param {number} 基于750*1206设计稿高度的主字体大小标杆
 * @param {object} document
 * @param {object} window
 * @return: 
 * @Author: Rainy
 */
function setRem(fz, doc, win) {
    var dcl = doc.documentElement,
        wh;

    function refreshRem() {
        wh = dcl.clientHeight;
        dcl.style.fontSize = fz * (wh / 1206) + "px";
    }
    win.addEventListener('resize', refreshRem, false); //绑定在改变尺寸的自动刷新设置rem
    doc.addEventListener('DOMContentLoaded', refreshRem, false); //绑定在dom树渲染完成设置rem
}