app.factory('geo', function ($rootScope,AJAX,$waitDialog) {
    return {
        get: function (onSuccess, onError, options) {
            navigator.geolocation.getCurrentPosition(function () {
                    var that = this,
                        args = arguments;

                    if (onSuccess) {
                        $rootScope.$apply(function () {
                            onSuccess.apply(that, args);
                        });
                    }
                }, function () {
                    var that = this,
                        args = arguments;

                    if (onError) {
                        $rootScope.$apply(function () {
                            onError.apply(that, args);
                        });
                    }
                },
                options);
        },
        getGeocoding:function(coords,cb){
             var p={
                 ak:appConfig.api.keys.baiduMap,
                 coordtype:'wgs84ll',
                 location:coords.latitude+','+coords.longitude,
                 output:'json'
             };
            AJAX({
                url:appConfig.api.url.geocodingURL,
                p:p,
                bCall:function(){
                    $waitDialog.show("解析地理位置...");
                },
                sCall:function(d){
                    if(d.status==0){
                        if(cb && typeof(cb)=="function"){
                            cb(d.result);
                        }
                    }else{
                        alert("API出错:"+d.msg);
                    }

                },
                cCall:function(){$waitDialog.hide();}
            })
        }
    }
});