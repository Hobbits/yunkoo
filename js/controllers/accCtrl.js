app.controller("accCtrl", function ($scope,$pop,userInfo,shopInfo,$location,localStorageService) {
    $scope.preRun=function(){
        $scope.uInfo=userInfo.get();

    }



    $scope.logout=function(){
        try{
            var uinfo={"name":userInfo.get().username,"psw":""};
            localStorageService.add('userLogininfo',uinfo);
        }catch(e){}
        userInfo.delete();
        shopInfo.delete();

        $location.path('/');
    }
});