(function($){

//////////////////////////////////////////////////////////////////////////////////////
///// Menu de la navbar
//////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
	$(".header__button").on("click",function() {

		if($(this).is(".header__button--pccrossed")) {
			Cookies.set('menu', 'off');
			$(".header__navbarlist").removeClass("header__navbarlist--pcopen");
			$(".header__button").removeClass("header__button--pccrossed");
		} else {
			Cookies.set('menu', 'on');
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

	var actualScroll = $(window).scrollTop();

	if(actualScroll > $(window).height()) {
		var targetPosition = 0;
	} else {
		var targetPosition = $(window).height();
	}

	$('html,body').animate({scrollTop: targetPosition}, 1000);
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
			duration : 2000,
			// easing: "easeOutExpo",
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

			if(scroll + screenh/4*3 >= targetPos && numbersIncrementIsStarted == false) {
				numbersIncrementIsStarted = true;
				fireNumbersIncrement();
			}
		});
	}
});


////////////////////////////////////////////////////////////////////////////////////
// SHOW PARTNER FORM WHEN BUTTON CLICKED
////////////////////////////////////////////////////////////////////////////////////
function showPartnerForm() {
	var form = $(".partnerform");
	form.slideDown();

	var offset = $("#js_anchor_partnerform_scroll").offset();
	var headerHeight = $(".header").height();
	offset = offset.top - headerHeight - 30;
	$('html,body').animate({scrollTop: offset}, 1000);
}

$(document).ready(function() {
	$("#js_show_partnerform").on("click", function() {
		showPartnerForm();
	});
});



////////////////////////////////////////////////////////////////////////////////////
// AUTO INCREMENTATION DES CHIFFRES (HOME)
////////////////////////////////////////////////////////////////////////////////////
function cleanedValue(value) {
	var trimedValue = value.trim();
	var shortValue = trimedValue.substring(0,2);
	var intValue = parseInt(shortValue);

	return intValue;
}

function getZipArray(item) {
	var datas = item.attr("data-js-zip");
	var datasArray = datas.split(",");

	datasArray.forEach(function(element, index, theArray) {
  	theArray[index] = cleanedValue(element);
	});

	return datasArray;
}

function checkIfZipIsIn(thisArray, zip) {
	var match = false;

	thisArray.forEach(function(element) {
		if(element == zip) {
			 match = true;
		}
	});

	return match;
}

function moveToStartOfList() {
	var offset = $("#js_anchor_partnerlist_scroll").offset();
	var headerHeight = $(".header").height();
	offset = offset.top - headerHeight - 15;
	$('html,body').animate({scrollTop: offset}, 1000);
}

function filterThePartners() {
	var filter = $(".partners__filter input");
	var filterValue = filter.val();
	var filterValueLength = filterValue.length;

	// ne faire quelque chose que quand la valeur entrée à 4 chiffres
	if(filterValueLength == 4) {
		var cleanValue = cleanedValue(filterValue);

		// parcourir tous les partners et récuperer leur tableau de zip en string (data-)
		$(".partners__list .partners__item").each(function() {
			// transformer le string en tableau propre (liste d'int)
			var zipArray = getZipArray($(this));

			// si la valeur entrée correspond à une entrée du tableau
			if(checkIfZipIsIn(zipArray, cleanValue)) {
				moveToStartOfList();
				// définir les li comme masqués par défaut
				// n'aura un effet que la première fois et après $etre repassé par une entrée vide (voir plus bas, if 0)
				$(".partners__list .partners__item").addClass("partners__item--maskeddefaut");
				// ajouter selected au partner parcouru
				$(this).addClass("partners__item--selected");
			} else {
				// sinon, s'assurer que l'item n'a pas de class selected
				$(this).removeClass("partners__item--selected");
			}
		});
	} else if(filterValueLength == 0) {
		// si le filtre est vidé, remettre en visible par défaut
		$(".partners__list .partners__item").removeClass("partners__item--maskeddefaut");
		// par sécurité, enlever tous les selected
		$(".partners__list .partners__item").removeClass("partners__item--selected");
	} else {
		// si le filtre est rempli mais pas valide (4) ou vide (0), enlever tous les selected (aucun partner affiché)
		$(".partners__list .partners__item").removeClass("partners__item--selected");
	}
}

// à chaque entrée dans l'input, tenter de filtrer
$(document).ready(function(){
	$(".partners__filter input").on("input", function(){
		filterThePartners();
	});
});


// END AUTOINVOKED FUNCTION //////////////////////////////////////////////////////////////
})(jQuery);
