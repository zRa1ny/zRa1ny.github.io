var Car = (function () {
    var configDefault = {
        width: 117,
        height: 59,
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAA7CAMAAAByiDWSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNWRjZjhiMi00NGU2LWRlNDktOGY3My1jY2ZjMjE0YmZhZmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlCMDRDOTZFM0Y0MTFFOUJDQThCQzc5NUVCOUVGMTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlCMDRDOTVFM0Y0MTFFOUJDQThCQzc5NUVCOUVGMTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU2ZmUwY2JjLTNlYTktNDJiYS1hMjQ1LWQ4NDNjNTIzMzk4NSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmM2I2MTdlLWUxYTItN2I0Zi04NGY5LTZlNzNkMTkyMDE1YiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmjaU+AAAAMAUExURdleODw7QRMpNttkOu2hTM1bNxUnMmtubRgzQ6dTOz00Mo1NPItNPddeOdddOA8tPQ0vQjUtK79YOik2QhclLmNkY6BRO55ROy4lIkVBP5NOPG9GPl1CPxshJhkjKkw+QBYyQy84QicdGic2QiE1Qx00Qw4xRCEaGR8cHiIZFhIqOCMYFT0zMMLV1l6RsgwwRP/hXzpPc3zGpdBcOc9cORoiKPzWXNlfOCIZGB0eIT44Nq9VOpdPPPGwUO2jTNJcONheOLJVOrvNzpOdnTo6QcRZOcdaOaRSO91tPNpiOb7Q0YVLPeSEQw0uQbNWOnyBgJSfn9hfOb7R0Tc6Qf7eXiM1QxwfIx4eIPnNWSEbGsxbOb1YOpxQPO2kTatxZbdbRP3ZXT02NPrRWrCMaFFOTIW8mslaOTpNbsFcQRAxRKJZTJeioueQR+mVSZ52ck1KSHN4d8pkR2xvbg0wRINWWEpHRZJ8f5lQPGBDPyUbGHWHm7TExay7vIyVlPzXXKV0bPXAVZFOPPfFV2RmZOePR3BHPvO2Uqy6u+qaSvS5U8xdPdxnO2KPrt90P7HBwvzVW7PDxLbHyLdsWrx+WlRAQFhBQGOLdou1k/bBVnhVXJenhZGujO+oTqSadqqTcHzFpH6EhOyeS56rq1xbWuiRR8BYOTgwLiUaF2hqaIePjgwwQ8DT1LBTNnGtka1aSHl+fZhYUKpTO6tUOzpOcdVdOOB3P56gftZfO0dDQcDS09xqPFJQTpV6fF6AbYJLPUpQRyAcHMVmTI5XVPjJWLdXOnhIPnGJn9ZhO7pVNjkzMK1wZNtmOn/Doj88QSgeG+qYSZB8gLbGx46XlztKZ/CsT6J1b4lWVlRTUVdWVfvTW/bBVd5vPdlgOJl4d0c9QdNlP/3bXaNPNbzOzvfHV2xFPm1GPohMPa1UOzMrKDM5Qm5ycRAsOxAsPOeNRqxSNnRHPjw9SKpyZw4uQGREP5mlpZqmppVPPKlRNnyCgctbOe6lTc5bOeubSpZ6e8HU1QAAAPIqPJMAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAD60lEQVR42rzZdXzTaBgH8BcfDNmQ4XA47M32tIHBcHd3dzhcjuEud4e7u7u7u3MHxx3udri7E94kzZo2SfumSfr7p/u8yZNvXkmarIgzMwghuv2MKioxXUV0MU9FemKSSo1QscgXNM7HO7J22W4ME72vCapbBxhGOLxCZRwbvLKIHnU9OKNUne3eWESLchylyqiMvA+q4sQpVWRY5XSqnFFVo6t+UDlPfUWKNeyV9UWVXTpIcensn2aWymmq7gffu5ZlWRNU1Womwatzm1U2z2dZC9U2dj6Kzawj1qh2u5/U6LUpU+1uB2ctUBkFqqmyLhtU7lMmquzfrafPnrVt7ryWk719DdNeOTLV7q6KuXWc/hlDh+pgL87sfmhD+3VN245KhHyInvswerHmRBxkSjyoyMKoqMj6uKvIP3FRrediffuzcTlX1Xq0/D2bzTbwmlz1w8j+buNzXqb6Yz6LCOpQP6sLBbUemVjnHXrr1Vot/slnpdpJUPPK1XLN+KYRVqrPBbWWXI0tNI23Uq0kELZYMrWw1GRdxgrC7XwydY6o7jJ+8MQh/2c8ffPth9yKLYN54Yt8hDuKU214OSWqWBvEBNx3d0cXznsl9nW5Wv4wry4xipaJAc5kKa5xI3ZeOX8VmTGyklG0dDKAJBly5oo8EPGU7+5Gb6p7kv5RKgDaJZvaqJiOKa0Jq5JjRyKCALKV1qV+ThcljVOmstTqUYD0ODr5CZtRj1qcXxJBz0JD35DPqJeUaJ6AVXGJ1qNDiRqLLpM/MpDigh7UJq8v3Oi559R2R/ORgCh4ExHJn3DdmKQ0LZ0aCEE5ME4RJqQqKU4C0FvrWz08Osd+E5qLkjURM1IaqPRkoApRqVOAdLX5TlEN2y10NovGE0y4LH2r8+1pCcp7y1qlzkw+6gBkzU2jZuJntaoDDatGZpaMUx6VB2LkgoaHT+Kn5xeoTEbq5HtSOjEFYeMC7KNRs0EdjN9J6jiMcwBwFROqvee4qp1J8RAAsvyD/xWLu2FcH6CUV7JYg6VZoS7GJSV1ODlfzbcrV3UQqU8HkBPjAY7iGsEYh0J25RBv+TXpkYfxQ3qlCXT2hkBPJHUlvXqQHO40BGGcuYJUvQLj5ABVyCIr07DKprIpC6UJfKD5poBxqn5iWYUCmqi7epbvxGOoTAZYQsM+kVVB/f9c0r/UE/iqEpewJ1XGjvle/WvB+CE1+eIzPyQ1nna1Opsq3n8luwZ7QMW7BC8qaqs50B/Ndamc846I9b6rk5ICd0V1Adancl5N7TdJUrWjPzFXr1+uEzX0Gwdh+3QZtvgRxv5UOYrpsUDlLDON/orka34KMAD1TYU/1TlecQAAAABJRU5ErkJggg=="
    }, pos = [{
        x: 436,
        y: 942,
        Angle: 0,
        dir: -1
    }, {
        x: 542,
        y: 922,
        Angle: 20,
        dir: -1
    }, {
        x: 568,
        y: 898,
        Angle: 40,
        dir: -1
    }, {
        x: 640,
        y: 829,
        Angle: 60,
        dir: -1
    }, {
        x: 720,
        y: 692,
        Angle: 60,
        dir: -1
    },
    {
        x: 773,
        y: 628,
        Angle: 40,
        dir: -1
    }, {
        x: 851,
        y: 587,
        Angle: 30,
        dir: -1
    }, {
        x: 955,
        y: 572,
        Angle: 0,
        dir: -1
    }, {
        x: 1056,
        y: 602,
        Angle: -20,
        dir: -1
    }], pxToVh = 0.08291, road = 25;
    function car () {
        this.config = configDefault;
        this.pos = pos;
        this.curIdx = 0;
        this.creatCar();
        this.bindTransitonEnd();
    }
    car.prototype.bindTransitonEnd = function () {
        var _this = this;
        // _this.move(pos[_this.curIdx++]);
        // this.$car.on('transitionend', function () {
        //     if (_this.curIdx >= pos.length) {
        //         pos.reverse().forEach(function (p) {
        //             p.dir = !p.dir
        //         });
        //         _this.curIdx = 0;
        //         _this.move(pos[_this.curIdx++]);
        //         return;
        //     }
        //     _this.move(pos[_this.curIdx++]);
        // })


        setInterval(() => {
            if (_this.curIdx >= pos.length) {
                pos.reverse().forEach(function (p) {
                    p.dir = -p.dir
                });

                _this.curIdx = 0;
                _this.move(pos[_this.curIdx++]);
                return;
            }
            _this.$car.css({
                "transform-origin": "50% 50%"
            })
            _this.move(pos[_this.curIdx++]);
        }, 2000)
    }
    car.prototype.creatCar = function () {
        this.$car = $('<div style="position:absolute;background:url(' + this.config.src + ') no-repeat;background-size:100% 100%;left:' + (pos[0].x - road - this.config.width / 2) * pxToVh + 'vh;top: (pos[0].y - road - this.config.height / 2) * pxToVh ;width:' + this.config.width * pxToVh + 'vh;height:' + this.config.height * pxToVh + 'vh;transition:all 2s linear;transform:rotateY(-180deg)"></div>');
        this.$car.appendTo($('.container .content'));
    }
    car.prototype.move = function (pos) {
        this.$car.css({
            left: (pos.x - road - this.config.width / 2) * pxToVh + 'vh',
            top: (pos.y - road - this.config.height / 2) * pxToVh + 'vh',
            transform: "rotateZ(" + (pos.dir == 1 ? (-pos.Angle * pos.dir) : pos.Angle * pos.dir) + "deg) rotateY(" + (pos.dir == 1 ? '0' : '-180') + "deg)"
        })




    }

    return car

})()
var setLoadAni = (function () {
    let callback;

    function setLoading (curPro) {
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
            document.addEventListener('DOMContentLoaded', function () {
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
            setTimeout(function () {
                setLoading(curPro)
            }, 10)
        } else {
            setTimeout(function () {
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


    return function (cb) {
        callback = cb;
        setLoading()
    };
})();


var AnimateControl = (function () {

    function AnimateControl () {
        this.swiperAnimateCache()
    }

    AnimateControl.prototype.swiperAnimateCache = function () {
        for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
            allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("s-a-style-cache", allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("s-a-style-cache", " ");
            allBoxes[i].style.visibility = "hidden";
        }
    }

    AnimateControl.prototype.swiperAnimate = function (selector) {
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

    AnimateControl.prototype.clearSwiperAnimate = function (selector) {
        for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
            allBoxes[i].attributes["s-a-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["s-a-style-cache"].value);
            allBoxes[i].style.visibility = "hidden";
            allBoxes[i].className = allBoxes[i].className.replace("animated", " ");
            allBoxes[i].attributes["s-a-effect"] && (effect = allBoxes[i].attributes["s-a-effect"].value);
        }
    }

    return AnimateControl;
})()


function animateCb (cb) {
    $(this).on('webkitAnimationEnd', function () {
        cb && typeof cb === 'function' && cb()
    });

    $(this).on('animationend', function () {
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
function setRem (fz, doc, win) {
    var dcl = doc.documentElement,
        wh;

    function refreshRem () {
        wh = dcl.clientHeight;
        dcl.style.fontSize = fz * (wh / 1206) + "px";
    }
    win.addEventListener('resize', refreshRem, false); //绑定在改变尺寸的自动刷新设置rem
    doc.addEventListener('DOMContentLoaded', refreshRem, false); //绑定在dom树渲染完成设置rem
}