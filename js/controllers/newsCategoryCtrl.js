app.controller("newsCategoryCtrl", function ($scope,$routeParams,$pop,$waitDialog,$location,AJAX) {
 

//获取新闻分类
$scope.showNewsCategory = function(){
    AJAX({
        url : appConfig.newsCategoryURL,
        sCall : function(d){
            if(d.status == 'ok'){
                $scope.newsCategory = d.result;
            } else{
                $pop.open(d.result);
            }
        }
    })
}


var getcatid = function(){
    return $routeParams.cat_id;
}

//获取新闻列表
$scope.showNewslist = function(){
    AJAX({
        url : appConfig.newslistURL,
        p : {'cat_id' : getcatid()},
        sCall : function(d){
            if(d.status == 'ok'){
                $scope.newslist = d.result;
                $scope.headerName = d["addon"]["categoryname"];
            } else{
                $pop.open(d.result);
            }
        }
    })
    
}

 $scope.getNewsDetial=function(){
      var a_id=$routeParams.articleid;
     AJAX({
         url:appConfig.newsInfoURL,
         p:{article_id:a_id},
         bCall:function(){$waitDialog.show("加载新闻...")},
         sCall:function(d){
             if(d && d.status=="ok"){
                 $scope.arti={
                     title: d.result.title ||"无内容",
                     content:d.result.content ||"无内容",
                     add_time:d.result.add_time,
                     author:d.result.admin_name
                 }
             }
         },
         cCall:function(){$waitDialog.hide();}
     })
 }


    $scope.newsShare=function(){
//        AJAX({
//            url:appConfig.api.url.sinaShare,
//            method:"POST",
//            p:{
//                access_token:appConfig.api.keys.sinaKey,
//                status:"HeyHey!"
//            },
//            sCall:function(d){
//                console.log(d);
//            }
//        })

        $("#sharePop").popup("open");


//        (function(s, d, e, r, l, p, t, z, c) {
//            var f = 'http://v.t.sina.com.cn/share/share.php?appkey=真实的appkey',
//                u = z || d.location,
//                p = ['&url=', e(u), '&title=', e(t || d.title), '&source=', e(r), '&sourceUrl=', e(l), '&content=', c || 'gb2312', '&pic=', e(p || '')].join('');
//            function a() {
//                link= [f, p].join('');
//                console.log(link);
//                $("#sharePop").popup("open");
//                $("#shareWindow")[0].src= link;
//            };
//            a();
//        })(screen, document, encodeURIComponent, '', '', '图片链接|默认为空', '标题|默认当前页标题', 'http://www.baidu.com', '页面编码gb2312|utf-8默认gb2312')
//




    }







})

