$(document).on("vclick",".fakeSubmit",function(){
    $.mobile.activePage.find(".trueSubmit").click();
});

var changeFile=function(target,typestring){
//    if(!typestring || typestring=="b"){
//        getimageBinaryString(target,function(o){
//            template.logo.b= o.code;
//        });
//    }

    if(!typestring || typestring=="u"){
        getimageDataURL(target,function(o){
            template.logo.u= o.code;
            template.logo.type= o.type;

            $("#s_shoppic img")[0].src= o.code;
            $(".shoppic i").html(o.size/1000+"KB");
        })
    }
}

$(document).on("touchmove",function(evt){
    evt.preventDefault();
});
$(document).on("touchmove",".scrollable",function(evt){
    evt.stopPropagation();
});

$(document).on("swiperight","div:jqmData(role='page')",function(evt){
    $.mobile.activePage.find(".myPanel").panel("open");
});