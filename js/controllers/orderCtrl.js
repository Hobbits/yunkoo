app.controller("orderCtrl", function ($scope,AJAX,$routeParams,$location,$waitDialog) {
      console.log("传入参数:",$routeParams);
    $scope.orderInfo = {};
    $scope.unChange = {};

    $scope.orderList = {};

    $scope.getGoodid=function(){
        return $routeParams.goodid;
    }
    $scope.getStep=function(){
        return $routeParams.step;
    }

    $scope.step2get=function(){
        $scope.getPayid=function(){
            return $routeParams.payid;
        }
        console.log("PayID:",$scope.getPayid());



    }


    $scope.goNextstep=function(o){
        var oi=$scope.orderInfo;
        AJAX({
            url:"http://192.168.1.111/shop/appdo.php?act=appuserorder",
            p: {
                "order_num" : oi.order_num,
                "goods_id":$scope.getGoodid(),
                "consignee" : oi.consignee,
                "mobile" : oi.mobile,
                "address" : oi.address,
                "message":oi.usernote
            },
            sCall:function(d){
                if(d.status=="ok"){
                    var payid=d.result;
                    $location.path("/order/"+payid+"/2");
                }
//                $location.path("/order/"+$scope.getGoodid()+"/2");
//                var r = d.result;
//                console.log(r);
//                $scope.orderList.goods_name = r.goods_name;
               
            }
        })


   
    }

    $scope.prefill=function(){
        AJAX({
            url : appConfig.goodInfoURL,
            p : {'goodsid': $scope.getGoodid()},
            bCall : function(){
                $waitDialog.show("正在获取信息...");
            },
            sCall : function(data){
                console.log(data);
                var r = data.result;
                $scope.unChange.goods_name = r.name;
                $scope.unChange.goods_price = r.price;
            },
            cCall : function(){
                $waitDialog.hide();
            }
        })
    }

})
