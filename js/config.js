var _Config_ = {
	API_PATH: "http://api.chinabogu.com"
};

// 线上地址
var Router= "http://api.chinabogu.com";
// 本地地址
// var Router = "http://192.168.23.123:8000/";
function createAjax(ajaxrequire) {
	// console.log(ajaxrequire);
 	_url = ajaxrequire.url;
 	_dataType = ajaxrequire._dataType;
 	_async = ajaxrequire._async;
 	_method = ajaxrequire.type;//请求
 	_data = ajaxrequire.data;
	// _headers = ajaxrequire.headers;
    return $.ajax({
		url: _url,
		dataType: 'JSON',
		type: _method,
		cache: false,
		async: _async,
		data: _data,
		timeout:10000,
		beforeSend: function (xhr) {
			// console.log('正在登录中...');
			xhr.setRequestHeader('uid',localStorage.getItem("user_id"));
		},
		success:function(data){
			// console.log(data);
			if(data.code == '10001'){
				window.location.href='http://api.chinabogu.com/china_antique/pages/'
			}else{
				// console.log(data);
			}
		},
        error:function(err){
			console.log(err);
			
        }
    });
}
