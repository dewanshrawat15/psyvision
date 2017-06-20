	
$(function(){
	var i=0;
	$('.hamburger').click(function(){
		++i;
		$('.bar1').toggleClass('bar-active-1')
		$('.bar3').toggleClass('bar-active-3')
		$('.bar2').toggleClass('bar-active-2')
			if((i%2)!=0){
				$('.bar').removeClass('black-bar')
			}
			else{
				$('.bar').addClass('black-bar')
			}
		$('.menu').toggleClass('menu-active')
	})

	$('.li').hover(function(){
		$(this).toggleClass('li-active')
	})
	
	setTimeout(function(){
		$('.heading').addClass('pop')
	}, 300)
	
	$(window).scroll(function(){
		var x=$('body').scrollTop();
		var s2=$('.section2').offset().top;
		var s3=$('.section3').offset().top;
		var s4=$('.section4').offset().top;
		if(x<s2){
			$('.bar').removeClass('black-bar')
		}
		else if(x>=s2 && x<s3){
			$('.bar').addClass('black-bar')
		}
		else if(x>=s3 && x<s4){
			console.log(x)
			console.log(s3)
			$('video').trigger("play")
			$('.bar').removeClass('black-bar')
		}
		else if(x>=s4){
			$('.bar').addClass('black-bar')
		}
	})
	
	$('.li1').click(function(){
		$('body').animate({ scrollTop: $('.section1').offset().top}, 500)
		$('.menu').removeClass('menu-active')
		$('.bar1').removeClass('bar-active-1')
		$('.bar3').removeClass('bar-active-3')
		$('.bar2').removeClass('bar-active-2')
	})
	
	$('.li2').click(function(){
		$('body').animate({ scrollTop: $('.section2').offset().top}, 500)
		$('.menu').removeClass('menu-active')
		$('.bar1').removeClass('bar-active-1')
		$('.bar3').removeClass('bar-active-3')
		$('.bar2').removeClass('bar-active-2')
	})
	
	$('.li3').click(function(){
		$('body').animate({ scrollTop: $('.section3').offset().top+30}, 500)
		$('.menu').removeClass('menu-active')
		$('.bar1').removeClass('bar-active-1')
		$('.bar3').removeClass('bar-active-3')
		$('.bar2').removeClass('bar-active-2')
	})
	
	$('.li4').click(function(){
		$('body').animate({ scrollTop: $('.section4').offset().top}, 500)
		$('.menu').removeClass('menu-active')
		$('.bar1').removeClass('bar-active-1')
		$('.bar3').removeClass('bar-active-3')
		$('.bar2').removeClass('bar-active-2')
	})
	
})