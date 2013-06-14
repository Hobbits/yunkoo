app.controller("accCtrl", function ($scope,$pop,userInfo,shopInfo,$location) {
    $scope.uInfo=userInfo.get();

    $scope.logout=function(){
        userInfo.delete();
        shopInfo.delete();
        $location.path('/');
    }
});