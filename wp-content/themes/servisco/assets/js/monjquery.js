(function($){

//////////////////////////////////////////////////////////////////////////////////////
///// Menu de la navbar
//////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
	$(".header__button").on("click",function() {

		if($(this).is(".header__button--pccrossed")) {
			// Cookies.set('menu', 'off');
			$(".header__navbarlist").removeClass("header__navbarlist--pcopen");
			$(".header__button").removeClass("header__button--pccrossed");
		} else {
			// Cookies.set('menu', 'on');
			$(".header__navbarlist").addClass("header__navbarlist--pcopen");
			$(".header__button").addClass("header__button--pccrossed");
		}

		if($(this).is(".header__button--mobilecrossed")) {
			$(".header__navbarlist").removeClass("header__navbarlist--mobileopen");
			$(".header__button").removeClass("header__button--mobilecrossed");
		} else {
			$(".header__navbarlist").addClass("header__navbarlist--mobileopen");
			$(".header__button").addClass("header__button--mobilecrossed");
		}
	});
});


//////////////////////////////////////////////////////////////////////////////////////
///// Minify Navbar when scroll down
//////////////////////////////////////////////////////////////////////////////////////
function isScrollPointPassed(scrollPoint) {
	var scrollNow = $(window).scrollTop();

	if(scrollNow > scrollPoint) {
		return true;
	} else {
		return false;
	}
}

function headerOnScroll() {
	if(isScrollPointPassed(50)) {
		$(".header").addClass("header--scrolled");
	} else {
		$(".header").removeClass("header--scrolled");
	}
}

$(document).ready(function() {
	headerOnScroll();

	$(window).scroll(function() {
		headerOnScroll();
	});
});


////////////////////////////////////////////////////////////////////////////////////
// SCROLL SIGNAL go down if clicked
////////////////////////////////////////////////////////////////////////////////////
function scrollsignal_move() {
	var height = $(window).height();
	$('html,body').animate({scrollTop: height}, 1000);
}

$(document).ready(function() {
	$(".scrollsignal__arrow").on("click",function() {
		scrollsignal_move();
	});
});


// END AUTOINVOKED FUNCTION //////////////////////////////////////////////////////////////
})(jQuery);
