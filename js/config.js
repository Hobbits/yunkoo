var appConfig={
    loginURL:"http://192.168.1.111/shop/appdo.php?act=applogin",
    regURL:"http://192.168.1.111/shop/appdo.php?act=appregister",
    shop_newShop:"http://192.168.1.111/shop/appdo.php?act=appshopcreate",/*修改店铺*/
    shop_area:"http://192.168.1.111/shop/appdo.php?act=applocation",/*地区获取*/
    shop_ind:"http://192.168.1.111/shop/appdo.php?act=appbusiness"/*所在行业*/

}

var template={
    logo:{}
}
//
//<script>
//window.isPhone = !document.URL.match(/^https?:/);
//if (window.isPhone) {
//    var head = document.getElementsByTagName('head')[0];
//    var base = document.createElement('base')
//    base.href = window.location.href;
//    head.appendChild(base);
//    }
//</script>