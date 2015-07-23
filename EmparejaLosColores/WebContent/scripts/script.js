var xmlHttp = new XMLHttpRequest();

var celdasseleccionadas=0;
var id_celda_seleccionada=-1;
var pareja_celda_seleccionada=-1;
var celdaslibres = 20;

function colorAleatorio()
{
	var hexadecimal = ('0123456789ABCDEF').split('');
	var color_aleatorio = '#';
	for ( var i = 0; i < 6; i++)
	{
		color_aleatorio += hexadecimal[Math.floor(Math.random() * 16)];
	}
return color_aleatorio;
}

function mostrarCaja()
{
	// Recogemos el DIV_TABLA que estaba oculto que forma el juego
	var div_tabla = document.getElementById("div_tabla");
	// Quitamos el atributo "style" para que se muestre
	div_tabla.removeAttribute("style");
	// Recogemos el Boton y lo ocultamos
	var boton_rellenar = document.getElementById("Boton");
	boton_rellenar.setAttribute("style","display:none;");
	rellenarCaja();
}

function rellenarCaja()
{
	// Recogemos los DIVS que forman el juego
	var Celda_1 = document.getElementById("Celda_1");
	var Celda_2 = document.getElementById("Celda_2");
	var Celda_3 = document.getElementById("Celda_3");
	var Celda_4 = document.getElementById("Celda_4");
	var Celda_5 = document.getElementById("Celda_5");
	var Celda_6 = document.getElementById("Celda_6");
	var Celda_7 = document.getElementById("Celda_7");
	var Celda_8 = document.getElementById("Celda_8");
	var Celda_9 = document.getElementById("Celda_9");
	var Celda_10 = document.getElementById("Celda_10");
	var Celda_11 = document.getElementById("Celda_11");
	var Celda_12 = document.getElementById("Celda_12");
	var Celda_13 = document.getElementById("Celda_13");
	var Celda_14 = document.getElementById("Celda_14");
	var Celda_15 = document.getElementById("Celda_15");
	var Celda_16 = document.getElementById("Celda_16");
	var Celda_17 = document.getElementById("Celda_17");
	var Celda_18 = document.getElementById("Celda_18");
	var Celda_19 = document.getElementById("Celda_19");
	var Celda_20 = document.getElementById("Celda_20");
	
	var array_celdas = new Array(	Celda_1,Celda_2,Celda_3,Celda_4,Celda_5,Celda_6,Celda_7,
									Celda_8,Celda_9,Celda_10,Celda_11,Celda_12,Celda_13,
									Celda_14,Celda_15,Celda_16,Celda_17,Celda_18,Celda_19,
									Celda_20);
	
	for ( var i = 0; i < 10; i++) 
	{
		var aleatorio_1 = Math.floor(Math.random()*(array_celdas.length-1));
		var celda_1 = array_celdas[aleatorio_1];
		array_celdas.splice(aleatorio_1, 1);
		var aleatorio_2 = Math.floor(Math.random()*(array_celdas.length-1));
		var celda_2 = array_celdas[aleatorio_2];
		array_celdas.splice(aleatorio_2, 1);
		
		var color = colorAleatorio();
		
		celda_1.setAttribute("style","background-color:"+color+";");
		var id_1 = celda_1.getAttribute("id");
		celda_1.setAttribute("onclick","compararCelda("+i+","+id_1+");");
		celda_2.setAttribute("style","background-color:"+color+";");
		var id_2 = celda_2.getAttribute("id");
		celda_2.setAttribute("onclick","compararCelda("+i+","+id_2+");");
	}
}

function compararCelda(pareja, id)
{
	if(celdasseleccionadas==0)
	{
		celdasseleccionadas=1;
		
		var celda_seleccionada_1 = id;
		celda_seleccionada_1.style.opacity = "0.7";
		
		id_celda_seleccionada = id;
		pareja_celda_seleccionada = pareja;
	}
	else if(celdasseleccionadas==1)
	{
		if (pareja_celda_seleccionada==pareja && id_celda_seleccionada != id) 
		{
			var celda_seleccionada_1 = id_celda_seleccionada;
			celda_seleccionada_1.style.backgroundColor = "#FFF";
			celda_seleccionada_1.style.opacity = "1";
			
			var celda_seleccionada_2 = id;
			celda_seleccionada_2.style.backgroundColor = "#FFF";
			celda_seleccionada_2.style.opacity = "1";
			
			celdasseleccionadas=0;
			id_celda_seleccionada=-1;
			pareja_celda_seleccionada=-1;
			celdaslibres = celdaslibres-2;
			if(celdaslibres==0)
			{
				alert("Enhorabuena!! Has ganado");
			}
		}
		else
		{
			celdasseleccionadas=0;
			
			var celda_seleccionada_1 = id_celda_seleccionada;
			celda_seleccionada_1.style.opacity = "1";
			
			id_celda_seleccionada=-1;
			pareja_celda_seleccionada=-1;
			
			alert("Los colores no se parcen!!");
		}
	}
}