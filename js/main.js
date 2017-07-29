// Faz o alert ir desaparecendo com fade
jQuery(document).ready(function(){
	$('[data-toggle="tooltip"').tooltip();
});

var t = 5000; // Tempo em milésimos

setTimeout(function() {
    $('.alert').fadeOut();
}, t);

/*Ajusta fixação de componentes conforme altura do dispositivo.*/
$('#menu').affix({
	offset: {
		top: $(window).height()
	}
}); 

/*Fecha automaticamente calendário ao selecionar data.*/
 $('[data-provide=datepicker]').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true
  });