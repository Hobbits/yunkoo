app.factory('userInfo', function(localStorageService){
    var userInfo = localStorageService.get('userInfo');
    if(userInfo && userInfo.userid>0){
        return userInfo;

    }else{
        return false;
    }
});