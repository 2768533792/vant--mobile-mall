var axios = require("axios");
var qs = require("qs");
var instance = axios.create();
//instance.headers['Cache-Control'] = "no-cache,no-store,must-revalidate,max-age=-1,private";
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//安全拦截器
//Axios.interceptors.request.use(function (config) {
//	if (!config.headers.sessiontoken) {
//		config.headers.sessiontoken = localStorage.getItem('sessiontoken') || '';
//	}
//	return config;
//}, function (err) {
//	return Promise.reject(err);
//});

//POST传参序列化
instance.interceptors.request.use(function (config) {
	if (config.method === 'post' || config.method === 'put') {
		config.data = qs.stringify(config.data);
	}
	return config;
});

instance.interceptors.response.use(function (res) {
	if (!res.data.success) {
		switch (res.data.code) {
			case 422:
				break;
			case 401:
				break;
			case 404:
				return res;
				break;
			default:
				//这里直接执行axios的catch方法, catch用于执行流程报错
				break;
		}
		return Promise.reject(res);
	}
	return res;
}, function (error) {
	// 这里在网络问题或者后端报错的情况下执行, 而不在catch中执行了.
	throw new Error("网络出错")
	//	return Promise.reject(error);
});

module.exports = instance;
