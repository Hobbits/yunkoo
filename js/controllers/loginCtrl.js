app.controller("loginCtrl", function ($scope,$rootScope,$window,$timeout,$location,localStorageService,AJAX,$element,$pop) {
    $scope.prefill = function () {
        var userLogininfo = localStorageService.get('userLogininfo');
        if (userLogininfo) {
            $scope.userprams = userLogininfo;
        }

    };

    $scope.submit = function () {
        var p = this.userprams;

        var btn=$($element).find('form :submit');
        var changeBtn=function(text,bol){
            $scope.subBtn={isOff:bol,submitText:text};
            btn.trigger('create');
        };

        if (p.name && p.psw) {
            AJAX({
                url: appConfig.loginURL,
                p: p,
                bCall:function(){changeBtn("正在提交...",false);},
                sCall: function (d) {

                    if(d && d.userid>0){
                        localStorageService.add("userInfo",d);
                        changeBtn("登录成功...",false);
                        $timeout(function(){
                            $location.path('/');

                        },500);
                    }else{
                        $scope.$apply(function(){
                            $pop.open('帐号或密码错误!');
                            changeBtn("请修正后提交",false);
                        })
                    }
                },
                eCall: function () {
                    changeBtn("提交",false);
                }
            });


            if ($scope.remember == "on") {
                localStorageService.add('userLogininfo', p);
            } else {
                localStorageService.remove('userLogininfo');
            }
        } else {

            $pop.open('请填完!');
        }

    }

});