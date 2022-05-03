(function () {
	
var propslider = {
	slider: document.getElementById('slider'),
	primerslide:null
}

var metslider = {
	inicio: function(){
		setInterval(metslider.moverslide, 3000);
	},

	moverslide: function(){
		propslider.slider.style.transition= "all 1s ease";
		propslider.slider.style.marginLeft= "-100%";

		setTimeout(function(){

			propslider.primerslide= propslider.slider.firstElementChild;
			propslider.slider.appendChild(propslider.primerslide);

			propslider.slider.style.transition = "unset";
			propslider.slider.style.marginLeft = "0";
		},1000);
	}
}

metslider.inicio();

}())