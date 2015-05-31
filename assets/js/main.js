//import("vendor/_fss.js");
//import("lazysizes/lazysizes.js");

(function($) {
	'use scrict';

	//import("components/_menu.js");
	//import("components/_polygon.js");
	
	$('.project-item').first().each(function() {
		$(this).removeClass('normal').addClass('feature');
	});

	$(window).load(function() {
		$('body').removeClass('loading').addClass('loaded');
		$('.main-header').each(function() {
			if($(window).innerHeight() < $('.main-header').innerHeight()){
				$('body').addClass('small');
			}
		});
		var img = $('.full-img-primary').data('img');
		$('.full-img-secondary, .section-page-top').css({
			'background-image': 'url(' + img + ')'
		});

		var success = (window.location.hash == '#sucesso' ? true : false);
		if(success == true) {
			$('.message-contact').removeAttr('style');
		}
	});

})(jQuery);