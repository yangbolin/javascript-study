/**
 * @author boris.yangbl
 * @date   2013.07.16
 * @desc   cookie操作的基础API封转
 */
jQuery.namespace('FE.company.cookie');
jQuery(function($){
	FE.company.cookie = {
		/** 
		 * 获取cookie中的值 
		 * @param key	cookie对应的key
		 **/
		getCookie:function(key) {
			// 0. 获取cookie中的所有值
			var allCookies = document.cookie;
			// 1. 分离出名/值对
			var list = allCookies.split("; ");		
			// 2. 遍历名/值对，找出需要的key
			for(var i = 0; i < list.length; ++i) {
				var cookie = list[i];
				var p = cookie.indexOf('=');
				var name = cookie.substring(0, p);
				if (name == key) {
					var value = cookie.substring(p + 1);
					return value;
				}
			}
			return null;
		},
		/** 
		 * 设置cookie的值
		 * @param key		cookie对应的key 
		 * @param config	cookie的一些配置信息，比如作用域，过期时间，值等等
		 * 注意:IE不认识max-age这个属性
		 **/
		setCookie:function(key, config) {
			if (key === undefined || 
				config === undefined ||
				config.value === undefined) {
				return;
			}
			
			var value = config.value || null;
			var domain = config.domain || '.1688.com';
			var path = config.path || '/';
			var maxage = config.maxage || 86400 * 2;
			var currentDate = new Date();
			var expiresDate = new Date(currentDate.getTime() + maxage * 1000);
			var cookie = key + "=" + value + ";domain="+domain+";path="+path+";max-age="+maxage+";expires="+expiresDate.toUTCString();
			
			document.cookie = cookie;
		}
	};
});
