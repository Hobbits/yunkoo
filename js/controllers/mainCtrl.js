app.controller("mainCtrl", function ($scope,$location,localStorageService,userInfo) {
    $scope.pre=function(){
        if(userInfo.get()){
            $scope.loginBtnShow=false;
            $scope.mainpageContent="你已经登录。"
        }else{
            $scope.mainpageContent="你还没登录。"
        }
    };
});