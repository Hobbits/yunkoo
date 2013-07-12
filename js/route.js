
var app = angular.module("app", []);


app.config(function($locationProvider,$httpProvider) {
    $locationProvider.html5Mode(false);
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
});

app.config(function($routeProvider) {
    $routeProvider.
		when('/news/:cat_id', {		
            templateUrl: 'newsCategory2.html',
            jqmOptions: {transition: 'slide'}
        }).
		when('/news', {		
            templateUrl: 'newsCategory1.html',
            jqmOptions: {transition: 'slide'}
        }).
        when('/article/:articleid', {
            templateUrl: 'newsDetail.html',
            jqmOptions: {transition: 'slide'}
        }).
        when('/searchFriend', {
            templateUrl: 'searchFriend.html',
            jqmOptions: {transition: 'slide'},
            resolve:validateLogon
        }).
		when('/buddyChat', {
            templateUrl: 'buddyChat.html',
            jqmOptions: {transition: 'slideup'},
            resolve:validateLogon
        }).
		when('/orderDetail/:payid',{
			templateUrl: 'orderDetail.html',
            jqmOptions: {transition: 'slide'},
			resolve:validateLogon
		}).
		when('/buyRev', {
			templateUrl: 'orderlist.html',
            jqmOptions: {transition: 'slide',reverse:true},
			resolve:validateLogon
		}).
		when('/buy', {
			templateUrl: 'orderlist.html',
            jqmOptions: {transition: 'slideup'},
			resolve:validateLogon
		}).
		when('/sell', {
			templateUrl: 'orderlistSell.html',
            jqmOptions: {transition: 'slide'},
			resolve:validateLogon
		}).
        when('/order/:payid/2', {
            templateUrl: 'order2.html',
            jqmOptions: {transition: 'slide'},
            resolve:validateLogon
        }).
        when('/order/:goodid/1', {
            templateUrl: 'order1.html',
            jqmOptions: {transition: 'slide'},
            resolve:validateLogon
        }).
        when('/fav/:type', {
            templateUrl: 'fav.html',
            jqmOptions: {transition: 'slide'},
            resolve:validateLogon
        }).
        when('/myqrcode', {
            templateUrl: 'myqrcode.html',
            jqmOptions: {transition: 'slide'},
            resolve:hasShop
        }).
        when('/near', {
            templateUrl: 'nearShop.html',
            jqmOptions: {transition: 'slide'}
        }).
        when('/filterlast/:object', {
            templateUrl: 'filterlastShow.html',
            jqmOptions: {transition: 'slide'}
        }).
        when('/filterlv2/:object', {
            templateUrl: 'filterlv2.html',
            jqmOptions: {transition: 'slide'}
        }).
        when('/filterlv1/:object', {
            templateUrl: 'filterlv1.html',
            jqmOptions: {transition: 'slide'}
        }).
        when('/search/:object', {
            templateUrl: 'search.html',
            jqmOptions: {allowSamePageTransition: true,transition: 'flip'}
        }).
        when('/uploadmore/:goodid', {
            templateUrl: 'uploadmore.html',
            jqmOptions: {transition: 'slideup'}
        }).
        when('/gooddetail/:goodid/gallery', {
            templateUrl: 'goodgallery.html',
            jqmOptions: {transition: 'slide'}
        }).
        when('/gooddetail/:goodid/detailRev', { /*翻转动画反向*/
            templateUrl: 'gooddetail.html',
            jqmOptions: {transition: 'slide',reverse:true}
        }).
        when('/gooddetail/:goodid/detail', {
            templateUrl: 'gooddetail.html',
            jqmOptions: {transition: 'slide'}
        }).
        when('/addgood', {
            templateUrl: 'addgood.html',
            jqmOptions: {transition: 'slideup'},
            resolve:validateLogon
        }).
        when('/goods', {
            templateUrl: 'goodslist.html',
            jqmOptions: {transition: 'slideup'},
            resolve:hasShop
        }).
        when('/dialogue:targetName/:targetid/', {
            templateUrl: 'dialogue.html',
            jqmOptions: {transition: 'slideup'},
            resolve:validateLogon
        }).
        when('/chatlist', {
            templateUrl: 'chatlist.html',
            jqmOptions: {transition: 'slideup'},
            resolve:validateLogon
        }).
        when('/account', {
            templateUrl: 'account.html',
            jqmOptions: {transition: 'slideup'},
            resolve:validateLogon
        }).
        when('/shopGuest/:shopid/goods', {
            templateUrl: 'shopGuestviewgoods.html',
            jqmOptions: {transition: 'slide'}
        }).
        when('/shopGuest/:shopid/infoRev', {/*动画反向*/
            templateUrl: 'shopGusetviewinfo.html',
            jqmOptions: {transition: 'slide',reverse:true}
        }).
        when('/shopGuest/:shopid/info', {
            templateUrl: 'shopGusetviewinfo.html',
            jqmOptions: {transition: 'slide'}
        }).
        when('/shop', {
            templateUrl: 'shop.html',
            jqmOptions: {transition: 'none'},
            resolve:validateLogon
        }).
        when('/reg', {
            templateUrl: 'reg.html',
            jqmOptions: {transition: 'flip'}
        }).
        when('/login:code', {
        templateUrl: 'login.html',
        jqmOptions: {transition: 'flip'}
    }).
        when('/', {
            templateUrl: '#pagemain',
            jqmOptions: {transition: 'none'}
        }).
        otherwise({redirectTo:"/"});

});


var validateLogon = {
    storge: function($q,$rootScope,userInfo,$window) {
        var deferred = $q.defer();
        if(userInfo.get()){
            deferred.resolve(userInfo.get().userid);
        }else{
            deferred.reject("notlogin");
            $window.location.replace('#!/login');
        };
        return deferred.promise;
    }
};


var hasShop = {
    get: function($q,userInfo,myshopInfo,$location) {
        var deferred = $q.defer();
        myshopInfo.refresh(
            function(d){
                if(d.status=="ok"){
                    deferred.resolve();
                }else{
                    alert("您需要先创建店铺");
                    deferred.reject("needaShop");
                    $location.path("/shop");

                }

            });
        return deferred.promise;
    }
};
