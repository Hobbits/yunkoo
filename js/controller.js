app.controller("loginCtrl", function ($scope, localStorageService,$http) {
    $scope.prefill = function () {
        var userInfo = localStorageService.get('userInfo');
        console.log(userInfo);
        if (userInfo) {
            $scope.userprams = userInfo;
        }
    }

    $scope.submit = function () {
        var p = this.userprams;
        if (p.name && p.psw) {
            $http({
                url: appConfig.loginURL,
                method: "JSONP",
                data: p
            }).success(function(data, status, headers, config) {
                    console.log(data);
                }).error(function(data, status, headers, config) {

                });

            $scope.pop.content = '输入的JSON数据：' + JSON.stringify(p);

            if ($scope.remember == "on") {
                localStorageService.add('userInfo', p);
            } else {
                localStorageService.remove('userInfo');
            }
        } else {
            $scope.pop.content = '请填完!';
        }

    }

});