app.controller("rootC", function ($scope,$history,$location,$pop,$rootScope) {

//    $rootScope.linkTo=function(str){
//        $location.url(str);
//    }
    $scope.closepop=function(){
        $pop.close();
    }


    $rootScope.openPanel=function(){
        $.mobile.activePage.find(".myPanel").panel("toggle");
    }

});
