// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";

	if (window.devicePixelRatio > 1) {
		return true;
	}
	if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
		return true;
	}
	return false;
};


function retina() {
	if (!isRetina()) {
		return;
	}
	$("img.2x").map(function(i, image) {

		var path = $(image).attr("src");

		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");

		$(image).attr("src", path);
	});
};

$(document).ready(
	retina();

	//#scrollTop
	$(".topHead").hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 550) {
			$(".topHead").fadeIn()
		} else {
			$(".topHead").fadeOut()
		}
	});
	$("a.topHead").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false
	})

	var url = window.location.pathname;
		url = url.replace(/\//g,"");
	if (url == "about"){
		$("section#wrapper").addClass("about");
	};
	$(".about").find("img").parents().addClass("panorama");
);