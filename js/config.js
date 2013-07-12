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
    getqrCodeURL:servURL+"shop/appdo.php?act=phpcode",
	orderInfoURL:servURL+"shop/appdo.php?act=appuserorder", /*提交订单*/
	orderDetailURL:servURL+"shop/appdo.php?act=orderinfo",	/*订单信息和订单详情*/
	orderlistBuy:servURL+"shop/appdo.php?act=checkbuy",  /*我是买家订单列表*/
	orderlistSell:servURL+"shop/appdo.php?act=checksell", /*我是卖家订单列表*/
    dialogueURL:servURL+"shop/appdo.php?act=chat",/*发送对话*/
    dialog_fetchUnreadURL:servURL+"shop/appdo.php?act=getchat",/*获取未读*/
	charlistURL:servURL+"shop/appdo.php?act=records", /*聊天好友记录表*/
	deleteChatRecordURL:servURL+"shop/appdo.php?act=record_del", /*删除聊天记录*/
    dialog_fetchUnreadURL:servURL+"shop/appdo.php?act=getchat",/*对话时获取未读*/
    dialog_prefetch:servURL+"shop/appdo.php?act=chatlist",/*对话时获取曾经的记录*/
	searchFriendURL:servURL+"shop/appdo.php?act=searchfriends", /*查找好友*/
	addFriendURL:servURL+"shop/appdo.php?act=addfriend", /*添加好友*/
	deleteFriendURL:servURL+"shop/appdo.php?act=friend_del", /*删除好友*/
	friendslistURL:servURL+"shop/appdo.php?act=friendslist", /*我的好友列表*/
	addFav:servURL+"shop/appdo.php?act=goods_add_favorite",
	addFav:servURL+"shop/appdo.php?act=goods_add_favorite",/*添加收藏*/
    favList:servURL+"shop/appdo.php?act=favorite_lists",
    favDel:servURL+"shop/appdo.php?act=favorite_del",/*删除收藏*/
	newsCategoryURL:servURL+"shop/appdo.php?act=newcategory",/*新闻分类*/
	newslistURL:servURL+"shop/appdo.php?act=appnews",/*新闻列表*/
    newsInfoURL:servURL+"shop/appdo.php?act=newsinfo"/*新闻内容*/
};
appConfig.api={
    keys:{
        baiduMap:"60425bb77caaa022eab2ef55c6ba8140",
        sinaKey:"793276180",
        sinaSecret:"955219e6933c5753c8e7ddef96bbceef"
    },
    url:{
        geocodingURL:"http://api.map.baidu.com/geocoder/v2/",
        sinaShare:"https://api.weibo.com/2/statuses/upload_url_text.json"
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
