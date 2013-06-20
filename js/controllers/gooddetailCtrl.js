app.controller("gooddetailCtrl", function ($scope,$routeParams,$window,AJAX,userInfo,shopInfo,$pop,$waitDialog) {
    $scope.logobaseURL=appConfig.logobaseURL;
    $scope.goodInfo={};
    $scope.goodid=0;
    $scope.getitemInfo=function(){

        var getInfo=function(itemID){
            AJAX({
                bCall:function(){
                    $waitDialog.show("获取商品信息...");
                },
                url: appConfig.goodInfoURL,
                p:{'goodsid':itemID},
                sCall: function (d) {
                    if(d.status=="ok"){
                       console.log(d);
                    }else{
                        $pop.open(d.result);
                    }

                },
                cCall:function(){$waitDialog.hide();}
            })
        }


        var shopid=shopInfo.get("shop_id");
        if(shopid){
            if($routeParams.goodid){
                $scope.goodid=$routeParams.goodid;
                getInfo($scope.goodid);
            }else{
                $window.history.back();
            }
        }else{
            alert("您还没创建店铺!");
            $location.path("/shop");
        }
    }




})
