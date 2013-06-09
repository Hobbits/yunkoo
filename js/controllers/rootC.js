app.controller("rootC", function ($scope,$history,$location,$pop) {
    $scope.linkTo=function(str){
        $location.url(str);
    }
    $scope.closepop=function(){
        $pop.close();
    }
});
