app.controller("accCtrl", function ($scope,$pop,userInfo) {
    $scope.uInfo=userInfo.get();
});