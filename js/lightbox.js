(function(){

var proplightbox = {
	imgContainer: document.getElementsByClassName('lightbox'),
	img: null,
	imgsrc: null,
	cuerpodom: document.getElementsByTagName('body')[0],
	lightbox_container: null,
	modal: null,
	cerrarModal: null,
	animacion: "fade"
}

var metlightbox = {
	inicio: function(){
		for (var i = 0; i < proplightbox.imgContainer.length; i++) {
			proplightbox.imgContainer[i].addEventListener("click",metlightbox.capturaImagen);
		}
	},
	capturaImagen: function(){

		proplightbox.img= this;
		metlightbox.lightbox(proplightbox.img);
	},

	lightbox: function(img){

	proplightbox.imgsrc = window.getComputedStyle(img, null).backgroundImage.slice(5,-2);

		proplightbox.cuerpodom.appendChild(document.createElement("DIV")).setAttribute("id","lightbox_container");

		proplightbox.lightbox_container = document.getElementById('lightbox_container');
	
		proplightbox.lightbox_container.style.width = "100%";
		proplightbox.lightbox_container.style.height = "100%";
		proplightbox.lightbox_container.style.position = "fixed";
		proplightbox.lightbox_container.style.zIndex = "1000";
		proplightbox.lightbox_container.style.background = "rgba(0,0,0,0.8)";
		proplightbox.lightbox_container.style.top = "0";
		proplightbox.lightbox_container.style.left = "0";
	
		proplightbox.lightbox_container.appendChild(document.createElement("DIV")).setAttribute("id","modal");
		proplightbox.modal = document.getElementById('modal');
		proplightbox.modal.style.height = "100%";

		proplightbox.modal.appendChild(document.createElement("IMG")).setAttribute("src",proplightbox.imgsrc);

		proplightbox.modal.getElementsByTagName("img")[0].setAttribute("class", "imagen-modal");

		if(proplightbox.animacion == "fade"){

			document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;

			setTimeout(function(){
			document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
			},50);

		}

		proplightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>';

		proplightbox.cerrarModal = document.getElementById("cerrar_modal");
		proplightbox.cerrarModal.addEventListener("click",metlightbox.cerrarModal);
	},

	cerrarModal: function(){

		proplightbox.cuerpodom.removeChild(proplightbox.lightbox_container);
	}
}

metlightbox.inicio();


}())