
var app = angular.module("app", []);


app.config(function($locationProvider,$httpProvider) {
    $locationProvider.html5Mode(false);
//    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.config(function($routeProvider) {
    $routeProvider.
        when('/addgood', {
            templateUrl: 'addgood.html',
            jqmOptions: {transition: 'slide'},
            resolve:validateLogon
        }).
        when('/chatlist', {
            templateUrl: 'chatlist.html',
            jqmOptions: {transition: 'slide'},
            resolve:validateLogon
        }).
        when('/account', {
            templateUrl: 'account.html',
            jqmOptions: {transition: 'slide'},
            resolve:validateLogon
        }).
        when('/shop', {
            templateUrl: 'shop.html',
            jqmOptions: {transition: 'slide'},
            onActivate:"preGet()",
            resolve:validateLogon
        }).
        when('/reg', {
            templateUrl: 'reg.html',
            jqmOptions: {transition: 'flip'}
        }).
        when('/login', {
        templateUrl: 'login.html',
        jqmOptions: {transition: 'flip'},
        onActivate:"prefill()"
    }).
        when('/', {
            templateUrl: '#pagemain',
            jqmOptions: {transition: 'none'},
            onActivate:"pre()"
        }).
        otherwise({redirectTo:"/"});

});


var validateLogon = {
    storge: function($q,$rootScope,userInfo,$location) {
        var deferred = $q.defer();
        if(userInfo.get()){
            deferred.resolve(userInfo.get().userid);
        }else{
            deferred.reject();
        }


        return deferred.promise;
    }
};

