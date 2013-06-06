var app = angular.module("app", []);
app.config(function($locationProvider) {
    $locationProvider.html5Mode(false);
});

app.config(function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: '#pagelogin',
        jqmOptions: {transition: 'slideup'},
        onActivate:"prefill()",
        resolve:wait
    }).
        when('/', {
            templateUrl: '#pagemain',
            jqmOptions: {transition: 'slidedown'},
            resolve:wait
        }).
        otherwise({redirectTo:"/"});

});

var wait = {
    a: function ($q,$rootScope) {
        var deferred = $q.defer();
        deferred.resolve();
        return deferred.promise;
    }
};



