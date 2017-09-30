$(function(){
				//获取大盒子
				var wraper = $('#shop_wraper');
				//获取图片ul
				var pics = $('#shop_pics');
				//获取所有图片
				var picL = pics.children('li');
				//获取所有的点
				var dotL = $('#shop_dots').children('li');
				//获取每张图片的高度
				var picW = picL.width();
				
				//定义一个计时器，使图片循环，计时器作为属性添加到wraper中，防止被其他因素影响到
				wraper[0].toRun = setInterval(play,4000)
				
				function play(){
					//图片往上跑，所以ul的top每次减小picH个距离
					var target = pics.position().left - picW;
					//当最后一张图片出现在屏幕时，继续跑，不要停，并且把第一张定位到最后一张的后面来
					if(pics.position().left <= -(picL.length-1)*picW){
						picL.eq(0).css('left',picL.length*picW)
					}
					//当第一张图片也出现在屏幕中的时候，还原第一张图片的位置，同时让pics的top值归0
					if (pics.position().left <= -picL.length*picW) {
						picL.eq(0).css('left',0);
						pics.css('left',0);
						//因为当前位置已经改变了，重新获取target
						target = pics.position().left - picW;
					}
					console.log(target)
					//调用animate方法，执行动画
					pics.animate({
						left : target
					},1000)
					
					//原点跟着跑,通过当前pics的位置来确认原点的索引值
					var dotIndex = parseInt(pics.position().left/(-1920)+1);
					//如果索引值等于5，重置为0
					if(dotIndex == 3){
						dotIndex = 0
					}
					console.log(dotIndex)
					//动态改变原点样式
					dotL.eq(dotIndex).addClass('checked').siblings('li').removeClass('checked');
				}
				
				//使用hover事件让计时器停止重启，
				wraper.hover(function(){
					//停止计时器
					clearInterval(this.toRun)
				},function(){
					//重启计时器
					this.toRun = setInterval(play,4000)
				})
				
				//点击原点移动图片
				dotL.click(function(){
					//给当前点击的原点加上checked样式，并让它的兄弟节点移除checked样式
					$(this).addClass('checked').siblings('li').removeClass('checked');
					
					pics.animate({
						left : -$(this).index() * picW
					},1000)
					
				})
				
				
			})