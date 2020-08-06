$(function(){
   $('.eye').click(function(){
       console.log($('.eye img').attr('status'))
       if($('.eye img').attr('status')==0){
        $('.eye img').attr({
            status:'1',
            src:"../../image/eye.png"
        }) 
        $('#password').attr({
            type:"text"
        })
       }else{
        $('.eye img').attr({
            status:'0',
            src:"../../image/closeEye.png"
        })
        $('#password').attr({
            type:"password"
        })
       }
      
   }) 



   function $(a) {
    return document.querySelector(a);//获取元素的函数
}
var oDarg = $(".drag");
var oBg = $(".bg");
var oText = $(".text");
var oBtn = $(".btn");
var success = false;//判断验证是否成功
var distance = oDarg.offsetWidth - oBtn.offsetWidth;//验证成功的距离
oBtn.onmousedown = function (eve) {//给物块设置鼠标按下事件
    oBg.style.transition = "";//在点击事件按下后 必须清除后面设置的transition属性 否则会造成物块移动的bug 具体可自行测试
    oBtn.style.transition = "";
    var e = eve || window.event;
    var downX = e.clientX;//获取鼠标刚按下时的坐标 相对于浏览器页面
    document.onmousemove = function (eve) {//这里要给document设置鼠标移动事件 而不能设置物块 如果设置了物块移动也会有小bug 自行测试
        var e = eve || window.event;
        var moveX = e.clientX;//获取鼠标移动时的坐标 相对于浏览器页面
        var offsetX = moveX - downX;//物块移动的距离
        if (offsetX > distance) {//如果移动的距离已经大于本应该移动的距离 那么就将它设置为验证成功时的距离
            offsetX = distance;
        } else if (offsetX < 0) {//同样 如果移动的距离小于0时 将它设置为0 保证不会超出范围
            offsetX = 0;
        }
        oBtn.style.left = offsetX + "px";
        oBg.style.width = offsetX + "px";
        if (offsetX == distance) {//判断验证通过
            oText.innerHTML = "验证通过";
            oBtn.innerHTML = "√";
            oText.style.color = "#FFF";
            oBtn.style.color = "rgb(39, 233, 21)";
            success = true;//验证通过时的条件
            document.onmousemove = null;//验证通过后 鼠标按下事件和鼠标移动都没用了 因此需要清除
            oBtn.onmousedown = null;
            setTimeout(function () {
                alert("解锁成功");
            }, 10)
        }
    }
}
document.onmouseup = function () {//这里也是给document设置鼠标抬起事件
    if (success) {
        // 如果已经验证成功了 那么结束函数
        return;
    } else {//反之 验证没有通过 则物块原来的位置
        oBtn.style.left = 0;
        oBg.style.width = 0;
        oBg.style.transition = "width 1s ease";
        oBtn.style.transition = "left 1s ease";
    }
        document.onmousemove = null;//返回到原来的位置过程中 需要清除鼠标移动事件和鼠标抬起事件
        oBtn.onmouseup = null;
}


})