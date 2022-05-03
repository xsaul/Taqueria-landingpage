(function(){

var propmenu = {

	burger_menu: document.getElementById('burger_menu'),
	slidemenu: document.getElementById('slidemenu'),
	menu_activo: false,
	elem_menu: document.querySelectorAll('#slidemenu .menu-principal a')
}

var metmenu = {

	inicio: function(){

		propmenu.burger_menu.addEventListener("click", metmenu.togglemenu);

		for (var i = 0; i < propmenu.elem_menu.length; i++) {
			propmenu.elem_menu[i].addEventListener("click", metmenu.ocultarmenu);
		}

		propmenu.elem_menu[i]
	},

	togglemenu: function(){

		if (propmenu.menu_activo == false) {

			propmenu.menu_activo = true;
			propmenu.slidemenu.className = propmenu.slidemenu.className + " active";
		} else{

			propmenu.menu_activo = false;
			propmenu.slidemenu.className = propmenu.slidemenu.className.replace("active", "");
		}
	},

	ocultarmenu: function(){

		propmenu.slidemenu.className = propmenu.slidemenu.className.replace("active", "");
	}
}

metmenu.inicio();

}())

/*(function(){

var propmenu = {

	burger_menu: document.getElementById('burger_menu'),
	slidemenu: document.getElementById('slidemenu'),
	menu_activo: false,
	elem_menu: document.querySelectorAll('#slidemenu .menu-principal a')
}


var metmenu = {

	inicio: function() {

		propmenu.burger_menu.addEventListener("click", metmenu.togglemenu);

		for (var i = 0; i < propmenu.elem_menu.length; i++) {
			propmenu.elem_menu[i].addEventListener("click", metmenu.ocultarmenu);
		}

		propmenu.elem_menu[i]
	},

	togglemenu: function() {

		if (propmenu.menu_activo == false) {

			propmenu.menu_activo = true;
			propmenu.slidemenu.className = propmenu.slidemenu.className + " active";
		} else{

			propmenu.menu_activo = false;
			propmenu.slidemenu.className = propmenu.slidemenu.className.replace("active", "");
		}
	},

	ocultarmenu: function() {
		propmenu.slidemenu.className = propmenu.slidemenu.className.replace("active", "");
	}
}

metmenu.inicio();
}())*/