/**
 * 评分
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-07-07 19:27:05
 * @version $Id$
 */
bone.score = (function(){
	function init(){
		//console.log('init score_widget');
		$('.score button').off('click').on('click', function(){
			var parent = $(this).parents('.score'); 	
			var value = $(this).attr('data-value');
			var flag = false;
			parent.find('input').val(value);
			parent.find('.score-count').text(value);

			parent.find('button').each(function(){
				if(!flag){
					$(this).addClass('selected');
				} else {
					$(this).removeClass('selected');
				} 

				if($(this).attr('data-value') == value){
					flag = true;
					$(this).addClass('selected');
				}

			})
		})
	}

	return {
		init: init
	}
})()
