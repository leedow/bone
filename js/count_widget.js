/**
 * leeui 数字选择器
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-05-16 14:05:03
 * @version $Id$
 */
bone.counter = (function(){
	var obj;
	var stamp = 0;
	//初始化DOM
	function init(){
		console.log('init count widget');
		obj = $('.count-widget');
		obj.find('input').off('click').off('blur').off('change');
		obj.find('input').click(function(){
			stamp = $(this).val();
			$(this).val("")

		}).blur(function(){
			var type = getType($(this).parent('.count-widget'));
			var v  = $(this).val(); 
	
			if (!test(v, type)) {
				var res = filter(v, type);
		
				
				if (res == "") {
					$(this).val(stamp);
				} else {
					$(this).val(res);
				}
			}  
		}).change(function(){
			var v  = $(this).val(); 
			var type = getType($(this).parent('.count-widget'));
			if (!test(v, type)) {
				var res = filter(v, type);
			
				if (res == "") {
					$(this).val(stamp);
				} else {
					$(this).val(res);
				}
			}  
		})
		add();
		sub();	
	}

	function getType(obj){
		return obj.attr('data-type')?obj.attr('data-type'):"int";
	}

	function add(){
		obj.find('.plus').off('click');
		obj.find('.plus').click(function(){
			var input = $(this).parent('.count-widget').find('input');
			var type = getType($(this).parent('.count-widget'));
			var count = input.val();
			if (!test(count, type)) {
				count = filter(count, type);
			};
			if(type == 'int'){
				count++;
			} 
			if(type == 'float'){

				count = parseFloat(count) + 0.1;
				count = count.toFixed(2);
			}
			
			input.val(count);
		});
	}

	function sub(){
		obj.find('.sub').off('click');
		obj.find('.sub').click(function(){
			var input = $(this).parent('.count-widget').find('input');
			var type = getType($(this).parent('.count-widget'));
			var count = input.val();
			if (!test(count, type)) {
				count = filter(count, type);
			};
			if (count > 0 && type == 'int') {
				count--;
			};
			if (count > 0 && type == 'float') {
				count = parseFloat(count) - 0.1;
				count = count.toFixed(2);
			};
		
			input.val(count);
		});	
	}

	//是否为数字
	function test(val, type){
		var type = type?type:"int";

		var reg = {
			'int':  /^[0-9]+$/,
			'float': /^[0-9]+(\.[0-9]+)?$/
		}
		//var reg = /^[0-9]+$/; 
		if (reg[type].test(val)){
			return true;
		} else {
			return false;
			 
		}
	}

	//过滤非数字
	function filter(val, type){
		var type = type?type:"int";
	 
		if (type == 'int') {
			
			return val.replace(/\D*/g, ''); 
		} 
		if (type == 'float') {
			return val.replace(/[^\d\.]/g, '');
		}
		
	}

	return {
		init: init
	}
})()

