(function ($) {

	"use strict";

	// JQUERY LIGHT BOX

	if ($.isFunction($.fn.fluidbox)) {
		$('a').fluidbox();
	}


	$('a[href="#"]').on('click', function (event) {
		return;
	});

	// COUNTDOWN TIME 

	countdownTime();


	$('[data-nav-menu]').on('click', function (event) {

		var $this = $(this),
			visibleHeadArea = $this.data('nav-menu');

		$(visibleHeadArea).toggleClass('visible');

	});


	var winWidth = $(window).width();
	dropdownMenu(winWidth);

	$(window).on('resize', function () {
		dropdownMenu(winWidth);

	});

	// Circular Progress Bar

	var isAnimated = false;


})(jQuery);





function dropdownMenu(winWidth) {

	if (winWidth > 767) {

		$('.main-menu li.drop-down').on('mouseover', function () {
			var $this = $(this),
				menuAnchor = $this.children('a');

			menuAnchor.addClass('mouseover');

		}).on('mouseleave', function () {
			var $this = $(this),
				menuAnchor = $this.children('a');

			menuAnchor.removeClass('mouseover');
		});

	} else {

		$('.main-menu li.drop-down > a').on('click', function () {

			if ($(this).attr('href') == '#') return false;
			if ($(this).hasClass('mouseover')) {
				$(this).removeClass('mouseover');
			} else {
				$(this).addClass('mouseover');
			}
			return false;
		});
	}

}

function isExists(elem) {
	if ($(elem).length > 0) {
		return true;
	}
	return false;
}

function initMap() {

	// Create a new StyledMapType object, passing it an array of styles,
	// and the name to be displayed on the map type control.
	var styledMapType = new google.maps.StyledMapType(
		[{
				"featureType": "administrative",
				"elementType": "all",
				"stylers": [{
					"saturation": "-100"
				}]
			},
			{
				"featureType": "administrative.province",
				"elementType": "all",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [{
						"saturation": -100
					},
					{
						"lightness": 65
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [{
						"saturation": -100
					},
					{
						"lightness": "50"
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [{
					"saturation": "-100"
				}]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [{
					"visibility": "simplified"
				}]
			},
			{
				"featureType": "road.arterial",
				"elementType": "all",
				"stylers": [{
					"lightness": "30"
				}]
			},
			{
				"featureType": "road.local",
				"elementType": "all",
				"stylers": [{
					"lightness": "40"
				}]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
						"hue": "#ffff00"
					},
					{
						"lightness": -25
					},
					{
						"saturation": -97
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels",
				"stylers": [{
						"lightness": -25
					},
					{
						"saturation": -100
					}
				]
			}
		], {
			name: 'Styled Map'
		});

	// Create a map object, and include the MapTypeId to add
	// to the map type control.

	var uluru = {
		lat: -6.223647,
		lng: 106.971419
	};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});

	var image = 'images/google-marker.png';
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: image
	});
	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}


//backto top

(function ($) {
	"use strict";

	//Switch dark/light

	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		} else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});

	$(document).ready(function () {
		"use strict";

		//Scroll back to top

		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: 0
			}, duration);
			return false;
		})


	});

})(jQuery);