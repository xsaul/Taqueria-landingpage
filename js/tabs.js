(function(){

var proptabs = {
	primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
	primer_contenido: document.getElementById('contenido_menu').firstElementChild,
	enlace_encabezado: document.querySelectorAll('#encabezado_menu li a'),
	li_encabezado: document.querySelectorAll('#encabezado_menu li'),
	divs_contenido: document.querySelectorAll('#contenido_menu > div'),
	contenido_activo: null
}

var mettabs = {

	inicio: function(){
		proptabs.primer_encabezado.className = "active";
		proptabs.primer_contenido.className = "active";

		for (var i = 0; i < proptabs.enlace_encabezado.length; i++) {
			proptabs.enlace_encabezado[i].addEventListener("click", mettabs.evento);
		}
	},

	evento: function(e){
		e.preventDefault();

		for (var i = 0; i < proptabs.li_encabezado.length; i++) {
			proptabs.li_encabezado[i].className = "";
		}

		for (var i = 0; i < proptabs.divs_contenido.length; i++) {
			proptabs.divs_contenido[i].className = "";
		}

		this.parentElement.className = "active";
		proptabs.contenido_activo = this.getAttribute("href");
		document.querySelector(proptabs.contenido_activo).className = "active";
		document.querySelector(proptabs.contenido_activo).style.opacity = 0;
		setTimeout(function(){
			document.querySelector(proptabs.contenido_activo).style.opacity = 1;
		},100)
	}
}

mettabs.inicio();

}())