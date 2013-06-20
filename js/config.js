var appConfig={
    loginURL:"http://192.168.1.111/shop/appdo.php?act=applogin",
    regURL:"http://192.168.1.111/shop/appdo.php?act=appregister",
    shop_newShop:"http://192.168.1.111/shop/appdo.php?act=appshopcreate",/*修改店铺*/
    shop_area:"http://192.168.1.111/shop/appdo.php?act=applocation",/*地区获取*/
    shop_ind:"http://192.168.1.111/shop/appdo.php?act=appbusiness",/*所在行业*/
    shop_get:"http://192.168.1.111/shop/appdo.php?act=appshopinfo",/*获取店铺信息*/
    logobaseURL:"http://192.168.1.111/shop/",/*图片baseurl*/
    goodCatURL:"http://192.168.1.111/shop/appdo.php?act=goodcategory",/*商品类别*/
    goodAddURL:"http://192.168.1.111/shop/appdo.php?act=appgoodsadd",
    goodListURL:"http://192.168.1.111/shop/appdo.php?act=appgoodslist",/*商品列表*/
    goodInfoURL:"http://192.168.1.111/shop/appdo.php?act=appgoodinfo",/*获取商品信息*/
    goodmorePicURL:"http://192.168.1.111/shop/appdo.php?act=appgoodsimg"
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