var servURL="http://yunku.4pu.com/";
var appConfig={
    default:{
        shopthumb:"images/shop-open-icon.png"
    },
    bannerURL:servURL+"shop/appdo.php?act=slide",
    loginURL:servURL+"shop/appdo.php?act=applogin",
    logoutURL:servURL+"shop/appdo.php?act=apploginout",
    regURL:servURL+"shop/appdo.php?act=appregister",
    shop_newShop:servURL+"shop/appdo.php?act=appshopcreate",/*修改店铺*/
    shop_area:servURL+"shop/appdo.php?act=applocation",/*地区获取*/
    shop_ind:servURL+"shop/appdo.php?act=appbusiness",/*所在行业*/
    shop_get:servURL+"shop/appdo.php?act=appshopinfo",/*获取店铺信息*/
    logobaseURL:servURL+"shop/",/*图片baseurl*/
    goodCatURL:servURL+"shop/appdo.php?act=goodcategory",/*商品类别*/
    goodAddURL:servURL+"shop/appdo.php?act=appgoodsadd",
    goodListURL:servURL+"shop/appdo.php?act=appgoodslist",/*商品列表*/
    goodInfoURL:servURL+"shop/appdo.php?act=appgoodinfo",/*获取商品信息*/
    goodmorePicURL:servURL+"shop/appdo.php?act=appgoodsimg",/*获取商品信息*/
    deleteImgURL:servURL+"shop/appdo.php?act=appdelimg",/*删除图片*/
    makeMainimgURL:servURL+"shop/appdo.php?act=appmakemain",/*设为主图*/
    search:servURL+"shop/appdo.php?act=appsearch",
    nearShop:servURL+"shop/appdo.php?act=nearbyshops",/*附近商品*/
    getqrCodeURL:servURL+"shop/appdo.php?act=phpcode"
};
appConfig.api={
    keys:{
        baiduMap:"60425bb77caaa022eab2ef55c6ba8140"
    },
    url:{
        geocodingURL:"http://api.map.baidu.com/geocoder/v2/"
    }
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