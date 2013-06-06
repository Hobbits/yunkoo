$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!
    $.support.cors=true;
    $.mobile.allowCrossDomainPages = true;
});

var app = angular.module("app", []);
app.config(function($locationProvider) {
    $locationProvider.html5Mode(false);
});

app.config(function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login.html',
        jqmOptions: {transition: 'slideup'},
        onActivate:"prefill()",

    }).
        when('/', {
            templateUrl: '#pagemain',
            jqmOptions: {transition: 'slidedown'},

        }).
        otherwise({redirectTo:"/"});

});




