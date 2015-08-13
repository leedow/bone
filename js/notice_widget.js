/**
 * 操作自动提示
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-05-16 14:05:03
 * @version $Id$
 */
bone.notice = (function(){
	
	function show(msg){
		var timer;
		if($('#bone-notice').length > 0){
			$('#bone-notice').html(msg);
		} else {
			$('body').append('<div id="bone-notice">' + msg + '</div>');
		}
		clearTimeout(timer);
		var $notice = $('#bone-notice');
		$notice.css('bottom', '-100px').animate({
			'bottom': '100px'
		}, 'fast');

		timer = setTimeout(function(){
			$notice.animate({
				'bottom': '-100px'
			});
		}, 2000);


	}

	return show;
})()