angular.module('listServices', ['ngResource']).
    factory('booklist', function($resource){
        return $resource('getlist.php', {}, {
            query: {method:'JSONP', params:{}, isArray:true}
        });
    });