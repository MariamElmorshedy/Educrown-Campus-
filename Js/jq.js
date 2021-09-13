$(document).ready(function(){

    $(".navbar .normal").click(function (e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top ,
        }, 1000);
    });
    $(".navbar .normal").click(function () {
        
        $(this).addClass("active").siblings().removeClass("active");
    });

    // $(window).scroll(function () {
    //     $(".sections").each(function () {


    //         if ($(window).scrollTop() == $(this).offset().top - 60) {

    //             var ID = $(this).attr("id");
    //             $(".navbar a ").removeClass("active");
    //             $(" .navbar a[data-scroll='" + ID + "']").addClass("active");
               
            
    //         }


    //     });
    // });
    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            $(".navbar").css("background-color","rgba(0, 0, 0, 55%)");
            $(".navbar").css("position","fixed");
        }
        else{
            $(".navbar").css("position","static");
            $(".navbar").css("background-color","transparent");

        }

        if($(this).scrollTop() >= 300){
            $(".scroller").fadeIn(1000);
       
           }else{
               $(".scroller").fadeOut(1000);
           }
        
    });


    // $(".card_animate .card").hover(function(){
    //     $(this).css("position","absolute");
       
    //         $(this).animate({
    //             top: "-10px",
    //         });
        
    // });
    // $(".card_animate .card").mouseleave(function(){
    //     $(this).css("position","static");
        
    //         $(this).animate({
    //             top: "0",
    //         })
        
    // });

    // var placeAttr = "";
    // $("[placeholder]").each(function(){
    //     $(this).focus(function(){

    //         placeAttr = $(this).attr("placeholder");
    //         $(this).attr = ("placeholder","");
    //     }).blur(function(){
    //         $(this).attr("placeholder",placeAttr);
    //     })
    // });
    
$(".Register_btn").click(function(e){
    if ($(".RQname").val() == ""){
        e.preventDefault();

    $(".error").each(function(){
        $(this).animate({
            top: "40px",
        },1000).delay(2000).animate({
            top:"-100%",
        },1000);
    });
}
});

$(".scroller").click(function(){
    $("body,html").animate({
scrollTop: "0",
    });
});

$("<span class='ARS'>*</span>").insertBefore(".RQname");
$(".RQname").each(function(){
    $(".ARS").css({
        left:$(this).parent().find(":input").innerWidth()- 30 ,
    
    });
});

    



})