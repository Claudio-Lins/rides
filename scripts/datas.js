let fullDate = new Date();
let mes = fullDate.getMonth();
let dia = fullDate.getDate();
// let diadaSemana = fullDate.getDay();
let hora = fullDate.getHours();
// let minutos = fullDate.getSeconds();

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
let mesTxt = document.querySelector("#mes");
mesTxt.innerHTML = mes;
let horaNow = document.querySelector("#hora");
horaNow.innerHTML = hora;
// let minutoNow = document.querySelector("#minuto");
// minutoNow.innerHTML = minutos;

if (dia <= 9) {
  diaTxt.innerHTML = "0" + dia;
}

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

// switch (diadaSemana) {
//   case 0:
//     diaSemana.innerHTML = "Dom";
//     break;
//   case 1:
//     diaSemana.innerHTML = "Seg";
//     break;
//   case 2:
//     diaSemana.innerHTML = "Ter";
//     break;
//   case 3:
//     diaSemana.innerHTML = "Qua";
//     break;
//   case 4:
//     diaSemana.innerHTML = "Qui";
//     break;
//   case 5:
//     diaSemana.innerHTML = "Sex";
//     break;
//   case 6:
//     diaSemana.innerHTML = "Sab";
//     break;

//   default:
//     break;
// }

