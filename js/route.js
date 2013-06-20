
var app = angular.module("app", []);


app.config(function($locationProvider,$httpProvider) {
    $locationProvider.html5Mode(false);
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
});

app.config(function($routeProvider) {
    $routeProvider.
        when('/uploadmore/:goodid', {
            templateUrl: 'uploadmore.html',
            jqmOptions: {transition: 'slideup'}
        }).
        when('/gooddetail/:goodid/gallery', {
            templateUrl: 'goodgallery.html',
            jqmOptions: {transition: 'none'}
        }).
        when('/gooddetail/:goodid', {
            templateUrl: 'gooddetail.html',
            jqmOptions: {transition: 'none'}
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
        when('/shop', {
            templateUrl: 'shop.html',
            jqmOptions: {transition: 'slideup'},
            resolve:validateLogon
        }).
        when('/reg', {
            templateUrl: 'reg.html',
            jqmOptions: {transition: 'flip'}
        }).
        when('/login', {
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
    storge: function($q,$rootScope,userInfo,$location) {
        var deferred = $q.defer();
        if(userInfo.get()){
            deferred.resolve(userInfo.get().userid);
        }else{
            deferred.resolve("notlogin");
            //$location.path('/login');
        };
        return deferred.promise;
    }
};


var hasShop = {
    get: function($q,userInfo,shopInfo,$location) {
        var deferred = $q.defer();
        shopInfo.refresh(
            function(d){
                if(d.status=="ok"){
                    deferred.resolve();
                }else{
                    deferred.resolve("needaShop");
                    //$location.path("/shop");
                    alert("您需要先创建店铺");
                }

            });
        return deferred.promise;
    }
};