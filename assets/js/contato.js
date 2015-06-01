//import("jquery-validation/dist/jquery.validate.js");

(function($) {
	$('#contactform').validate({
		errorElement: 'span',
		highlight: function (element, errorClass) {
			$(element).parents('span').addClass('fail').removeClass('ok');
		},
		unhighlight: function (element, errorClass) {
			$(element).parents('span').removeClass('fail').addClass('ok');
		},
		errorPlacement: function (error, element) {
			error.appendTo($(element).parents('span'));
		},
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			_replyto: {
				required: true,
				email: true
			},
			_subject: {
				required: true,
				minlength: 14
			},
			message: {
				required: true,
				minlength: 10
			}
		},
		messages: {
			name: {
				required: "Preencha seu nome",
				minlength: "M&iacute;nimo 10 caracteres"
			},
			_replyto: {
				required: "Preencha seu e-mail",
				email: "Digite um e-mail v&aacute;lido"
			},
			_subject: {
				required: "Preencha o assunto",
				minlength: "M&iacute;nimo 14 caracteres"
			},
			message: {
				required: "Digite sua mensagem",
				minlength: "M&iacute;nimo 10 d&iacute;gitos"
			}
		}
	});
})(jQuery);