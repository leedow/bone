/**
 * leeui main js
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-05-16 14:04:37
 * @version $Id$
 */
var bone = {};

(function(factory){
	if (typeof define == 'function') {
		define(function(require, exports, module){
			require('zepto');
			console.log("init leeui");
			factory(Zepto);
		});
	} else {
		factory();
	}
})(function(){
	bone.init = function(){
		$(document).ready(function(){
			 bone.placeholder.init();
			 //bone.verify.init();
		});


	}


	
})
