app.factory('userInfo', function(localStorageService){
    return {
        get:function(){
            var userInfo = localStorageService.get('userInfo');
            if(userInfo && userInfo.userid>0){
                return userInfo;
            }else{
                return false;
            }
        }
    }


});


app.factory('JSONP', function($http){
    /*url p bCall sCall eCall*/
      var send=function(o){
          if(typeof(o.bCall)=="function"){o.bCall();}
          $http({
              method:"JSONP",
              url: o.url+'&callback=JSON_CALLBACK',
              params: o.p || null
          }).success(function(data, status, headers, config){
                  if(typeof(o.sCall)=="function"){
                    o.sCall(data,status, headers, config);
                  }
              }).error(function(data,status, headers, config){
                  if(typeof(o.eCall)=="function"){
                    o.eCall(data,status, headers, config);
                  }
              });

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


function getimageBase64(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            //the only jQuery line.  All else is the File API.
            var imagecode=e.target.result;
            template.logo=imagecode;
            return imagecode;
        }
        reader.readAsBinaryString(input.files[0]);
    }
}