$(function(){
				//获取大盒子
				var wraper1 = $('#wraper1');
				//获取图片ul
				var pics1 = $('#pics1');
				//获取所有图片
				var picL1 = pics1.children('li');
				//获取所有的点
				var dotL1 = $('#dots1').children('li');
				//获取每张图片的高度
				var picW1 = picL1.width();
				
				//定义一个计时器，使图片循环，计时器作为属性添加到wraper中，防止被其他因素影响到
//				wrapers[0].toRun = setInterval(play,2000)
				
				function play(){
					//图片往上跑，所以ul的top每次减小picH个距离
					var target = pics1.position().left - picW1;
					//当最后一张图片出现在屏幕时，继续跑，不要停，并且把第一张定位到最后一张的后面来
					if(pics1.position().left <= -(picL1.length-1)*picW1){
						picL1.eq(0).css('left',picL1.length*picW1)
					}
					//当第一张图片也出现在屏幕中的时候，还原第一张图片的位置，同时让pics的top值归0
					if (pics1.position().left <= -picL1.length*picW1) {
						picL1.eq(0).css('left',0);
						pics1.css('left',0);
						//因为当前位置已经改变了，重新获取target
						target = pics1.position().left - picW1;
					}
					console.log(target)
					//调用animate方法，执行动画
					pics1.animate({
						left : target
					},200)
					
					//原点跟着跑,通过当前pics的位置来确认原点的索引值
					var dotIndex = parseInt(pics1.position().left/(-1000)+1);
					//如果索引值等于5，重置为0
					if(dotIndex == 5){
						dotIndex = 0
					}
					console.log(dotIndex)
					//动态改变原点样式
					dotL1.eq(dotIndex).addClass('checked').siblings('li').removeClass('checked');
				}
				
				//使用hover事件让计时器停止重启，
//				wrapers.hover(function(){
//					//停止计时器
//					clearInterval(this.toRun)
//				},function(){
//					//重启计时器
//					this.toRun = setInterval(play,2000)
//				})
				
				//点击原点移动图片
				dotL1.click(function(){
					//给当前点击的原点加上checked样式，并让它的兄弟节点移除checked样式
					$(this).addClass('checked').siblings('li').removeClass('checked');
					
					pics1.animate({
						left : -$(this).index() * picW1
					},1000)
					
				})
				
				
			})