function cambiarImagen(imagen){
	document.getElementById('imgProd').setAttribute("src", "../img/"+imagen);
}

let background = document.getElementById('chgBG');

background.oninput = function() {
    document.getElementById('footer').style.backgroundColor = background.value;

    let blanco=parseInt('FFFFFF',16)
    let color = background.value.replace('#','');
    color=parseInt(color,16)

    let nuevoColor = blanco - color;
    nuevoColor=Number(nuevoColor).toString(16)
    nuevoColor=`#${nuevoColor}`

    document.getElementById('footer').style.color = nuevoColor;

    // console.log(nuevoColor)
};

