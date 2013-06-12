
var app = angular.module("app", []);


app.config(function($locationProvider) {
    $locationProvider.html5Mode(false);
});

app.config(function($routeProvider) {
    $routeProvider.
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
            //deferred.reject();
            deferred.resolve();
        }


        return deferred.promise;
    }
};

