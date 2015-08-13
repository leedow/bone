/**
 * leeui 数字选择器
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-05-16 14:05:03
 * @version $Id$
 */
bone.dialog = (function(){
	var $dialog;

	function init(title, content, config){
		if(typeof $dialog == 'undefined'){//单例模式
			$dialog = new _dialog(title, content, config);
			//console.log('new dialog');
			return $dialog;
		} else {
			$dialog.refresh(title, content, config);
			return $dialog;
		}
	}

	//对话框类
	function _dialog(title, content, config){
		$this = this;
		this._title = title?title:"";
		this._content = content?content:"";
		this._config = config?config:{
			'buttons': 'single' 
		}
		this.timer;
		this._ok = function(){};
		this._no = function(){};

		//显示对话框
		this.open = function(){	
			clearTimeout($this.timer);
			$('#dialog-layout').css('display', 'block');

		}

		//关闭对话框
		this.close = function(){

		}

		//点击确定
		this.ok = function(callback){
			if(typeof callback != 'undefined'){
				$this._ok = callback;
			}
			
			return this;
		}

		//点击取消
		this.no = function(callback){
			if(typeof callback != 'undefined'){
				$this._no = callback;
			}  
		
			return this;
		}

		//点击关闭
		this.close = function(callback){
			if(typeof callback != 'undefined'){
				callback();
			}

			$('#dialog-layout .dialog').removeClass('dialog-open').addClass('dialog-close');
	 		$this.timer = setTimeout(function(){
	 			$('#dialog-layout').css('display', 'none');
	 		}, 300);
			
			return this;
		}

		this._dom = function(){
			if($('#dialog-layout').length > 0 ){
				$('#dialog-layout').remove();
			}
			 
			if($this._config.buttons == 'single'){
				var buttons = '<div class="buttons">'
					+'<button class="btn btn-primary button ok">确 定</button></div>';
			} else {
				var buttons = '<div class="buttons">'
					+'<button class="btn btn-default button no">取 消</button>'
					+'<button class="btn btn-primary button ok">确 定</button></div>';
			}

			$('body').append('<div id="dialog-layout"><div class="container dialog dialog-open"><h3 class="title">'+this._title
		 		+ '</h3><div class="close"><i class="fa fa-close"></i></div><div class="content">'+this._content+'</div>'+buttons+'</div></div>'
		 	);
		 	var h = $('#dialog-layout .dialog').height();
		 
		 	$('#dialog-layout .dialog').css('margin-top', $(window).height()/2 - 80);
			$('#dialog-layout .close').on('click', function(){
				$this.close();
			});
			$('#dialog-layout .ok').on('click', function(){
				$this._ok();
				$this.close();
			});
			$('#dialog-layout .no').on('click', function(){
				$this._no();
				$this.close();
			});
		}

		//更新
		this.refresh = function(title, content , config){
			$this._title = title?title:"";
			$this._content = content?content:"";
			$this._config = config?config:{
				'buttons': 'single' 
			}
			$this._ok = function(){};
			$this._no = function(){};

			$this._dom();
			$this.open();
		}

		//this._dom = 
		
		this._dom();
		this.open();
	
	}

	return init;
})()

