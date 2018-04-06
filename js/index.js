require.config({
	'paths' : {
		'jquery' : 'js/jquery-1.11.3'
	},
	
});
	$('#wode').mouseenter(function(){
			$(this).children('ul').slideDown();
		}).mouseleave(function(){
			$(this).children('ul').slideUp();
		});
	$('.erwei').mouseenter(function(){
			$(this).children('.noneCon').slideDown();
		}).mouseleave(function(){
			$(this).children('.noneCon').slideUp();
		});
	$('.nav-list li').mouseenter(function(){	
		$(this).animate({"right":"2px"}).animate({"left":"2px"});
	})

//轮播
var timer= setInterval(autoPlay,3000);
	var index = 0;
	function autoPlay(){
		index++;
		if( index == $(".marketBtn li").size() ){
			index = 0;
		}			 
		$(".ul li").eq(index)
				  .fadeIn(2000)
				  .siblings()
				  .fadeOut(2000);
		$('.beijing div').eq(index).fadeIn(1000).siblings().fadeOut(1000);
		
		//一楼轮播	
		$(".br-list").animate({'left':'-=90px'})
		if( index == 4){		
			 $('.br-list').animate({'left':'0'});
		}	
		
		if( index == $(".goodsBox ul").size() ){
			index = 0;
		}	
		$('.goodsBox ul').eq(index)
				 .fadeIn(2000)
				  .siblings()
				  .fadeOut(2000);
	}

	$(".marketBtn li").mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay();
	})
	$(".marketBtn li").mouseleave(function(){
		timer= setInterval(autoPlay,2000);
	})
	
//二级菜单
$('.ul-cont li').mouseenter(function(){
			$(this).children('.nelBox').fadeIn(500);
			$(this).animate({'paddingLeft':'8px'})
		}).mouseleave(function(){
			$(this).children('.nelBox').fadeOut(500);
			$(this).animate({'paddingLeft':'-8px'})
		});
	

//整点抢
$('.timeTit ul li').click(function(){
	$(this).stop().css({"background":'red'})
})
//一楼轮播
$('.saleTody ul li a').mouseover(function(){
			$(this).find('img').stop().animate({"width":300, "height":240, "left":-50, "top":-50});
		}).mouseout(function(){
			$(this).find('img').stop().animate({"width":290, "height":230, "left":0, "top":0});
		});

//列表页
//二级菜单
$('.article-L').mouseenter(function(){
	$(this).find('.ul-cont').css({
		'display':'block'
	})
}).mouseleave(function(){
	$(this).find('.ul-cont').css({
		'display':'none'
	})
})


/*列表页*/

$(".sClik").click(function(e){	
	e.stopPropagation();
	var ul = $('.navBox');
			if(ul.is(":hidden")){
				
				$(this).stop().css("background","url(images/jian.jpg)")
				$(this).next().css({
					'display':'none'
				})
				ul.show(500);
			}else{
				$(this).stop().css("background","url(images/jia.jpg)");
				ul.hide(500);
			}
})

//划过
$('.listUl a').mouseenter(function(){
	$(this).css({
		'background':'red',
		'color':'white'
	},500)
}).mouseleave(function(){
	$(this).css({
		'background':'none',
		'color':'black'
	},500)
})

$('.result ul li').mouseenter(function(){
	$(this).find('.ass').css({'display':'none'});
	$(this).css({
		'border':'1px solid #ccc',
		'border-bottom':'2px solid red',
	}).find('.btn').fadeIn();

}).mouseleave(function(){
	$(this).find('.ass').css({'display':'block'});
	$(this).css({
		'border':'none',
		'border-bottom':'none',
	}).find('.btn').hide();
})

//列表页ajax获取

$.ajax({
		type:"get",
		url:"http://127.0.0.1/mailegou/json/index.json",
		datatype:"json",
		success:function(date){
			console.log(date)
			$(date.list).each(function(index,value){
				for(var i=1;i<6;i++){
				var li = `<li>
				<a href="xiangqing.html" class="sort1">
					<img src="images/${value.src}" alt="" />
				</a>
				<div class="price-info">
					<strong>${value.price}</strong>
					<span class="unit-price">单件：${value.change}</span>
				</div>
				<p>
					<a href=""><b class="food-count">
						${value.jijian}<i></i>
					</b>${value.name}        
          			</a>
				</p>
				<div class="ass">
					<span style="border-right: none;">${value.xiaoliang}</span>
					<span>${value.pingjia} 19623</span>
				</div>	
	<div class="btn">
		<input type="button" class="addCar" value="加入购物车"/>
		<a href="" class="shoucang">${value.shoucang}</a>
	</div>
			</li>`
		       $(".result ul").append(li);
				
			  }
			})
			}
		})
	

	
	
		
			
			
				

	
































