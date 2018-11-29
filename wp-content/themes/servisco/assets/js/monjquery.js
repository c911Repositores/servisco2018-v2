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


////////////////////////////////////////////////////////////////////////////////////
// AUTO INCREMENTATION DES CHIFFRES (HOME)
////////////////////////////////////////////////////////////////////////////////////
function fireNumbersIncrement() {
	$("[data-js-autoincrement]").each(function(){
		var target = $(this);
		var value = $(this).attr("data-js-autoincrement");

		$({percentage: 0}).stop(true).animate({percentage: value}, {
			duration : 4000,
			easing: "easeOutExpo",
			step: function () {
				var percentageVal = Math.round(this.percentage);
				target.text(percentageVal);
			}
		}).promise().done(function () {
			// hard set the value after animation is done to be
			// sure the value is correct
			target.text(value);
		});
	});
}

$(document).ready(function() {
	if($('#js-banner-numbers').length == 1){

		var numbersIncrementIsStarted = false;

		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			var targetPos = $("#js-banner-numbers").position().top;
			var screenh = $(window).height();

			if(scroll + screenh/2 >= targetPos && numbersIncrementIsStarted == false) {
				numbersIncrementIsStarted = true;
				fireNumbersIncrement();
			}
		});
	}
});


// END AUTOINVOKED FUNCTION //////////////////////////////////////////////////////////////
})(jQuery);
