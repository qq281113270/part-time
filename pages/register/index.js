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



   

})