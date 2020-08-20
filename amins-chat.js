import Tool from "./tools.js";
$(function(){
    let tool = new Tool();
    let listBg = [
        "../img-room/back1.jpg",
        "../img-room/back2.jpg",
        "../img-room/back-2.jpg",
        "../img-room/back3.jpg",
        "../img-room/back-3.jpg",
        "../img-room/back4.jpg",
        "../img-room/back6.jpg",
        "../img-room/back-6.jpg",
        "../img-room/back7.jpg"
    ];
    $(".chat-box").css({
        "background":`url("${listBg[tool.random(0,8)]}")`,
        "background-position": "center center",
        "background-repeat":"no-repeat",
        "background-size":"cover",
        "transition": "all 2s ease-in-out .5s"
    });
    $(".chulda-logo").on("click",function(){
        $(".chat-box").css({
            "background":`url("${listBg[tool.random(0,8)]}")`,
            "background-position": "center center",
            "background-repeat":"no-repeat",
            "background-size":"cover",
            "transition": "all 2s ease-in-out .2s"
        });
    });
    //copy anime
        $(".btn-copy").on("click",function(){
            let text = $(this).siblings("h2").text();
            let inp = $("<input>");
            $("body").append(inp);
            inp.val(text).select();
            document.execCommand("copy");
            inp.remove();
            let _this = $(this);
            if($(_this).text()== "copy"){
                $(_this).addClass("click").text("copied");  
            }
            setInterval(function(){
                $(_this).removeClass("click").text("copy");
             },2000);

        });
});