var geos = function(r) {
			var la = r.coords.latitude;
			var lo = r.coords.longitude;	
			
			AJAX({
				url: "http://api.map.baidu.com/geocoder/v2/?location=" + la + "," + lo + "&output=json&coordtype=wgs84ll&ak=" + appConfig.keys.baidumap,				
				sCall: function(d) {
					try{
						d=JSON.parse(d);
					}catch(e){}
					if (d.status==0) {
						$scope.suggestAddr = d.result.formatted_address;											
					}
				}
			})

		};
	var geoe=function(e){
		alert("地理位置请求失败"+e);
	};	
	navigator.geolocation.getCurrentPosition(geos,geoe);