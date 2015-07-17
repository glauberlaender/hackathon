window.grafico = (function() {
	var self = {};
	var dataInicial = new Date(2015, 06, 16, 0, 0, 0);
	var dataFinal = new Date(2015, 07, 21, 0, 0, 0);
	var diasDesdeOInicio = calcularDiasRestantes(dataInicial, dataFinal);

	self.desenhar = function() {
		$('div[data-js="grafico"]').easyPieChart({
			animate: 2000,
			barColor: '#900000',
			scaleColor: false,
			trackColor: '#dfe0e0',
			lineWidth: 5,
			size: 110
		});

		atualizarGrafico();
		setInterval(atualizarGrafico, 10000);
	};

	function atualizarGrafico() {
		var diasAteOFinal = calcularDiasRestantes(new Date(), dataFinal);
		var percentual = diasAteOFinal * 100 / diasDesdeOInicio;

		$('div[data-js="grafico"]').data('easyPieChart').update(100 - percentual);
	}

	function calcularDiasRestantes(dataInicial, dataFinal) {
		return (dataFinal - dataInicial) / (1000 * 60 * 60 * 24);
	}

	return self;
}());