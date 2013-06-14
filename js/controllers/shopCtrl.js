app.controller("shopCtrl",function($scope,AJAX,$location,Obj2Arr,localStorageService,userInfo,shopInfo,$waitDialog,$pop,$timeout){
    $scope.provList={};$scope.ind1list={};
    $scope.shopPrams={};

    var getListIndex=function(arr,idname,id){
        for(index in arr){
            if(arr[index][idname]==id){
                return index;
            }
        }
        return -1;
    };

    $scope.preGet=function(){


        var aftergetShopinfo=function(d){
            console.log(d);
            if(d==-1){return}/*没店铺*/


            /*TODO 预先给表单赋值*/
            shopInfo.set(d);

            $scope.shopPrams['shopname']= d.shop_name;
            $scope.shopPrams['introduction']= d.shop_intro;
            $scope.shopPrams['management']= d.shop_management;
            $scope.shopPrams['address']= d.shop_address;
            $scope.shopPrams['contact']= d.shop_contact;
            $scope.shopPrams['email']= d.shop_email;
            $scope.shopPrams['tel']= d.telphone;
            $("#s_shoppic img").prop({"src": appConfig.logobaseURL+d.shop_logo})

            var provIndex=getListIndex($scope.provList,"provID",d.shop_province);
            if(provIndex>0){
                $scope.shopPrams.prov = $scope.provList[provIndex];
                $scope.getCityList(d.shop_city);
            }

            var mcatIndex=getListIndex($scope.ind1List,"ind1ID",d.shop_maincategories);
            if(mcatIndex>=0){
                $scope.shopPrams.ind1 = $scope.ind1List[mcatIndex];
                $scope.getin2List(d.shop_categories);
            }
        };


//        var getShopInfo=function(){
//            /*获取已经存在服务器上的店铺信息*/
//            AJAX(
//                {
//                    url:appConfig.shop_get,
//                    p:{'shopid':userInfo.get().userid},
//                    bCall:function(){
//                        $waitDialog.show("正在获取已有的店铺信息...");
//                    },
//                    sCall:function(d){
//
//
//                    },
//                    cCall:function(){
//                        $waitDialog.hide();
//                    }
//                }
//            );
//        };




        var done = 0;
        function checkIfDone() {
            done++;
            if (done==2){
                shopInfo.refresh(aftergetShopinfo);
            };
        }

        /*与获取省*/
        var prolist=localStorageService.get('shop_province');
        if (!prolist) {
            AJAX({
                url: appConfig.shop_area,
                sCall: function (d) {
                    $scope.provList=Obj2Arr(d,"provID","provName");
                    localStorageService.add("shop_province", $scope.provList);
                    checkIfDone();
                }
            })
        }else{
            $scope.provList=prolist;
            $("#area").trigger("create");
            checkIfDone();
        };


        /*与获取行业*/
        AJAX({
            url: appConfig.shop_ind,
            sCall: function (d) {
                $scope.ind1List=Obj2Arr(d,"ind1ID","ind1Name");
                //$scope.shopPrams.ind1 = $scope.ind1List[0];
                checkIfDone();
            },
            eCall:function(){
                alert("获取行业列表失败")
            }
        })

    };



    $scope.getCityList=function(cityID){
        var cityID=cityID||0;
        var aid=$scope.shopPrams.prov.provID;
        var cityL= localStorageService.get("shop_city_"+aid);

        var changeCity=function(){
            var index=getListIndex($scope.cityList,"cityID",cityID);
            if(index>0){
            $scope.shopPrams.city = $scope.cityList[index];
            }else{
                $scope.shopPrams.city = $scope.cityList[0];
            }
        };

        if(!cityL){
            AJAX({
                url:appConfig.shop_area,
                p:{area_id:aid},
                sCall:function(d){
                    $scope.cityList=Obj2Arr(d,"cityID","cityName");
                    localStorageService.add("shop_city_"+aid, $scope.cityList);
                    changeCity();

                },
                eCall:function(){
                    alert("获取城市列表失败")
                }
            })
        }else{
            $scope.cityList=cityL;
            changeCity();
        }
    };

    $scope.getin2List=function(lv2ID){
        var lv2ID=lv2ID||0;

        var catid=$scope.shopPrams.ind1.ind1ID;
        var changeCat=function(){
            var index=getListIndex($scope.shopPrams.ind2,"ind2ID",lv2ID);
            $scope.shopPrams.ind2 = $scope.ind2List[0];
        };

        AJAX({
            url:appConfig.shop_ind,
            p:{cat_id:catid},
            sCall:function(d){
                $scope.ind2List=Obj2Arr(d,"ind2ID","ind2Name");
                changeCat();

            },
            eCall:function(){
                alert("获取行业列表失败")
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
            province: shopPrams.prov.provID || null,
            city: shopPrams.city.cityID || null,
            categories: shopPrams.ind2.ind2ID,
            management: shopPrams.management,
            introduction: shopPrams.introduction,
            tel: shopPrams.tel,
            logo: window.template.logo.u || null,
            imageType:window.template.logo.type ||null,
            address: shopPrams.address
        };
        console.log(p);

//        $http
//            .post(appConfig.shop_newShop, {})
//            .success(function(data) {console.log(data)})
//            .error(function(data) { console.log(data); });
        var btn=$("#shopSub");
        var changeBtn=function(text,bol){
            $scope.subBtn={isOff:bol,submitText:text};
            btn.trigger('create');
        };

        AJAX({
            url:appConfig.shop_newShop,
            p:p,
            method:"POST",
            bCall:function(){
                  $waitDialog.show("正在提交...");
                changeBtn("提交中",true);

            },
            sCall:function(d){
                if(typeof(d)=="object"){
                    $pop.open( '提交成功!');
                    shopInfo.set(d);

                    template.logo={};
                    $timeout(function(){
                        $pop.close();
                        $location.path('/');
                    },1000);
                }else if(d==2){
                    $pop.open( '店铺重名!');
                    changeBtn("提交",false);

                }else if(d==-1){
                    $pop.open( '添加失败!');
                    changeBtn("提交",false);
                }
            },
            eCall:function(){
                $pop.open( '<p>提交失败，</p><p>文件过大,</p><p>或服务器配置有问题</p>');
                changeBtn("提交",true);
            },
            cCall:function(){
                $waitDialog.hide();
            }
        })

    }


});

$(document).on("vclick","#s_shoppic",function(){
    $("#s_shoppic_false").click();
})

