window.grafico = (function() {
	var self = {};
	var dataInicial = new Date(2015, 06, 16, 0, 0, 0);
	var dataFinal = new Date(2015, 07, 21, 0, 0, 0);

	self.desenhar = function() {
		JBCountDown({
            secondsColor : "#7f1418",
            secondsGlow  : "none",
            
            minutesColor : "#7f1418",
            minutesGlow  : "none",
            
            hoursColor   : "#7f1418",
            hoursGlow    : "none",
            
            daysColor    : "#7f1418",
            daysGlow     : "none",
            
            startDate   : dataInicial.getTime(),
            endDate     : dataFinal.getTime(),
            now         : new Date().getTime()
        });
	};

	return self;
}());