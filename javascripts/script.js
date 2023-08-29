function botao(num) {
	var numero = document.getElementById("display").innerHTML;
	 document.getElementById("display").innerHTML = numero + num;
};


function onClickOperacao (ope){
	var valorAtual = document.getElementById('display').innerHTML,
	valorTop = document.getElementById('displaytop').innerHTML,
	ultimoDigitoTop = valorTop.substring(valorTop.length -1, valorTop.length);
	if (ultimoDigitoTop == "+" || ultimoDigitoTop == "-" || ultimoDigitoTop == "*" || ultimoDigitoTop == "÷") {
		var aDigito = valorTop.split(" "),
		num1 = aDigito[0],
		num2 = valorAtual;

		var resultado = realizaCalculo(num1, num2, ultimoDigitoTop)
		document.getElementById("displaytop").innerHTML = resultado +" "+ ope

		document.getElementById("display").innerHTML = "";

	}else {
	   document.getElementById("displaytop").innerHTML = valorAtual + ' ' + ope;
	   document.getElementById("display").innerHTML = ""

	}

}

function realizaCalculo(num1, num2, ope) {
	switch (ope){
		case "+":
		var resultado = parseInt(num1) + parseInt(num2);
		break;
		case "-":
		var resultado = parseInt(num1) - parseInt(num2);
		break;
		case "*":
		var resultado = parseInt(num1) * parseInt(num2);
		break;
		case "÷":
		var resultado = parseInt(num1) / parseInt(num2);
		break;

		default:
			break

	}
	document.getElementById("display").innerHTML = resultado;
	return resultado;
}

function equal () {
	var valorTop = document.getElementById('displaytop').innerHTML,
	valorAtual = document.getElementById('display').innerHTML,
	ultimoDigitoTop = valorTop.substring(valorTop.length -1, valorTop.length);

	if (ultimoDigitoTop == "+" || ultimoDigitoTop == "-" || ultimoDigitoTop == "*" || ultimoDigitoTop == "÷" ) {
		var aDigito = valorTop.split(" "),
		num1 = aDigito[0],
		num2 = valorAtual;

		var  resultado = realizaCalculo (num1, num2, ultimoDigitoTop);
		document.getElementById('display').innerHTML = resultado;
		document.getElementById("displaytop").innerHTML = "";
	}
	
}


function ac() {
	document.getElementById("display").innerHTML ='';
	document.getElementById("displaytop").innerHTML ='';
}

function back(){
	var display = document.getElementById('display').innerHTML;document.getElementById('display').innerHTML = display.substring(0, display.length -1);

}

// variaveis do display timer 
const hourEl = document.querySelector(".hour");
const minutoEl = document.querySelector(".minute");
const displayEl = document.querySelector(".display");


//dislplay hora e minuto
const updateTime =() => {
	const currentTime = new Date();

	const currentHour = currentTime.getHours();
	const currentMinute = currentTime.getMinutes();

	hourEl.textContent = currentHour.toString();
	minutoEl.textContent = currentMinute.toString().padStart (2, '0');
}
setInterval ( updateTime, 1000);
updateTime ();