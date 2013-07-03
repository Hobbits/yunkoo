$(document).on("vclick",".fakeSubmit",function(){
    $.mobile.activePage.find(".trueSubmit").click();
});


$(document).on("swiperight","div:jqmData(role='page')",function(evt){
    $.mobile.activePage.find(".myPanel").panel("open");
});

$(document).on("vclick",".gallery li",function(e){
    var choseLi=$(this);
    if(!choseLi.hasClass("cur")){
        $.mobile.activePage.find("div:jqmData(role='popup')").popup("close");

    $(".gallery li").removeClass("cur");
    choseLi.addClass("cur");
    }
});

$(document).on("pageshow",function(){
    $.mobile.activePage.find(".myPanel").trigger("create");
})

$(document).ready(function(){
     var prepareData=function(callback){
        $.getJSON(appConfig.bannerURL+"&callback=?", function(data){
            if(data.status == "ok"){
                var strHTML = '';
                $.each(data.result, function(InfoIndex, Info) {
                    strHTML += "<div class='swiper-slide' style='background:url(http://yunku.4pu.com/shop/" +Info["images_url"] +") no-repeat;'>" + "<a href='" +Info["images_link"] + "'></a></div>";            
                });
                $(".swiper-wrapper").empty().html(strHTML);
                if(callback && typeof(callback)=='function'){
                    callback();
                }
            }
           
        })
    }

    $.when(
            $.getScript("libs/swiper/idangerous.swiper-2.0.min.js"),
            $.getScript("libs/swiper/idangerous.swiper.3dflow-2.0.js"),
            $.Deferred(function( deferred ){
                prepareData(function(){
                    $( deferred.resolve );
                })

            })
        ).done(function(){

            var initSwiper=function(){
                var container=$(".swiper-container");
                var init=function(){

                    var resetContainer=function(){
                        container.width($("#mainContent").width());
                    }

                    resetContainer();
                    var mySwiper = container.swiper({
                        //Your options here:
                        mode:'horizontal',
                        speed:750,
                        autoplay:5000,
                        loop: true,
                        tdFlow: {
                            rotate : 50,
                            stretch :40,
                            depth: 300,
                            modifier : 1,
                            shadows : true
                        }
                    });
                    window.onresize=function(){
                        resetContainer();
                        mySwiper.resizeFix();
                    }

                };
                setTimeout(init,200);

                container.on("swiperight",function(evt){
                    evt.stopPropagation();
                });
            }

            initSwiper();




        }
    );



})



//$(document).on("touchmove",function(evt){
//    evt.preventDefault();
//});
//$(document).on("touchmove",".scrollable",function(evt){
//    evt.stopPropagation();
//});
//var scrollableHeightchange=function(){
//    try{
//    var target=$(".scrollable");
//    var maxHeight=$(window).height();
//    var headerHeight=$("header").height();
//    target.height(maxHeight-headerHeight-80);
//    }catch (e){}
//
//};
//
//$(window).on('orientationchange resize',scrollableHeightchange);
//$(document).on("pageshow","div:jqmData(role='page')",scrollableHeightchange);
