app.controller("accCtrl", function ($scope,$pop,userInfo,shopInfo,$location,localStorageService) {
    $scope.uInfo=userInfo.get();

    $scope.logout=function(){
        userInfo.delete();
        shopInfo.delete();

        try{
            var uinfo={"name":userInfo.get().username,"psw":""};
            localStorageService.add('userLogininfo',uinfo);
        }catch(e){}

        $location.path('/');
    }
});