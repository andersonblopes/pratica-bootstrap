jQuery(document).ready(function(){
	$('[data-toggle="tooltip"').tooltip();
});

var t = 5000; // Tempo em milésimos

setTimeout(function() {
    $('.alert').fadeOut(); // Faz o alert ir desaparecendo com fade
}, t);

$('#menu').affix({
  offset: {
    top: $(window).height()
  }
}); 