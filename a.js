$(function(){

        Circle();
        clickAdd();
        clickreMove();
        mousequest();
        clickli();
        
    })
function successHidden(){
	$('#success').addClass('hidden')
}
var All={};
function imgShow(){

     var input = document.querySelector('input#sin');
     var fileL = input.files;

     for (let i = 0; i < fileL.length; i++) {

     var file=fileL[i];
     var reader = new FileReader();
     reader.readAsDataURL(file);

    reader.onload = function () {
        All["allimg"+i]=this.result;
        $("#showimg").find("img").attr("src", this.result);
    }
   }  
}

function Forecast(url){
    var tableData= getUser('table1');
    //alert(tableData);
    //var imgData=JSON.stringify(All)
    //console.log(imgData)
    var resultData = JSON.stringify($.extend(true,tableData,All));
    //console.log(resultData)
            //测试代码
        alert("成功")
       
        //en
    //      $.ajax({
    //     type: "post",
    //     contentType: "application/json",
    //     url:url,
    //     data: resultData,
    //     success: function (data) {
    //         //alert(data)
    //         //console.log(data);
    //         if (data == "1") {
    //             alert("成功");
                
    //         } else {
    //             alert("失败")
    //         }

    //     }
    // })

}

function getUser(tableID){  
    var args = {};  
    $("#"+tableID+" tr:gt(0)").each(function(i){  
        var data = new Object();  
        $(this).find('td').each(function(i){  
             
            data["td"+i]= $(this).text();  
        });  
        args[i]=data;  
    });  
    
    return args;//JSON.stringify(args);  
}  
function Y(){
   var Data1= $('#td1').text()
   var Data2= $('#td2').text()
   var Data3= $('#td3').text()
   var Data4= $('#td4').text()
   if(Data1==""||Data2==""||Data3==""||Data4==""){
       alert("请输入完整内容")
   }else{
 
   Yinset(Data1,Data2,Data3,Data4)
   N()
   $('#td1').text("")
   $('#td2').text("")
   $('#td3').text("")
   $('#td4').text("")
}
}

function N(){
    $('#alTable').addClass('hidden')
}
function threeFJ(){
    $('#alTable').removeClass('hidden')
}
function Yinset(Data1,Data2,Data3,Data4){
    var html="<tr>"
        html+="<td>"+Data1+"</td>"
        html+="<td>"+Data2+"</td>"
        html+="<td>"+Data3+"</td>"
        html+="<td>"+Data4+"</td>"
        html+="</tr>"
    $("#insertT").append(html)
}
   
function startclick(url){
    var meThodB=[];
    var B=$('.look')
    for (var i = 0; i < B.length; i++) {
        meThodB.push($(B[i]).text())
    }
    var checkedV=$('#btP input:checked').val();
    meThodB[meThodB.length]={'checked':checkedV};
    var JsonM=JSON.stringify(meThodB);
            //测试代码
        alert("成功")
       
        //en
    //  $.ajax({
    //     type: "post",
    //     contentType: "application/json",
    //     url:url,
    //     data: JsonM,
    //     success: function (data) {
    //         //alert(data)
    //         //console.log(data);
    //         if (data == "1") {
    //             alert("成功");
                
    //         } else {
    //             alert("失败")
    //         }

    //     }

    // })
    
   
}
function firstAjax(i,url){
    var input = document.querySelectorAll('input[type = "file"]')[i];
    var file = input.files[0];
    
    var reader = new FileReader();
    reader.readAsDataURL(file);
     reader.onload = function () {
        var Data1
        var obj = {};
        obj[input.name]=this.result;
        Data1=JSON.stringify(obj)
        //测试代码
        alert("成功")
        $(".looksuccess").removeClass('hidden')
        //end
        //console.log(Data1)
     //被注释的AJAX
    //     $.ajax({
    //     type: "post",
    //     contentType: "application/json",
    //     url:url,
    //     data:Data1,
    //     success: function (data) {
    //         //alert(data)
    //         //console.log(data);
    //         if (data == "1") {
    //             alert("成功");
    //             $(".looksuccess").removeClass('hidden')
    //         } else {
    //             alert("失败")
    //         }

    //     }

    // })
    //结束
    }
}
function clickAdd(){
    $('#spana').click(function(){
    if ($('#usl').hasClass('hidden')) {
    $('#usl').removeClass('hidden')
    $('#usl2').removeClass('hidden')
     var oBt=$(this).siblings(".hidden").each(function(i){
        if (i<8) {
           
    	$('#usl').append("<li class='list-group-item'>"+$(this).text()+"<span class='quest' >?</span>"+"<span class='lookspan'>"+$(this).next().text()+"</spam>"+"</li>") 
        }else{
        $('#usl2').append("<li class='list-group-item'>"+$(this).text()+"<span class='quest' >?</span>"+"<span class='lookspan'>"+$(this).next().text()+"</spam>"+"</li>") 
        }
    })
}
    
})
}
function clickli(){
    $('#usl').on('click','li',(function(e){ 
        e.stopPropagation();
        var Text
        if (e.target.nodeName.toLowerCase()=='li') {
            Text=$(e.target).text().split('?')[0];
        }else{
            Text=$(e.target).parent().text().split('?')[0];
        }
        var Ball=$("#meThod").find('button')
        for (var i = 0; i < Ball.length; i++) {
            if($(Ball[i]).text()==Text){
                $(Ball[i]).removeClass('hidden')
            }
        }
        $('#usl').empty().addClass('hidden');
        $('#usl2').empty().addClass('hidden');
    }))
        $('#usl2').on('click','li',(function(e){ 
        e.stopPropagation();
        var Text
        if (e.target.nodeName.toLowerCase()=='li') {
            Text=$(e.target).text().split('?')[0];
        }else{
            Text=$(e.target).parent().text().split('?')[0];
        }
        var Ball=$("#meThod").find('button')
        for (var i = 0; i < Ball.length; i++) {
            if($(Ball[i]).text()==Text){
                $(Ball[i]).removeClass('hidden')
            }
        }
        $('#usl').empty().addClass('hidden');
        $('#usl2').empty().addClass('hidden');
    }))
}


function mousequest(){
            
    // })
        $('#usl').on('mouseover','span',(function(e){
            var Etarget=$(e.target).next()
             Etarget.css('display','block')
             $(e.target).mouseout(function(){
              Etarget.css('display','none')
             })  
        }))
         $('#usl2').on('mouseover','span',(function(e){
            var Etarget=$(e.target).next()
             Etarget.css('display','block')
             $(e.target).mouseout(function(){
              Etarget.css('display','none')
             })  
        }))

}

function clickreMove(){
    $('#meThod').on('click','button',function(e){
       $(e.target).addClass('hidden');
       $(e.target).removeClass('look')
    })
}

function Circle(){
            if( $('.mask span').text() <= 50 ){
            $('.circle_right').css('transform','rotate('+($('.mask span').text()*3.6)+'deg)');
        }else{
            $('.circle_right').css({
                'transform':'rotate(0deg)',
                "background":"red"
            });
            $('.circle_left').css('transform','rotate('+(($('.mask span').text()-50)*3.6)+'deg)');
        }
}


