$(function(){
	
	var navbar_li = $('.navbar_ul').children('li')
	
	navbar_li.click(function(){
		//给当前点击的li加上checked样式，并让它的兄弟节点移除checked样式
		$(this).addClass('navbar_color').siblings('li').removeClass('navbar_color');
					
	})
})