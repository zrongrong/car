$(document).ready(function() {
	// 获得回到顶部按钮
	var topcontrol = $('#topcontrol');		

	/*回到顶部按钮单击*/
	topcontrol.click(function(event) {				
		$('html,body').animate({scrollTop:0}, 1000);
	});

	//滚动条回到顶部
	$('.toolbar-item-top').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1000);
	});
	
	/*
		滚动条事件
	*/
	$(window).scroll(function(event) {
			
		/*
			海外房车
			动态显示隐藏回到顶部按钮
		*/
		// 滚动条卷去的大小
		var sTop = $(window).scrollTop();

		// 超过200像素
		if (sTop >= 200) {
			topcontrol.fadeIn('normal');
			$('.toolbar-item-top').show();
		} else {
			topcontrol.fadeOut('normal');
			$('.toolbar-item-top').hide();
		}


	});

	/*首页下拉菜单*/
	var erjimenu = $('.erjimenu');
	var fd = $('.fd');
	fd.click(function(event) {
		$(this).find('.erjimenu').toggle("slow");
		//隐藏同级的ul
		$(this).siblings().find('.erjimenu').hide("slow");
	});

});

