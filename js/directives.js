app.directive("templarlink",['$location', function(){
    return {
        restrict: 'A',
        link: function (scope,element,attrs) {
            element.bind("vclick",function(){
                var href=attrs.templarlink;
                scope.linkTo(href);
            })
        }
    }
}]);