let fullDate = new Date();
let mes = fullDate.getMonth();
let dia = fullDate.getDate();
let diadaSemana = fullDate.getDay();


let diaSemana = document.querySelector("#diaSemana");
diaSemana.innerHTML = diadaSemana;
let diaTxt = document.querySelector("#diaNum");
diaTxt.innerHTML = dia;
let mesTxt = document.querySelector("#mes");
mesTxt.innerHTML = mes;

if (dia <= 9) {
    diaTxt.innerHTML = '0' + dia;
}

switch (mes) {
    case 0:
        mesTxt.innerHTML = 'JAN';
      break;
    case 1:
        mesTxt.innerHTML = 'FEV';
      break;
    case 2:
        mesTxt.innerHTML = 'MAR';
      break;
    case 3:
        mesTxt.innerHTML = 'ABR';
      break;
    case 4:
        mesTxt.innerHTML = 'MAI';
      break;
    case 5:
        mesTxt.innerHTML = 'JUN';
      break;
    case 6:
        mesTxt.innerHTML = 'JUL';
      break;
    case 7:
        mesTxt.innerHTML = 'AGO';
      break;
    case 8:
        mesTxt.innerHTML = 'SET';
      break;
  
    case 9:
        mesTxt.innerHTML = 'OUT';
      break;
  
    case 10:
        mesTxt.innerHTML = 'NOV';
      break;
  
    case 11:
        mesTxt.innerHTML = 'DEZ';
      break;
  
    default:
      break;
  }

switch (diadaSemana) {
    case 0:
        diaSemana.innerHTML = 'DOM';
      break;
    case 1:
        diaSemana.innerHTML = 'SEG';
      break;
    case 2:
        diaSemana.innerHTML = 'TER';
      break;
    case 3:
        diaSemana.innerHTML = 'QUA';
      break;
    case 4:
        diaSemana.innerHTML = 'QUI';
      break;
    case 5:
        diaSemana.innerHTML = 'SEX';
      break;
    case 6:
        diaSemana.innerHTML = 'SAB';
      break;
    
    default:
      break;
  }
