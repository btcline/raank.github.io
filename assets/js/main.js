//import("vendor/_fss.js");
//import("vendor/_highlight.js");

(function($) {
	'use scrict';

	//import("components/_menu.js");
	//import("components/_polygon.js");
	
	$('.project-item').first().each(function() {
		$(this).removeClass('normal').addClass('feature');
	});

	$(window).load(function() {
		$('img.lazyload').each(function() {
			var url = $(this).data('src');
			$(this).css('opacity', 0).attr('src', url);
		});
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
		setTimeout(function() {
			$('img.lazyload').each(function() {
				$(this).removeAttr('style').addClass('lazyloaded');
			});
		}, 2000);
	});

	$('pre code').each(function() {
		var classs = $(this).attr('class').split('-');
		$(this).parent('pre').addClass('full-code');
		$(this).addClass(classs[1]);
	});

	$('.post-text p').find('code').addClass('code-paragraph');

})(jQuery);