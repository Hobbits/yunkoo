$(document).on("vclick",".fakeSubmit",function(){
    $.mobile.activePage.find(".trueSubmit").click();
});


$(document).on("swiperight","div:jqmData(role='page')",function(evt){
    $.mobile.activePage.find(".myPanel").panel("open");
});

$(document).on("vclick",".gallery li",function(e){
    var choseLi=$(this);
    $(".gallery li").removeClass("cur");
    choseLi.addClass("cur");
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