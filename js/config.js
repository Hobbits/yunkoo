var appConfig={
    loginURL:"http://192.168.1.111/shop/appdo.php?act=applogin",
    regURL:"http://192.168.1.111/shop/appdo.php?act=appregister",
    newShop:"http://192.168.1.111/shop/appdo.php?act=appshopcreate"

}

var head = document.getElementsByTagName('head')[0];
    var base = document.createElement('base')
    base.href = window.location.href;
    head.appendChild(base);