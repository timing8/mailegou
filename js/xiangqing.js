	
//放大镜ajax	
/*
$.ajax({
		type:'get',
		url:'http://127.0.0.1/mailegou/json/index.json',
		datatype:"json",
		success:function(date){
			$(date.qqq).each(function(index,value){
				
				var li2 = `
			<img class="img1" src="images/${value.imgs1}"/>
			<img class="img1" src="images/${value.imgs2}"/>
			<img class="img1" src="images/${value.imgs3}"/>
			<img class="img1" src="images/${value.imgs4}"/>
			<img class="img1" src="images/${value.imgs5}"/>`
				$('li2 img').className = "img1";
				$("#div1").append(li2);
			var li3 = `<img class="img3" src="images/${value.imgs1}"/>`
			$(".glass").append(li3);
	
			var li4 = `<img class="img2" src="images/${value.imgs1}"/>`
				$("#div2").append(li4);
		
			var li5 =  `<li><img src="images/${value.imgs1}" /></li>
		        <li><img src="images/${value.imgs2}" /></li>
		        <li><img src="images/${value.imgs3}" /></li>
		        <li><img src="images/${value.imgs4}" /></li>
		        <li><img src="images/${value.imgs5}" /></li>`
		       $("#bottom").append(li5);
				
			  })
			}
		})
	

*/
		
//放大镜

		class ReadingGlass{
				constructor(w, h, b){
					this.w = w;
					this.h = h;
					this.b = b;
					this.init();
				}
				init(){
					var that = this;
					// 设计基本样式										
				
					$('#img1,#mask').css({"width":this.w,"height":this.h,"position":"absolute"});
					$('#mask').css({
						"background-color":"rgba(0,0,0,.3)"
					})
					$('#glass').css({
						"position":"absolute",
						"width":this.w/this.b,
						"height":this.h/this.b,
						"overflow":"hidden",
						"display":"none"
					});
					$('#img2').css({"width":this.w*this.b,"height":this.h*this.b,"position":"absolute"});
					$('#img3').css({
						"width":this.w,"height":this.h,"position":"absolute"
					});
					
					// 鼠标在小图片上移动的时候
					 $("#bottom li").mouseenter(function(){
					 	
					 	var index = $(this).index();
					$(this).css({
						'border':'1px solid red'
					})
					$("#div1 #img1").eq(index).show().siblings().hide();  

           
        }).mouseleave(function(){
        	$(this).css({
						'border':'0'
					})
        })				
					// 鼠标在大图片上移动的时候
					$('#div1').bind('mousemove', function(e){
						var x = e.clientX-$('#div1').offset().left-$('#glass').width()/2;
						var y = e.clientY-$('#div1').offset().top-$('#glass').height()/2;
						if(x<0){x=0}
						if(y<0){y=0}
						if(x>$('#div1').width()-$('#glass').width()){ x=$('#div1').width()-$('#glass').width() }
						if(y>$('#div1').height()-$('#glass').height()){ y=$('#div1').height()-$('#glass').height() }
						
						$('#glass').css({
							"left" : x,
							"top" : y
						});
						$('#img3').css({
							"left" : -x,
							"top" : -y
						});
						$('#img2').css({
							"left" : -x*that.b,
							"top" : -y*that.b
						});
					}).bind('mouseleave', function(){
						$('#glass').fadeOut();
						$('#div2').fadeOut();
					}).bind('mouseenter', function(){
						$('#glass').fadeIn();
						$('#div2').fadeIn();
					});
				}
				
			}
			
			new ReadingGlass(350, 350, 3);


//右侧购物车
	$(".kf").mouseenter(function(){
		$(this).css({'background':'red'})
		$('.kehu').animate().fadeIn(100)
	}).mouseleave(function(){
		$('.kehu').animate().fadeOut(100)
		$(this).css({'background':'none'})
	})

$(".link a:nth-of-type(1)").mouseenter(function(){
		$('.link-sc').animate().fadeIn(100)
	}).mouseleave(function(){
		$('.link-sc').animate().fadeOut(100)
	})

$(".link a:nth-of-type(2)").mouseenter(function(){
		$('.link-look').animate().fadeIn(100)
	}).mouseleave(function(){
		$('.link-look').animate().fadeOut(100)
	})	
$(".link a:nth-of-type(3)").mouseenter(function(){
		$('.erwei').animate().fadeIn(100)
	}).mouseleave(function(){
		$('.erwei').animate().fadeOut(100)
	})	
$(".link a:nth-of-type(4)").mouseenter(function(){
		$('.link-fankui').animate().fadeIn(100)
	}).mouseleave(function(){
		$('.link-fankui').animate().fadeOut(100)
	})


	
		
		 var _num=1;
		 if(_num<=1){
		 $(".buy .reduce").css("cursor","not-allowed");	
		 }
		   $(".buy .add").click(function(){
            _num++;
            if(_num<=1){
                $(".buy .reduce").css({"cursor":"not-allowed","background":"#fff"});
            }else{
                $(".buy .reduce").css({"cursor":"pointer","background":"#f5f5f5"});
            }
            $(".goods_num").val(_num);
        });
			  $(".buy .reduce").click(function(){
            _num--;
            if(_num<=1){
                _num=1;
                $(".buy .reduce").css({"cursor":"not-allowed","background":"#fff"});
                $(".goods_num").val(_num);
            }else{
                $(".goods_num").val(_num);
                $(".buy .reduce").css({"cursor":"pointer","background":"#f5f5f5"});
            }

        });
        
         //.................购物车..................
         	 //加载已有的的商品信息
    	      loadCart();
    	     //给加入购物车按钮添加点击事件
    	     $(".car").click(function(){
    	     	loadCart();
    	     	//获取商品的id（用来区分不同的商品）
    	     	var goodId = $('goodsName h1').attr('goodsID');
    	     	//获取商品的名称
    	     	var goodName = $('goodsName h1').attr.html();
    	     	//获取商品的价格
      	     	var goodPrice = $('.bgGray').find('.span-2');
      	     	 	
    	     	//获取商品的图片
      	     	var goodSrc = $('#bottom').find('li').find('img').eq(0).attr('src');
      	     	//获取商品的数量
      	        var goodNum = parseInt($('.goods_num').val());
      	      //将字符串转为对象
    	     	var cartObj = convertCartStrToObj(cartStr);
    	     
    	     	//判断该商品是否已经存在购物车中
    	     	if(goodId in cartObj){
    	     		//如果该商品已经存在，那么商品的数量加到购物车中去
    	     		cartObj[goodId].num += goodNum;
    	     	}else{
    	     		//如果不存在。那么将新的商品的信息存入
    	     		cartObj[goodId] = {
    	     			name:goodName,
    	     			price:goodPrice,
    	     			num:goodNum,
    	     			src:goodSrc
    	     		};
    	     		
    	     	}  
      	        //将新的商品存到cookie中去
    	     	//将对象转为字符串
    	     	cartStr = convertObjToCartStr(cartObj);
    	     	//存入cookie
    	     	$.cookie("cart",cartStr,{expires:7,path:"/"});
      	        
    	    	
    	     	 		var iptnum = parseInt($('.car').siblings('input').val());
    	     	 		//console.log(iptnum);
    	     	 		//购物车中的input框的数字
    	     	 		$(".cart_num").val(function(index,v){
    	     	 			//"购物车(0)"
    	     	 			var pattern = /(\d+)/;
    	     	 			var num = parseInt(v.match(pattern)[1]);
    	     	 			
    	     	 			return num + iptnum;
    	     	 			console.log(num+iptnum);
    	     	 			
    	     	 		});
    	     	 		 cloneImg.remove();
    	     	 	
    	     	
    	     	return false;
    	     	
    	     })
    	    //函数的封装
    	    function convertCartStrToObj(cartStr){
    	    	if(!cartStr){
    	    		return{};
    	    	}
    	    	var goods = cartStr.split(":");
    	    	var obj = {};
    	    	for(var i =0;i<goods.length;i++){
    	    		var data = goods[i].split(",");
    	    		//以商品的id为健，商品的其他信息为值，这个值也设置为一个对象
    	    		obj[data[0]] = {
    	    			name:data[1],
    	    			price:parseFloat(data[2]),
    	    			num:parseInt(data[3]),
    	    			src:data[4]
    	    		}
    	    	}
    	    	return obj;
    	    }
    	    function convertObjToCartStr(obj){
    	    	var cartStr = "";
					//遍历对象
					for(var id in obj){
						if(cartStr){
							cartStr += ":";
						}
				      cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
					 }
					return cartStr;
			   }
    	  //加载购物车中的信息，使商品页与购物车页中的购物车数量同步
	      function loadCart(){
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
		        var cartObj = convertCartStrToObj(cartStr);
				//获取到购物车中所有商品的数量
				var total = 0;
				for(var id in cartObj){
				total += cartObj[id].num;
			}
			
			$(".cart_num").find('input').val(total);
		 }
     
    
        
     
        
        
             