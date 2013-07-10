app.controller("rootC", function (dataChannel,$scope,flashTip,userInfo,$history,$location,$pop,AJAX,$rootScope) {

//    $rootScope.linkTo=function(str){
//        $location.url(str);
//    }
    $scope.closepop=function(){
        $pop.close();
    }


    $rootScope.openPanel=function(){
        $.mobile.activePage.find(".myPanel").panel("toggle");
    }

    $rootScope.fav=function(target,idnum){
        var pram={};
        if(target=="s"){
            pram.shopid=idnum;
        }else{
            pram.goodid=idnum;
        }


        AJAX({
            url:appConfig.addFav,
            p:pram,
            sCall:function(d){
                if(d.status=="ok"){
                    flashTip.show(d.result,1000,{
                        width:'50%',
                        height:'8em',
                        color:'white'
                    });
                }
            }
        })
    }

    $rootScope.logobaseURL=appConfig.logobaseURL;


    $scope.$on("appLive", function(event, message){
        try{
            console.log("appLive:",message);
            if(message && message.newChatMsg){
                $('.newMsg .ui-li-count').text(message.newChatMsg);
                if(message.newChatMsg>0){
                    $.mobile.activePage.addClass("panelShadow");
                }else{
                    $.mobile.activePage.removeClass("panelShadow");
                }

            }
        }catch(e){}


    });



});
