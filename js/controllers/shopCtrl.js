app.controller("shopCtrl",function($scope,JSONP,$location,Obj2Arr,localStorageService,userInfo,$waitDialog,$pop,$timeout){
    $scope.provList=null;$scope.ind1list=null;
    $scope.preGet=function(){
        /*与获取省*/
        var prolist=localStorageService.get('shop_province');
        if (!prolist) {
            JSONP({
                url: appConfig.shop_area,
                sCall: function (d) {
                    $scope.provList=Obj2Arr(d,"provID","provName");
                    localStorageService.add("shop_province", $scope.provList);

                }
            })
        }else{
            $scope.provList=prolist;
            $("#area").trigger("create");
        };


        /*与获取行业*/

        JSONP({
            url: appConfig.shop_ind,
            sCall: function (d) {
                $scope.ind1List=Obj2Arr(d,"ind1ID","ind1Name");
                //$scope.shopPrams.ind1 = $scope.ind1List[0];
            }
        })
    };

    $scope.getCityList=function(){
        var aid=$scope.shopPrams.prov.provID;
        var cityL= localStorageService.get("shop_city_"+aid);
        if(!cityL){
            JSONP({
                url:appConfig.shop_area,
                p:{area_id:aid},
                sCall:function(d){
                    $scope.cityList=Obj2Arr(d,"cityID","cityName");
                    localStorageService.add("shop_city_"+aid, $scope.cityList);
                    $scope.shopPrams.city = $scope.cityList[0];
                }
            })
        }else{
            $scope.cityList=cityL;
            $scope.shopPrams.city = $scope.cityList[0];
        }
    };

    $scope.getin2List=function(){
        var catid=$scope.shopPrams.ind1.ind1ID;
        JSONP({
            url:appConfig.shop_ind,
            p:{cat_id:catid},
            sCall:function(d){
                $scope.ind2List=Obj2Arr(d,"ind2ID","ind2Name");
                $scope.shopPrams.ind2 = $scope.ind2List[0];
            }
        });
    }


    $scope.shopSubmit=function(){
        var logoImg=document.getElementById("logoImg");

        var  shopPrams=$scope.shopPrams;

        var p = {
            userid:userInfo.get().userid,
            shopname: shopPrams.shopname,
            email: shopPrams.email,
            contact: shopPrams.contact,
            province: shopPrams.prov,
            city: shopPrams.city,
            categories: shopPrams.ind2,
            management: shopPrams.management,
            introduction: shopPrams.introduction,
            tel: shopPrams.tel,
            logo: window.template.logo,
            address: shopPrams.address
        };
         console.log(p);
        $.post(appConfig.shop_newShop, p,
            function(data){
                alert("成功")
            }, "json");

//        JSONP({
//            url:appConfig.shop_newShop,
//            p:p,
//            bCall:function(){
//                  $waitDialog.show("正在提交...");
//                $scope.subBtn.isOff=true;
//            },
//            sCall:function(d){
//                $waitDialog.hide();
//                if(d==1){
//                $pop.open( '提交成功!');
//                $timeout(function(){
//                    $pop.close();
//                    $location.path('/');
//                },1000);
//
//                }else if(d==2){
//                    $pop.open( '店铺重名!');
//                }
//            }
//        })
//
    }


});

var changeFile=function(target){
    template.logo=getimageBase64(target);
}

