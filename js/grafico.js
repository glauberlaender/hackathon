window.grafico = (function() {
	var self = {};
	var dataInicial = new Date(2015, 06, 16, 0, 0, 0);
	var dataFinal = new Date(2015, 07, 21, 0, 0, 0);
	var diasDesdeOInicio = calcularDiasRestantes(dataInicial, dataFinal);

	self.desenhar = function(corDaBarra, corDaBarraVazia, corDosPalitosIndicativos) {
		$('.chart').easyPieChart({
			animate: 2000,
			barColor: corDaBarra,
			trackColor: corDaBarraVazia,
			scaleColor: corDosPalitosIndicativos
		});

		atualizarGrafico();
		setInterval(atualizarGrafico, 10000);
	};

	function atualizarGrafico() {
		var diasAteOFinal = calcularDiasRestantes(new Date(), dataFinal);
		var percentual = diasAteOFinal * 100 / diasDesdeOInicio;

		$('.chart').data('easyPieChart').update(70);
	}

	function calcularDiasRestantes(dataInicial, dataFinal) {
		return (dataFinal - dataInicial) / (1000 * 60 * 60 * 24);
	}

	return self;
}());