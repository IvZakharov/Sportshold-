
/Бургер меню/ 
$(function(){
	$('.header__burger-triger').click(function(){
		$('.main-nav').toggleClass('menu-opened');
		$('.secondary-nav').toggleClass('menu-opened');
		$('.header__burger-menu').toggleClass('header__burger-menu--open');
	});
});


 $(document).ready(function(){

	$('.comments__wrapper').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  arrows: false,
	  autoplay: true
	});	
});