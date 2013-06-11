app.controller("rootC", function ($scope,$history,$location,$pop) {
    $scope.pannelIsOpen=false;

    $scope.linkTo=function(str){
        $location.url(str);
    }
    $scope.closepop=function(){
        $pop.close();
    }


    $scope.openPanel=function(str){
        $(str).panel("toggle");
    }

});
