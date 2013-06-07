var app = angular.module("app", []);
app.config(function($locationProvider) {
    $locationProvider.html5Mode(false);
});

app.config(function($routeProvider) {
    $routeProvider.
        when('/reg', {
            templateUrl: '#pageReg',
            jqmOptions: {transition: 'slideup'}
        }).
        when('/login', {
        templateUrl: '#pagelogin',
        jqmOptions: {transition: 'slideup'},
        onActivate:"prefill()"
    }).
        when('/', {
            templateUrl: 'main.html',
            jqmOptions: {transition: 'slidedown'},
            onActivate:"pre()"
        }).
        otherwise({redirectTo:"/"});

});




