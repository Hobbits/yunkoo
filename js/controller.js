app.controller("mainCtrl", function ($scope,localStorageService,userInfo) {
    $scope.pre=function(){
        if(userInfo){
            $scope.loginBtnShow=false;
            $scope.mainpageContent="你已经登录。"
        }else{
            $scope.mainpageContent="你还没登录。"
        }
    }
});

app.controller("loginCtrl", function ($scope,$rootScope, localStorageService,$http,$element) {
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
            $.ajax({
                url: appConfig.loginURL,
                dataType: 'jsonp',
                data: p,
                jsonp: "callback",
                beforeSend:function(){
                    changeBtn("正在提交...",false);
                },
                success: function(d) {

                    if(d && d.userid>0){
                        localStorageService.add("userInfo",d);

                        changeBtn("登录成功...",false);
                        setTimeout(function(){
                            window.location.href="index.html";
                        },500);

                    }else{
                        $scope.$apply(function(){
                            $scope.pop.content = '帐号或密码错误!';

                            changeBtn("请修正后提交",false);
                        })
                    }

                },
                error:function(){
                    changeBtn("提交",false);

                },
                timeout: 9000
            });



            if ($scope.remember == "on") {
                localStorageService.add('userLogininfo', p);
            } else {
                localStorageService.remove('userLogininfo');
            }
        } else {
            $scope.pop.content = '请填完!';
        }

    }

});

app.controller("regCtrl", function ($scope,$element,localStorageService,userInfo) {
    $scope.comparePsw=function(a,b){
        if(a && b && a!=b){
            return "两次输入的密码不一致，请核对"
        }else{
            return null;
        }
    };

    $scope.regSubmit=function(){
        var regp=$scope.regprams;

        var btn=$($element).find('form :submit');
        var changeBtn=function(text,bol){
            $scope.subBtn={isOff:bol,submitText:text};
            btn.trigger('create');
        };

        $.ajax({
            url: appConfig.regURL,
            dataType: 'jsonp',
            data: regp,
            jsonp: "callback",
            beforeSend:function(){
                changeBtn("正在提交...",false);
            },
            success: function(d) {

                if(typeof(d)=="object" && d.userid>0){
                    localStorageService.add("userLogininfo",regp);
                    changeBtn("注册成功...",false);
                    setTimeout(function(){
                        window.location.href="index.html#!/login";
                    },500);

                }else{
                    var t= '注册失败!';
                    if(d==2){t = '用户名已经被其他人使用';}
                    $scope.$apply(function(){
                        $scope.pop.content = t;
                        changeBtn("请修正后提交",false);
                    })
                }

            },
            error:function(){
                changeBtn("提交",false);

            },
            timeout: 9000
        });
    }
});