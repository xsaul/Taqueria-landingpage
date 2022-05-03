(function(){

var propscroll = {

	posicion: window.pageYOffset,
	scroll_suave: document.getElementsByClassName('scroll-suave'),
	volver_arriba: document.getElementsByClassName('volver-arriba'),
	destino: null,
	seccion_distancia:null,
	intervalo: null
}

var metscroll = {

	inicio: function(){

		for (var i = 0; i < propscroll.scroll_suave.length; i++) {
			propscroll.scroll_suave[i].addEventListener("click", metscroll.moverse);
		}

		for (var i = 0; i < propscroll.volver_arriba.length; i++) {
			propscroll.volver_arriba[i].addEventListener("click", metscroll.subir);
		}
	},

	moverse: function(e) {

		e.preventDefault();
		clearInterval(propscroll.intervalo);
		propscroll.destino = this.getAttribute("href");
		propscroll.seccion_distancia = document.querySelector(propscroll.destino).offsetTop - 75;

		propscroll.posicion = window.pageYOffset;
		propscroll.intervalo = setInterval(function (){

			if (propscroll.posicion < propscroll.seccion_distancia) {

				propscroll.posicion += 30;

				if (propscroll.posicion >= propscroll.seccion_distancia) {

					clearInterval(propscroll.intervalo);
				}
			} else {

				propscroll.posicion -= 30;

				if (propscroll.posicion <= propscroll.seccion_distancia) {

					clearInterval(propscroll.intervalo);
				}
			}
			
			window.scrollTo(0, propscroll.posicion);

		},15);
	},

	subir: function(e){

		e.preventDefault();
		clearInterval(propscroll.intervalo);

		propscroll.posicion = window.pageYOffset;
		propscroll.intervalo = setInterval(function(){

			if (propscroll.posicion > 0) {

				propscroll.posicion -= 30;

			if (propscroll.posicion <= 0) {
				clearInterval(propscroll.intervalo);
			} 
		} else{
				return;
			}

			window.scrollTo(0,propscroll.posicion);
		}, 15);
		
	}

}

metscroll.inicio();

}())