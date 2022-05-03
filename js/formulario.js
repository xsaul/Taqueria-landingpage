(function(){

var propformulario = {

	formulario: document.formulario_contacto,
	elementos: document.formulario_contacto.elements,
	error: null,
	textoError: null
}

var metformulario = {

	inicio: function(){

		for (var i = 0; i < propformulario.elementos.length; i++) {
			propformulario.elementos[i]

			if (propformulario.elementos[i].type == "text" || propformulario.elementos[i].type == "email" || propformulario.elementos[i].nodeName.toLowerCase() == "textarea") {
				propformulario.elementos[i].addEventListener("focus", metformulario.focusInput);
				propformulario.elementos[i].addEventListener("blur", metformulario.blurInput);
			}
		}
		propformulario.formulario.addEventListener("submit", metformulario.validarInputs);
	},

	focusInput: function(){
		this.parentElement.children[1].className = "label active";
	},

	blurInput: function(){
		if (this.value == "") {
			this.parentElement.children[1].className = "label";
		}
	},

	validarInputs: function(e){

		for (var i = 0; i < propformulario.elementos.length; i++) {
			if (propformulario.elementos[i].value == ""){

				e.preventDefault();

			if (propformulario.elementos[i].parentElement.children.length < 3) {

				propformulario.error = document.createElement("p");
				propformulario.textoError = document.createTextNode("Por favor llena el campo con tu " +propformulario.elementos[i].name);
				propformulario.error.appendChild(propformulario.textoError);
				propformulario.error.className = "error";

				propformulario.elementos[i].parentElement.appendChild(propformulario.error);
			}


			} else{

				if (propformulario.elementos[i].parentElement.children.length >= 3) {

					propformulario.error = propformulario.elementos[i].parentElement.getElementsByTagName('p')[0];
					propformulario.elementos[i].parentElement.removeChild(propformulario.error);
				}
			}
		}
	}
}

metformulario.inicio();

}())