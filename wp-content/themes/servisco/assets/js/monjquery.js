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
	if($('#js-zone-numbers').length == 1){

		var numbersIncrementIsStarted = false;

		if($('#js-zone-numbers').is("[data-js-zone-numbers-instastart]")) {
			numbersIncrementIsStarted = true;
			fireNumbersIncrement();
		}

		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			var targetPos = $("#js-zone-numbers").position().top;
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
// GET URL PARAMETER (stackoverflow function)
////////////////////////////////////////////////////////////////////////////////////
var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
		}
	}
};


////////////////////////////////////////////////////////////////////////////////////
// SERVICES SCROLL MENU
////////////////////////////////////////////////////////////////////////////////////
function scrollToService(target) {
	var decalage = $(".header").height() + 15;

	if($("#wpadminbar").length == 1) {
		decalage = decalage + $("#wpadminbar").height();
	}

	var offset = target.offset();
	offset = offset.top - decalage;
	$('html,body').animate({scrollTop: offset}, 1000);
}

function activeServiceMenuOnScroll() {
	var scrollTop = $(window).scrollTop() + 300;
	var itemPassedCpt = 0;

	$(".ourservices__item").each(function() {
		var itemPosTop = Math.round($(this).offset().top);

		if(scrollTop > itemPosTop) {
			itemPassedCpt++;
		}
	});

	$(".ourservices__navigationitem").removeClass("ourservices__navigationitem--active");
	$(".ourservices__navigationitem:nth-child(" + itemPassedCpt + ")").addClass("ourservices__navigationitem--active");
}

$(document).ready(function() {
	$("[data-js-button-service-number]").on("click", function() {
		var targetNbr = $(this).attr("data-js-button-service-number");
		var target = $(".ourservices__item:nth-child(" + targetNbr + ")");
		scrollToService(target);
	});

	if($(".ourservices__item").length > 0) {
		$(window).scroll(function() {
			activeServiceMenuOnScroll();
		});
	}
});

$(window).load(function() {
	// scroller automatiquement si url parameter
	var serviceLink = getUrlParameter('service');
	// pas de parameter
	if(serviceLink) {
		var target = $("[data-id-service=" + serviceLink + "]");
		scrollToService(target);
	}
});


////////////////////////////////////////////////////////////////////////////////////
// GESTION DES CODES POSTAUX
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

	if($("#wpadminbar").length == 1) {
		headerHeight = headerHeight + $("#wpadminbar").height();
	}

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
				// ajouter selected au partner parcouru
				$(this).addClass("partners__item--selected");
			} else {
				// sinon, s'assurer que l'item n'a pas de class selected
				$(this).removeClass("partners__item--selected");
			}
		});

		// faire descendre la page
		moveToStartOfList();

		// MESSAGES
		// enlever le message invitant à finir de taper
		$(".partners__typingmessage").removeClass("partners__typingmessage--show");
		// si vide, afficher la zone de formulaire
		if($(".partners__item--selected").length == 0) {
			$(".partners__ifempty").addClass("partners__ifempty--show");
		}
	} else if(filterValueLength == 0) {
		// par sécurité, enlever tous les selected
		$(".partners__list .partners__item").removeClass("partners__item--selected");

		// MESSAGES
		// afficher le message invitant à finir de taper
		$(".partners__typingmessage").addClass("partners__typingmessage--show");
		// masquer la zone de formulaire
		$(".partners__ifempty").removeClass("partners__ifempty--show");
	} else {
		// si le filtre est rempli mais pas valide (4) ou vide (0), enlever tous les selected (aucun partner affiché)
		$(".partners__list .partners__item").removeClass("partners__item--selected");

		// MESSAGES
		// afficher le message invitant à finir de taper
		$(".partners__typingmessage").addClass("partners__typingmessage--show");
		// masquer la zone de formulaire
		$(".partners__ifempty").removeClass("partners__ifempty--show");
	}
}

// à chaque entrée dans l'input, tenter de filtrer
$(document).ready(function(){
	$(".partners__filter input").val("");

	$(".partners__filter input").on("input", function(){
		filterThePartners();
	});
});


////////////////////////////////////////////////////////////////////////////////////
// Défilement des logos sur l'accueil
////////////////////////////////////////////////////////////////////////////////////
var logo_slide_random_nbr;
var nbr_logos_partners = 3;
$(document).ready(function() {
	if($("#js_partners_slider .partners__item").length > nbr_logos_partners){
		setInterval(function () {
			var nbr_temp = Math.ceil(Math.random()*nbr_logos_partners);
			if(nbr_temp == logo_slide_random_nbr){
				if(nbr_temp < nbr_logos_partners){
					logo_slide_random_nbr = nbr_temp + 1;
				}else{
					logo_slide_random_nbr = nbr_temp - 1;
				}
			}else{
				logo_slide_random_nbr = nbr_temp;
			}

			var cpt_each_b = 1;
			var selection_active;
			$(".partners__list .partners__item--selected").each(function(){
				if(cpt_each_b == logo_slide_random_nbr){
					selection_active = $(this);
				}
				cpt_each_b++;
			});

			var li_hidden_length = $(".partners__list .partners__item").not(".partners__item--selected").length;
			var random_of_hidden = Math.ceil(Math.random()*li_hidden_length);
			var cpt_each_a = 1;
			var selection_hidden;
			$(".partners__list .partners__item").not(".partners__item--selected").each(function(){
				if(cpt_each_a == random_of_hidden){
					selection_hidden = $(this);
				}
				cpt_each_a++;
			});

			//déplacement du logo au bon endroit (après celui à masquer)
			selection_hidden.insertAfter(selection_active)

			//ANIMATION: échanger les img à l'intérieur des li ciblés
			var liv = selection_active;//v pour visible
			var lih = selection_hidden;//h pour hidden
			var imgo = selection_active.find("a");//o pour old
			var imgn = selection_hidden.find("a");//n pour new

			imgo.animate({
				opacity: 0
			},500,function(){
				lih.append(imgo);

				imgn.css("opacity",0);
				liv.append(imgn);
				imgn.animate({
					opacity: 1
				},200);
			});
		}, 2500);
	}
});


// END AUTOINVOKED FUNCTION //////////////////////////////////////////////////////////////
})(jQuery);
