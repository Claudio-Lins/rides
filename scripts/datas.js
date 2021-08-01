let fullDate = new Date();
let ano = fullDate.getFullYear();
let mes = fullDate.getMonth();
let dia = fullDate.getDate() <= 9 ? "0" + fullDate.getDate() : fullDate.getDate();
let diadaSemana = fullDate.getDay();
let hora = fullDate.getHours() <= 9 ? "0" + fullDate.getHours() : fullDate.getHours();

var min = setInterval(minutos, 1000);
function minutos() {
  let m = new Date();
  let minuto = m.getMinutes();
  if (minuto <= 9) {
    document.querySelector("#minuto").innerHTML = "0" + minuto;
  } else {
    document.querySelector("#minuto").innerHTML = minuto;
  }
}
var seg = setInterval(segundos, 1000);
function segundos() {
  let s = new Date();
  let segundo = s.getSeconds();
  if (segundo <= 9) {
    document.querySelector("#segundo").innerHTML = "0" + segundo;
  } else {
    document.querySelector("#segundo").innerHTML = segundo;
  }
}

// let diaSemana = document.querySelector("#diaSemana");
// diaSemana.innerHTML = diadaSemana;
// let diaTxt = document.querySelector("#diaNum");
// diaTxt.innerHTML = dia;
let anoTxt = document.querySelector("#ano");
anoTxt.innerHTML = ano;
let mesTxt = document.querySelector("#mesTxt");
mesTxt.innerHTML = mes;
let horaNow = document.querySelector("#hora");
horaNow.innerHTML = hora;



// if (dia <= 9) {
//   diaTxt.innerHTML = "0" + dia;
// }

switch (mes) {
  case 0:
    mesTxt.innerHTML = "JANEIRO";
    break;
  case 1:
    mesTxt.innerHTML = "FEVEREIRO";
    break;
  case 2:
    mesTxt.innerHTML = "MARÇO";
    break;
  case 3:
    mesTxt.innerHTML = "ABRIL";
    break;
  case 4:
    mesTxt.innerHTML = "MAIO";
    break;
  case 5:
    mesTxt.innerHTML = "JUNHO";
    break;
  case 6:
    mesTxt.innerHTML = "JULHO";
    break;
  case 7:
    mesTxt.innerHTML = "AGOSTO";
    break;
  case 8:
    mesTxt.innerHTML = "SETEMBRO";
    break;
  case 9:
    mesTxt.innerHTML = "OUTUBRO";
    break;

  case 10:
    mesTxt.innerHTML = "NOVEMBRO";
    break;

  case 11:
    mesTxt.innerHTML = "DEZEMBRO";
    break;

  default:
    break;
}


console.log("ano: " + ano)
console.log("mes: " + mes)
console.log("diadaSemana: " + diadaSemana)
console.log("dia: " + dia)
console.log("hora: " + hora)