app.controller("orderCtrl", function ($scope,AJAX,$routeParams) {
      console.log("传入参数:",$routeParams);

    $scope.getGoodid=function(){
        return $routeParams.goodid;
    }
    $scope.getStep=function(){
        return $routeParams.step;
    }


    $scope.goNextstep=function(o){
        console.log($scope.orderInfo);
    }
})