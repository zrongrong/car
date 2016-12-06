$(document).ready(function(){

	// 获得导航条对象
	var nav = $('.hc-nav');	
	// 导航条的高度
	var navHeight= nav.outerHeight();	
	// 导航条相对于网页原点的位置
	var navPos = nav.offset().top;

	//获得左侧内容对象
	var leftmain = $('.hc-left');
	// 下面内容的高度
	var mainHeight= leftmain.outerHeight();
	// 导航条相对于网页原点的位置
	var mainPos = leftmain.offset().top;
	// alert(mainPos);



	/*
		滚动条事件
	*/
	$(window).scroll(function(event) {	

		// 滚动条卷去的大小
		var sTop = $(window).scrollTop();	
		
		/*
			动态设置导航条固定
		*/ 
		if (sTop >= navPos ) {
			if (!nav.hasClass('fixed')){
				nav.addClass('fixed');
				$('.hc-ban').css('margin-bottom',navHeight+25); //banner下方空出原始导航的高度，保证下方元素不会上移										
			}						
		} else {
			if (nav.hasClass('fixed')) {
				nav.removeClass('fixed');
				$('.hc-ban').css('margin-bottom',0);					
			}
		}

		/*
			动态左侧内容固定
		*/ 
		if (sTop >= mainPos ) {
			if (!leftmain.hasClass('fixed1')){
				leftmain.addClass('fixed1');								
			}						
		} else {
			if (leftmain.hasClass('fixed1')) {
				leftmain.removeClass('fixed1');					
			}
		}

	});

	//获得所有标签对象
	var titles = $("#page-tab li");
	//所有内容对象
	var contents  = $('.zc-helpcenter .hc-con');
	//标题和内容的个数必须相等
	if (titles.length != contents.length)
		return;
	// alert(titles.length + ',' + contents.length);
	
	for (var i = 0;i < titles.length;i ++) {				
		//用闭包记录当时的下标
		(function(index) {
			//标题鼠标移上事件
			titles[i].onclick = function() {
				
				//所有标题失去高亮,所有内容都隐藏
				for (var j = 0;j < titles.length;j ++) {
					titles[j].className = '';
					contents[j].style.display = 'none';
				}
				//当前标题高亮
				this.className = 'active';
				//对应的内容显示
				contents[index].style.display = 'block';
			}				
		})(i);
	}

	$('.qaq dt').click(function(event) {
			
		$('.qaq dd').slideUp("slow");
		$(this).next('dd').slideToggle("slow");

	});

});