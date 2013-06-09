var app = angular.module("app", []);
app.config(function($locationProvider) {
    $locationProvider.html5Mode(false);
});

app.config(function($routeProvider) {
    $routeProvider.
        when('/shop', {
            templateUrl: '#pageshop',
            jqmOptions: {transition: 'slide'},
            onActivate:"preGet()",
            resolve:validateLogon
        }).
        when('/reg', {
            templateUrl: '#pageReg',
            jqmOptions: {transition: 'flip'}
        }).
        when('/login', {
        templateUrl: '#pagelogin',
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
            $location.path('/login');
            deferred.reject();

        }


        return deferred.promise;
    }
};

