var xmlHttp = new XMLHttpRequest();

var celdasseleccionadas=0;
var id_celda_seleccionada=-1;
var pareja_celda_seleccionada=-1;
var celdaslibres = 20;
var array_celdas_seleccionables;
var celda_extraida;

//Metodo para construir un Color hexadecimal aleatorio
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

//Funcion que remuestra los Div's y oculta el input
function mostrarCaja()
{
	// Recogemos el DIV_TABLA que estaba oculto que forma el juego
	var div_tabla = document.getElementById("div_tabla");
	// Quitamos el atributo "style" para que se muestre
	div_tabla.removeAttribute("style");
	// Recogemos el Boton y lo ocultamos
	var boton_rellenar = document.getElementById("Boton");
	boton_rellenar.setAttribute("style","display:none;");
	//AL mostrar rellenamos DIV's
	rellenarCaja();
}

//Funcion que recoje todos los Div y los da un color aleatorio a 2 celdas extraidas de un array aleatoriamente
//Añadimos la funcion onClick para que puedan ser procesados los eventos luego
//Rellenamos el ARRAY GLOBAL con todos los DIVS recogidos para poder extraerlos mientras van siendo destapados
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
	
	//araya de celda a pintar
	var array_celdas = new Array(	Celda_1,Celda_2,Celda_3,Celda_4,Celda_5,Celda_6,Celda_7,
									Celda_8,Celda_9,Celda_10,Celda_11,Celda_12,Celda_13,
									Celda_14,Celda_15,Celda_16,Celda_17,Celda_18,Celda_19,
									Celda_20);
	//Las recorremos, las cogemos aleatoriamente, y le asignamos un color aleatorio
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
	//Cargamos el array para poderlas despatar luego (Array de las que quedan por ser destapadas)
	array_celdas_seleccionables = new Array(Celda_1,Celda_2,Celda_3,Celda_4,Celda_5,Celda_6,Celda_7,
			Celda_8,Celda_9,Celda_10,Celda_11,Celda_12,Celda_13,
			Celda_14,Celda_15,Celda_16,Celda_17,Celda_18,Celda_19,
			Celda_20);
}

//Funcion que escucha los eventos de pulsar una celda
function compararCelda(pareja, id)
{
	//Si no hay ninguna celda seleccionada
	if(celdasseleccionadas==0)
	{
		var celda_seleccionada_1 = id;
		
		var comprobacion='False';
		//Buscamos si la celda seleccionada ya ha sido eliminada del array de celdas por destapar
		for (var i = 0; i < array_celdas_seleccionables.length; i++) 
		{
			var celda_a_comprobar = array_celdas_seleccionables[i];
			//Si encuentra la celda en el array de celdas por destapar (Aun no se destapo)
			if (celda_a_comprobar==celda_seleccionada_1) 
			{
				comprobacion = 'True';
				//Se borra la celda del array
				array_celdas_seleccionables.splice(i, 1);
				celda_extraida = celda_a_comprobar;
			}
		}
		//Si la celda seleccionada no ha sido destapada
		if(comprobacion=='True')
		{
			celdasseleccionadas=1;
			
			celda_seleccionada_1.style.opacity = "0.7";
			
			id_celda_seleccionada = id;
			pareja_celda_seleccionada = pareja;
		}
		//Si la celda seleccionada ya ha sido destapada
		else
		{
			alert('Celda ya quitada!');
		}
	}
	//SI hay alguna celda ya seleccionada
	else if(celdasseleccionadas==1)
	{
		//Si la celda seleccionada es de la misma pareja Y no es la misma celda seleccionada por primera vez
		if (pareja_celda_seleccionada==pareja && id_celda_seleccionada != id) 
		{
			var celda_seleccionada_1 = id_celda_seleccionada;
			celda_seleccionada_1.style.transitionDuration = "0.5";
			celda_seleccionada_1.style.backgroundColor = "#FFF";
			celda_seleccionada_1.style.opacity = "1";
			
			var celda_seleccionada_2 = id;
			celda_seleccionada_2.style.transitionDuration = "0.5";
			celda_seleccionada_2.style.backgroundColor = "#FFF";
			celda_seleccionada_2.style.opacity = "1";
			
			//Buscamos si la celda seleccionada ya ha sido eliminada del array de celdas por destapar
			for (var i = 0; i < array_celdas_seleccionables.length; i++) 
			{
				var celda_a_comprobar = array_celdas_seleccionables[i];
				if (celda_a_comprobar==celda_seleccionada_2) 
				{
					//Se borra la celda del array
					array_celdas_seleccionables.splice(i, 1);
				}
			}
			
			
			celdasseleccionadas=0;
			id_celda_seleccionada=-1;
			pareja_celda_seleccionada=-1;
			celdaslibres = celdaslibres-2;
			//Si ya se acabaron todas las celdas por destapar rellenamos el tablero de nuevo
			if(celdaslibres==0)
			{
				alert("Enhorabuena!! Has ganado");
				//Establecemos valor inicial a 20 (20 Casillas)
				celdaslibres = 20;
				//Rellenamos Caja
				rellenarCaja();
			}
		}
		//Sino es la misma pareja o es la misma celda que pulsamos la primera vez
		else
		{
			celdasseleccionadas=0;
			
			var celda_seleccionada_1 = id_celda_seleccionada;
			celda_seleccionada_1.style.opacity = "1";
			
			if (celda_extraida!=null) 
			{
				array_celdas_seleccionables.splice(0, 0, celda_extraida);
				celda_extraida = null;
			}
			
			
			id_celda_seleccionada=-1;
			pareja_celda_seleccionada=-1;
			
			alert("Los colores no se parcen!!");
		}
	}
}

//// Efecto carta onClick
///**
// * Do the clicking stuff
// *
// */
//
//(function() {
//  var cards = document.querySelectorAll(".card.effect__click");
//  for ( var i  = 0, len = cards.length; i < len; i++ ) {
//    var card = cards[i];
//    clickListener( card );
//  }
//
//  function clickListener(card) {
//    card.addEventListener( "click", function() {
//      var c = this.classList;
//      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
//    });
//  }
//})();