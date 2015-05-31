
	$('.toggle-menu button').on('click', function(e) {
		e.preventDefault();
		$('.main-header').toggleClass('active');
		$(this).parent().toggleClass('active');
		if( $('.main-header').hasClass('active') ) {
			$('.main-site .section-content').velocity({
				translateY: $('.main-header').innerHeight()
			}, { duration: 500 });
		} else {
			$('.main-site .section-content').velocity({
				translateY: 0
			}, { duration: 100, delay: 500 });
		}
		return false;
	});