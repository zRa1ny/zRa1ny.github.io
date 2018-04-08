function postBo(obj){
    var Oparent=document.getElementById("conText")
      Oparent.innerHTML=obj; 
      litext=Oparent.getElementsByTagName("h2")[0].innerText;
      var Oul=document.getElementById("listul")
      var Oli=document.createElement("li");
        Oul.appendChild(Oli); 
      var num=Oul.getElementsByTagName("li").length;
        Oli.innerText=num+" "+litext;
      myStrage(num,obj)
}
function write(title,content){
  return "<h2>"+Trim(title,"g")+"</h2>"+"<div>"+Trim(content,"g")+"</div>"
}
//json对象增加数据
var myjson={}
function myStrage(index,value){
  
  myjson[index]=value
  
}
//去掉所有空格
function Trim(str,is_global)
  {
   var result;
   result = str.replace(/(^\s+)|(\s+$)/g,"");
   if(is_global.toLowerCase()=="g")
   {
    result = result.replace(/\s/g,"");
    }
   return result;
}
//点击加载
function liclick(Oul,obj){
  var lis=Oul.getElementsByTagName("li");
  var condiv=document.getElementById("conText")
    for (var i = 0 ; i<lis.length; i++){
      lis[i].index=i
      lis[i].onclick=function(){
      condiv.innerHTML=myjson[this.index+1] 
    }
  }
}
function stopBubble(e){
          if(e && e.stopPropagation) {//非IE 
          e.stopPropagation(); 
        } else { //IE 
          window.event.cancelBubble = true; 
        } 
}

function fourMove(){
  var Four=document.getElementById("four");
  var shopbtn=document.getElementById("shopbtn");
  Four.onclick=function(e){
    stopBubble(e)
    shopbtn.style.transform="translateY(200px)";
    Tostartcss(shopbtn,"transform","translateY(-120px)")
}
  
}


function twoMove(){
  var Two=document.getElementById("two");
  var Navlist=document.getElementById("Navlist");
    Two.onclick=function(e){
    stopBubble(e)
    Navlist.style.transform="translateX(0px)";
    Tostartcss(Navlist,"transform","translateX(-220px)")
      }
    Navlist.onmouseover=function(){
      this.style.transform="translateX(0)";
      this.style.boxShadow="none";
    }
    Navlist.onmouseout=function(){
      this.style.transform="translateX(-220px)";
      this.style.boxShadow="0 0 1px 1px #fff";
    }

   
}


function Tostartcss(obj,attr,target){
  window.onclick=function(){
    obj.style[attr]=target;
  }
}



