function cambiarImagen(imagen){
	document.getElementById('imgProd').setAttribute("src", "../img/"+imagen);
}

let background = document.getElementById('chgBG');

background.oninput = function() {
    document.getElementById('footer').style.backgroundColor = background.value;
};