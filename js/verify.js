bone.verify = (function(){


		function check_all(obj){
			$this = $(obj);
			var flag = true;
			var msg = {
				'required': '此项不能为空',
				'wrong': '此项格式错误'
			}

			$this.find('.bone-required').each(function(){
				add_state($(this), '');
				if (check_empty($(this).val())) {
					add_state($(this), msg.required);
					flag = false;
				} 
			});

			$this.find('.bone-email').each(function(){
				add_state($(this), '');
				if (check_empty($(this).val())) {
					if (allow_empty($(this))) {
						return true;
					};
					add_state($(this), msg.required);
					flag = false;
				} else if (!check_email($(this).val())) {
					add_state($(this), msg.wrong);
					flag = false;
				}
			});

			$this.find('.bone-url').each(function(){
				add_state($(this), '');
				if (check_empty($(this).val())) {
					if (allow_empty($(this))) {
						return true;
					};
					add_state($(this), msg.required);
					flag = false;
				} else if (!check_url($(this).val())) {
					add_state($(this), msg.wrong);
					flag = false;
				}
			});

			$this.find('.bone-password').each(function(){
				add_state($(this), '');

				if (check_empty($(this).val())) {
					if (allow_empty($(this))) {
						return true;
					};
					add_state($(this), msg.required);
					flag = false;
				} else if (!check_psd($(this).val())) {
					add_state($(this), msg.wrong);
					flag = false;
				}
			});

			$this.find('.bone-nocn').each(function(){
				add_state($(this), '');
				if (check_empty($(this).val())) {
					if (allow_empty($(this))) {
						return true;
					};
					add_state($(this), msg.required);
					flag = false;
				} else if (!check_nocn($(this).val())) {
					add_state($(this), msg.wrong);
					flag = false;
				}
			});

			bone.placeholder.refresh();
			
			return flag;
		}


		function allow_empty(obj){
			if(obj.attr('class').indexOf('bone-empty') < 0){
				return false;
			} else {
				return true;
			}
		}	

		function set_state(){
			for(key in params){
				if (params.key == '') {
					$(key).next('.input-wrong').remove();
				} else {
					add_state($(key), params[key]);
				};
			}
		}

		function add_state(aim, info){
			if (info != '') {
				info = aim.attr('data-msg')?aim.attr('data-msg'):info;
				aim.after('<span class="input-wrong"><i class="fa  fa-exclamation-circle "></i> ' + info + '</span>');
			} else {
				aim.next('.input-wrong').remove();
			};
		}

		function check_empty(value){
			//var reg = /^\s$/;
			if(value.replace(' ', '') != ''){
				return false;
			}
			return true;
		}
		
		function check_email(value){
			  var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			  if(!reg.test(value)){
			   		return false;
			  }
			  return true;
		}

		function check_url(value){
			var reg = /[a-zA-Z0-9]+\.[a-z]+/i;
			if(!reg.test(value)){
				return false;
			}
			return true;
		}

		function check_psd(value){
			var reg = /[a-zA-Z0-9]{6,14}/;
			if(!reg.test(value)){
				return false;
			}
			return true;
		}

		function check_nocn(value){
			var reg = /[\u4E00-\u9FA5]/i;
			if(reg.test(value)){
				return false;
			}
			return true;
		}


	return {
		check: check_all
	}
})()