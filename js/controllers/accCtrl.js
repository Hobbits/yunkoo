app.controller("accCtrl", function ($scope,$pop,userInfo,$location,logout) {
    $scope.preRun=function(){
        $scope.uInfo=userInfo.get();

    }



    $scope.logout=function(){
        logout('/');
    }
});