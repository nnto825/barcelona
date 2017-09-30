$(function(){
				//获取大盒子
				var wraper2 = $('#wraper2');
				//获取图片ul
				var pics2 = $('#pics2');
				//获取所有图片
				var picL2 = pics2.children('li');
				//获取所有的点
				var dotL2 = $('#dots2').children('li');
				//获取每张图片的高度
				var picW2 = picL2.width();
				
				//定义一个计时器，使图片循环，计时器作为属性添加到wraper中，防止被其他因素影响到
//				wrapers[0].toRun = setInterval(play,2000)
				
				function play(){
					//图片往上跑，所以ul的top每次减小picH个距离
					var target = pics2.position().left - picW2;
					//当最后一张图片出现在屏幕时，继续跑，不要停，并且把第一张定位到最后一张的后面来
					if(pics2.position().left <= -(picL2.length-1)*picW2){
						picL2.eq(0).css('left',picL2.length*picW2)
					}
					//当第一张图片也出现在屏幕中的时候，还原第一张图片的位置，同时让pics的top值归0
					if (pics2.position().left <= -picL2.length*picW2) {
						picL2.eq(0).css('left',0);
						pics2.css('left',0);
						//因为当前位置已经改变了，重新获取target
						target = pics2.position().left - picW2;
					}
					console.log(target)
					//调用animate方法，执行动画
					pics2.animate({
						left : target
					},200)
					
					//原点跟着跑,通过当前pics的位置来确认原点的索引值
					var dotIndex = parseInt(pics2.position().left/(-1000)+1);
					//如果索引值等于5，重置为0
					if(dotIndex == 3){
						dotIndex = 0
					}
					console.log(dotIndex)
					//动态改变原点样式
					dotL2.eq(dotIndex).addClass('checked').siblings('li').removeClass('checked');
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
				dotL2.click(function(){
					//给当前点击的原点加上checked样式，并让它的兄弟节点移除checked样式
					$(this).addClass('checked').siblings('li').removeClass('checked');
					
					pics2.animate({
						left : -$(this).index() * picW2
					},1000)
					
				})
				
				
			})