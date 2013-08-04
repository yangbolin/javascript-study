/**
 * @author boris.yangbl
 * @date   2013.07.16
 * @desc   cookie�����Ļ���API��ת
 */
jQuery.namespace('FE.company.cookie');
jQuery(function($){
	FE.company.cookie = {
		/** 
		 * ��ȡcookie�е�ֵ 
		 * @param key	cookie��Ӧ��key
		 **/
		getCookie:function(key) {
			// 0. ��ȡcookie�е�����ֵ
			var allCookies = document.cookie;
			// 1. �������/ֵ��
			var list = allCookies.split("; ");		
			// 2. ������/ֵ�ԣ��ҳ���Ҫ��key
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
		 * ����cookie��ֵ
		 * @param key		cookie��Ӧ��key 
		 * @param config	cookie��һЩ������Ϣ�����������򣬹���ʱ�䣬ֵ�ȵ�
		 * ע��:IE����ʶmax-age�������
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
