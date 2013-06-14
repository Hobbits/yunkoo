app.factory('shopInfo', function(localStorageService,userInfo,AJAX,$waitDialog){
    return {
        refresh:function(callback){
                /*获取已经存在服务器上的店铺信息*/
                AJAX(
                    {
                        url:appConfig.shop_get,
                        p:{'shopid':userInfo.get().userid},
                        bCall:function(){
                            $waitDialog.show("正在获取已有的店铺信息...");
                        },
                        sCall:function(d){
                              if(typeof(callback)=="function"){callback(d);}
                        },
                        cCall:function(){
                            $waitDialog.hide();
                        }
                    }
                );
            },
        set:function(o){
            localStorageService.add('shop_info',o);
        },
        get:function(str){
            var shopInfo = localStorageService.get('shop_info');
            if(shopInfo && shopInfo.shop_id>0){
                if(str){
                    return shopInfo[str];
                }else{
                    return shopInfo;
                }
            }else{
                return false;
            }
        },
        delete:function(){
            localStorageService.remove('shopInfo');
        }
    }
});

app.factory('userInfo', function(localStorageService){
    return {
        get:function(){
            var userInfo = localStorageService.get('userInfo');
            if(userInfo && userInfo.userid>0){
                return userInfo;
            }else{
                return false;
            }
        },
        delete:function(){
            localStorageService.remove('userInfo');
        }
    }
});


app.factory('AJAX', function($http){
    /*url p bCall sCall eCall*/
      var send=function(o){
          var sendmethod=o.method || "JSONP";
          if(typeof(o.bCall)=="function"){o.bCall();}
          if(sendmethod=="JSONP"){
              o.url= o.url+'&callback=JSON_CALLBACK';
              $http({
                  method: sendmethod,
                  url: o.url,
                  params: o.p || null
              }).success(function(data, status, headers, config){
                      if(typeof(o.sCall)=="function"){
                        o.sCall(data,status, headers, config);
                      };
                      if(typeof(o.cCall)=="function"){
                          o.cCall(data,status, headers, config);
                      };
                  }).error(function(data,status, headers, config){
                      if(typeof(o.eCall)=="function"){
                        o.eCall(data,status, headers, config);
                      };
                      if(typeof(o.cCall)=="function"){
                          o.cCall(data,status, headers, config);
                      };
                  });
          }else{
              /*非JSONP*/
              $.ajax({
                  type: sendmethod,
                  url: o.url,
                  data: o.p || null,
                  dataType:"JSON",
                  success: function(d){
                      if(typeof(o.sCall)=="function"){o.sCall(d);}
                  },
                  error:function(d){
                      if(typeof(o.eCall)=="function"){o.eCall(d);}
                  },
                  complete:function(d){
                      if(typeof(o.cCall)=="function"){o.cCall(d);}
                  }


              });
          }
      };
        return send;
});


app.factory('Obj2Arr', function(){
    return function(o,name1,name2){
        if(typeof(o)=="object" && typeof(name1)=="string" && typeof(name2)=="string"){
             var arr=[];
            for(i in o){
                var thiso={};
                thiso[name1]=i;
                thiso[name2]=o[i];
                arr.push(thiso);
            }
            return arr;
        }
    };
});


app.factory('$pop', function($window){
    return {
         target:$("#popup"),
        targettext:$("#poptext"),
        open:function(str){

            this.targettext.html(str);
            this.target.show();
            this.target.popup();
            this.target.trigger("create");
            this.target.popup("open");
        },
        close:function(){
            this.target.popup("close");
            this.target.hide();
        }
    }


});


function getimageBinaryString(input,callback) {

    if (input.files && input.files[0]) {
        var f=input.files[0];
        if (!f.type.match('image.*')) {
            return null;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            //the only jQuery line.  All else is the File API.
            var imagecode=e.target.result;
            if(typeof(callback)=="function"){
                callback({
                    code:imagecode,
                    type: f.type,
                    name: f.name,
                    size: f.size
                });
            }
        }
        reader.readAsBinaryString(f);
    }
}

function getimageDataURL(input,callback) {
    if (input.files && input.files[0]) {
        var f=input.files[0];
        if (!f.type.match('image.*')) {
            return null;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var imagecode=e.target.result;
            if(typeof(callback)=="function"){
                callback({
                    code:imagecode,
                    type: f.type,
                    name: f.name,
                    size: f.size
                });
            }
        }
        reader.readAsDataURL(f);
    }

}

