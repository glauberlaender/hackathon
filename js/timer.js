window.timer = (function() {
	var self = {};

	self.iniciar = function() {
		$('#getting-started')
			.countdown('2015/08/10', function(event) {
				$(this).children('span.dia').empty().html(event.strftime('%D') + criarMarcador('d'));
				$(this).children('span.hora').empty().html(event.strftime('%H') + criarMarcador('h'));
				$(this).children('span.minuto').empty().html(event.strftime('%M') + criarMarcador('m'));
				$(this).children('span.segundo').empty().html(event.strftime('%S') + criarMarcador('s'));
			});
	};

	function criarMarcador(marcador) {
		return '<small>' + marcador + '</small>';
	}

	return self;
}());