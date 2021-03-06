/**
 * placeholder低版本浏览器兼容
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-07-23 13:26:47
 * @version $Id$
 */

bone.placeholder =  (function(){
	//var pd_left = 15;
	function init(){
		if(navigator.userAgent.indexOf('MSIE 9.0') >= 0){
			_each('input[type="text"]');
			_each('input[type="password"]');
		}
		if(navigator.userAgent.indexOf('MSIE 8.0') >= 0){
			_each('input[type="text"]');
			_each('input[type="password"]');
		}
		if(navigator.userAgent.indexOf('MSIE 7.0') >= 0){
			_each('input[type="text"]');
			_each('input[type="password"]');
		}
	}

	function _each(obj){
		$(obj).each(function(){
			if($(this).attr('need-hack') != undefined){
				var x = $(this).offset().left + parseInt($(this).css('padding-left'));
				var y = $(this).offset().top;// + parseInt($(this).());
				var height = $(this).height();
				$('body').append(				 
					'<span class="phr" id="phr-'+$(this).attr('name')+'" style="left:'+x+'px;top:'+y+'px;line-height:' + height + 'px;">'
					+$(this).attr('placeholder')+'</span>');
				var phr = $('#phr-' + $(this).attr('name'));
				phr.on('click', function(){
					$(this).css('display', 'none');
					$('input[name="'+$(this).attr('id').split('-')[1]+'"]').focus();
				});
				$(this).on('click', function(){		 
						phr.css('display', 'none');
					 		
				}).on('blur', function(){
					if($(this).val().match(/^\s*$/))
						phr.css('display', 'block');
				}).on('focus', function(){
					phr.css('display', 'none');
				});	
			}
			
		});
	}

	//特殊情况下提示内容更新定位
	function refresh(){
		$('.phr').each(function(){
			var name = $(this).attr('id').split('-')[1];
			var ip = $('input[name="'+name+'"]');
			var x = ip.offset().left + parseInt(ip.css('padding-left'));
			var y = ip.offset().top;// + parseInt(ip.css('padding-top'));
			$(this).css({
				'left': x,
				'top': y
			});
		});
	}

	return {
		init: 		init,
		refresh: 	refresh
	};
})()