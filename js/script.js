
function valida(e){
	tecla = (document.all) ? e.keyCode : e.which;

	if (tecla==8){
		return true;
	}

    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
