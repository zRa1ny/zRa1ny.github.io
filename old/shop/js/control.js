window.onload=function(){
    land();//登录状态更新
    Navlist();//列表hover
    rotate3d();//3d旋转盒子拖拽初始化
    Nav();
    //瀑布流布局初始化
    waterfall('main','pin');

    var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};
    
    window.onscroll=function(){
        if(checkscrollside()){
            var oParent = document.getElementById('main');// 父级对象
            for(var i=0;i<dataInt.data.length;i++){
                var oPin=document.createElement('div'); //添加 元素节点
                oPin.className='pin';                   //添加 类名 name属性
                oParent.appendChild(oPin);              //添加 子节点
                var oBox=document.createElement('div');
                oBox.className='box';
                oPin.appendChild(oBox);
                var oImg=document.createElement('img');
                oImg.src='./images/'+dataInt.data[i].src;
                oBox.appendChild(oImg);
                var oP=document.createElement('p');
                 oP.className='oPx';
                oP.innerText="瀑布流新消息";
                oBox.appendChild(oP);
            }
            waterfall('main','pin');
        };
    }
    //放大镜初始化

    $(function() {
     $(".jqzoom").jqueryzoom({
        xzoom: 420,
        yzoom: 420,
        offset: 10,
        position: "right",
        preload: 1,
        lens: 1
    });})
    //
}//window.onload结束
function land(){
    if (localStorage.pass=='yes') {
        document.getElementById('landing').innerText='[已登陆]';
        localStorage.removeItem('pass');
    }else{
        return false
    }
}
function Navlist() {
            var Lis = document.getElementsByTagName("li");
            for (var i = 0; i < Lis.length; i++) {
                Lis[i].i = i;
                Lis[i].onmouseover = function () {
                    this.className = "lihover";

                    var h0 = (this.i - 1) * 30 + 35;
                    var y = this.getElementsByTagName("div")[0].offsetHeight;
                    var h = this.getElementsByTagName("div")[0].style.top+y;
                    

                    if (h < h0) {
                        if (y>70) {
                          this.getElementsByTagName("div")[0].style.top = h0 -y+70+ "px";  
                        }else{
                        this.getElementsByTagName("div")[0].style.top = h0 + "px";}
                    }

                    if (y > 550) {
                        this.getElementsByTagName("div")[0].style.top = "-3px";
                    }
                }

                Lis[i].onmouseout = function () {
                    this.className = "";
                }
            }

        }

function rotate3d(){
     var a=document.getElementById("Imgbox2")
        var x;
        var y;
        a.onmousedown=function(ev){ //在div上摁下时
            x=ev.clientX        //获取当前鼠标的位置
            y=ev.clientY
            document.onmousemove=function(ev){//鼠标移动时
                var x1=ev.clientX-x+30 //当前位置减去下时鼠标的位置，就获取移动了多少度，应为一开始有初始角度所以加30°
               　　  var y1=ev.clientY-y-30
　　　　　　　　　　　　　　　　　　　　//甚至样式每次鼠标移动式更改样式
                a.style.transform="perspective(1000px) rotateY("+ x1 +"deg) rotateX("+ -(y1) +"deg)";
            }
            document.onmouseup=function(){
                document.onmousemove=null;
            }
        }
    }
  function setScrollTop(target){
  
  if(document.documentElement&&document.documentElement.scrollTop)
  {
  document.documentElement.scrollTop=target;
  }
  else if(document.body)
  {
  document.body.scrollTop=target;
  }
 
}
function getScrollTop()
{
  var scrollTop=0;
  if(document.documentElement&&document.documentElement.scrollTop)
  {
  scrollTop=document.documentElement.scrollTop;
  }
  else if(document.body)
  {
  scrollTop=document.body.scrollTop;
  }
  return scrollTop;
}
function getScrollHeight()
{
  return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
}


    function Nav(){
        var oPdiv=document.getElementById('Nav-right')
        var Alldiv=oPdiv.getElementsByTagName('div')
        for (let i = 0; i<Alldiv.length; i++) {
        Alldiv[i].onclick=function(){  
            let n=Alldiv[i].innerText;
            switch(n)
                {
                case "TOP":(function(){
                    setScrollTop("0px")
                }())
                 break;
                case "Nice":
                  alert("未接入")
                  break;
                case "Phone":
                  alert("未接入")
                  break;
                case "bottom":
                  (function(){
                    var t=getScrollHeight()
                    setScrollTop(t)
                }())
                  break;
                default:
                  alert("错误参数")
                }
            }
        } 
    }
