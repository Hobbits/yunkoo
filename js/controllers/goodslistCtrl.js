app.controller("goodslistCtrl", function ($scope,AJAX,$location,userInfo,shopInfo,$pop,$waitDialog) {
    $scope.logobaseURL=appConfig.logobaseURL;


    $scope.preget=function(){

        var shopid=shopInfo.get("shop_id");
        if(shopid){
            AJAX({
                bCall:function(){
                    $waitDialog.show("正在同步列表...");
                },
                url: appConfig.goodListURL,
                p:{'shopid':shopid},
                sCall: function (d) {
                    if(d.status=="ok"){
                        var data= d.result;
                        if(!data.goods_thumb){
                            $scope.default_thumb=shopInfo.get("shop_logo");
                        }
                        console.log(data);
                        $scope.goodList= data;
                    }else{
                        $pop.open(d.result);
                    }

                },
                cCall:function(){$waitDialog.hide();}
            })
        }else{
            alert("您还没创建店铺!");
            $location.path("/shop");
        }


    }

})
