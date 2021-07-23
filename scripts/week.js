//CurrentWeek
// Date.prototype.getWeek = function () {
//   var onejan = new Date(this.getFullYear(), 0, 1);
//   var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
//   var dayOfYear = (today - onejan + 86400000) / 86400000;
//   return Math.ceil(dayOfYear / 7);
// };

// var today = new Date();
// var currentWeekNumber = today.getWeek();
// console.log('Semana: ' + currentWeekNumber);

// Start week
// SEGUNDA FEIRA
function dayOneOfWeek(date) {
  var dayOneWeek = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  return new Date(date.setDate(dayOneWeek));
}
dt = new Date();
let diaUmSemana = document.querySelector("#dayOneOfWeek").innerHTML = dayOneOfWeek(dt).getDate();


// diaUmSemana.innerHTML = dayOneOfWeek(dt).getDate();
// let nomeDiaSemanaUm = document.querySelector("#nameOfWeekDayOne");
// let diaUmDaSemana = dayOneOfWeek(dt).getDay();
// switch (diaUmDaSemana) {
//   case 0:
//     nomeDiaSemanaUm.innerHTML = "Dom";
//     break;
//   case 1:
//     nomeDiaSemanaUm.innerHTML = "Seg";
//     break;
//   case 2:
//     nomeDiaSemanaUm.innerHTML = "Ter";
//     break;
//   case 3:
//     nomeDiaSemanaUm.innerHTML = "Qua";
//     break;
//   case 4:
//     nomeDiaSemanaUm.innerHTML = "Qui";
//     break;
//   case 5:
//     nomeDiaSemanaUm.innerHTML = "Sex";
//     break;
//   case 6:
//     nomeDiaSemanaUm.innerHTML = "Sab";
//     break;

//   default:
//     break;
// }
// TERÇA FEIRA
function dayTwoOfWeek(date) {
  var dayTwoWeek =
    date.getDate() - date.getDay() + (date.getDay() === 0 ? -5 : 2);
  return new Date(date.setDate(dayTwoWeek));
}
dt = new Date();
let diaDoiSemana = document.querySelector("#dayTwoOfWeek").innerHTML = dayTwoOfWeek(dt).getDate();
// diaDoiSemana.innerHTML = dayTwoOfWeek(dt).getDate();
// let nomeDiaSemanaDois = document.querySelector("#nameOfWeekDayTwo");
// let diaDoisDaSemana = dayOneOfWeek(dt).getDay() + 1;
// switch (diaDoisDaSemana) {
//   case 0:
//     nomeDiaSemanaDois.innerHTML = "Dom";
//     break;
//   case 1:
//     nomeDiaSemanaDois.innerHTML = "Seg";
//     break;
//   case 2:
//     nomeDiaSemanaDois.innerHTML = "Ter";
//     break;
//   case 3:
//     nomeDiaSemanaDois.innerHTML = "Qua";
//     break;
//   case 4:
//     nomeDiaSemanaDois.innerHTML = "Qui";
//     break;
//   case 5:
//     nomeDiaSemanaDois.innerHTML = "Sex";
//     break;
//   case 6:
//     nomeDiaSemanaDois.innerHTML = "Sab";
//     break;

//   default:
//     break;
// }
// QUARTA FEIRA
function dayThreeOfWeek(date) {
  var dayThreeWeek =
    date.getDate() - date.getDay() + (date.getDay() === 0 ? -4 : 3);
  return new Date(date.setDate(dayThreeWeek));
}
dt = new Date();
let diaTresSemana = document.querySelector("#dayThreeOfWeek").innerHTML = dayThreeOfWeek(dt).getDate();
// diaTresSemana.innerHTML = dayThreeOfWeek(dt).getDate();
// let nomeDiaSemanaTres = document.querySelector("#nameOfWeekDayThree");
// let diaTresDaSemana = dayOneOfWeek(dt).getDay() + 2;
// switch (diaTresDaSemana) {
//   case 0:
//     nomeDiaSemanaTres.innerHTML = "Dom";
//     break;
//   case 1:
//     nomeDiaSemanaTres.innerHTML = "Seg";
//     break;
//   case 2:
//     nomeDiaSemanaTres.innerHTML = "Ter";
//     break;
//   case 3:
//     nomeDiaSemanaTres.innerHTML = "Qua";
//     break;
//   case 4:
//     nomeDiaSemanaTres.innerHTML = "Qui";
//     break;
//   case 5:
//     nomeDiaSemanaTres.innerHTML = "Sex";
//     break;
//   case 6:
//     nomeDiaSemanaTres.innerHTML = "Sab";
//     break;

//   default:
//     break;
// }

// QUINTA FEIRA
function dayFourOfWeek(date) {
  var dayFourWeek =
    date.getDate() - date.getDay() + (date.getDay() === 0 ? -3 : 4);
  return new Date(date.setDate(dayFourWeek));
}
dt = new Date();
let diaQuatroSemana = document.querySelector("#dayFourOfWeek").innerHTML = dayFourOfWeek(dt).getDate();
// diaQuatroSemana.innerHTML = dayFourOfWeek(dt).getDate();
// let nomeDiaSemanaQuatro = document.querySelector("#nameOfWeekDayFour");
// let diaQuatroDaSemana = dayOneOfWeek(dt).getDay() + 3;
// switch (diaQuatroDaSemana) {
//   case 0:
//     nomeDiaSemanaQuatro.innerHTML = "Dom";
//     break;
//   case 1:
//     nomeDiaSemanaQuatro.innerHTML = "Seg";
//     break;
//   case 2:
//     nomeDiaSemanaQuatro.innerHTML = "Ter";
//     break;
//   case 3:
//     nomeDiaSemanaQuatro.innerHTML = "Qua";
//     break;
//   case 4:
//     nomeDiaSemanaQuatro.innerHTML = "Qui";
//     break;
//   case 5:
//     nomeDiaSemanaQuatro.innerHTML = "Sex";
//     break;
//   case 6:
//     nomeDiaSemanaQuatro.innerHTML = "Sab";
//     break;

//   default:
//     break;
// }

// SEXTA FEIRA
function dayFiveOfWeek(date) {
  var dayFiveWeek =
    date.getDate() - date.getDay() + (date.getDay() === 0 ? -2 : 5);
  return new Date(date.setDate(dayFiveWeek));
}
dt = new Date();
let diaCincoSemana = document.querySelector("#dayFiveOfWeek").innerHTML = dayFiveOfWeek(dt).getDate();
// diaCincoSemana.innerHTML = dayFiveOfWeek(dt).getDate();
// let nomeDiaSemanaCinco = document.querySelector("#nameOfWeekDayFive");
// let diaCincoDaSemana = dayOneOfWeek(dt).getDay() + 4;

// switch (diaCincoDaSemana) {
//   case 0:
//     nomeDiaSemanaCinco.innerHTML = "Dom";
//     break;
//   case 1:
//     nomeDiaSemanaCinco.innerHTML = "Seg";
//     break;
//   case 2:
//     nomeDiaSemanaCinco.innerHTML = "Ter";
//     break;
//   case 3:
//     nomeDiaSemanaCinco.innerHTML = "Qua";
//     break;
//   case 4:
//     nomeDiaSemanaCinco.innerHTML = "Qui";
//     break;
//   case 5:
//     nomeDiaSemanaCinco.innerHTML = "Sex";
//     break;
//   case 6:
//     nomeDiaSemanaCinco.innerHTML = "Sab";
//     break;

//   default:
//     break;
// }

// SABADO
function daySixOfWeek(date) {
  var daySixWeek =
    date.getDate() - date.getDay() + (date.getDay() === 0 ? -1 : 6);
  return new Date(date.setDate(daySixWeek));
}
dt = new Date();
let diaSeisSemana = document.querySelector("#daySixOfWeek").innerHTML = daySixOfWeek(dt).getDate();
// diaSeisSemana.innerHTML = daySixOfWeek(dt).getDate();
// let nomeDiaSemanaSeis = document.querySelector("#nameOfWeekDaySix");
// let diaSeisDaSemana = dayOneOfWeek(dt).getDay() + 5;

// switch (diaSeisDaSemana) {
//   case 0:
//     nomeDiaSemanaSeis.innerHTML = "Dom";
//     break;
//   case 1:
//     nomeDiaSemanaSeis.innerHTML = "Seg";
//     break;
//   case 2:
//     nomeDiaSemanaSeis.innerHTML = "Ter";
//     break;
//   case 3:
//     nomeDiaSemanaSeis.innerHTML = "Qua";
//     break;
//   case 4:
//     nomeDiaSemanaSeis.innerHTML = "Qui";
//     break;
//   case 5:
//     nomeDiaSemanaSeis.innerHTML = "Sex";
//     break;
//   case 6:
//     nomeDiaSemanaSeis.innerHTML = "Sab";
//     break;

//   default:
//     break;
// }

// DOMINGO
function daySevenOfWeek(date) {
  var daySevenWeek =
    date.getDate() - date.getDay() + (date.getDay() === 0 ? 0 : 7);
  return new Date(date.setDate(daySevenWeek));
}
// dt = new Date();
let diaSeteSemana = document.querySelector("#daySevenOfWeek").innerHTML = daySevenOfWeek(dt).getDate();
// diaSeteSemana.innerHTML = daySevenOfWeek(dt).getDate();
// let nomeDiaSemanaSete = document.querySelector("#nameOfWeekDaySeven");
// let diaSeteDaSemana = dayOneOfWeek(dt).getDay() - 1;

// switch (diaSeteDaSemana) {
//   case 0:
//     nomeDiaSemanaSete.innerHTML = "Dom";
//     break;
//   case 1:
//     nomeDiaSemanaSete.innerHTML = "Seg";
//     break;
//   case 2:
//     nomeDiaSemanaSete.innerHTML = "Ter";
//     break;
//   case 3:
//     nomeDiaSemanaSete.innerHTML = "Qua";
//     break;
//   case 4:
//     nomeDiaSemanaSete.innerHTML = "Qui";
//     break;
//   case 5:
//     nomeDiaSemanaSete.innerHTML = "Sex";
//     break;
//   case 6:
//     nomeDiaSemanaSete.innerHTML = "Sab";
//     break;

//   default:
//     break;
// }

let boxDayOne = document.querySelector("#dayOne");
let boxDayTwo = document.querySelector("#dayTwo");
let boxDayThree = document.querySelector("#dayThree");
let boxDayFour = document.querySelector("#dayFour");
let boxDayFive = document.querySelector("#dayFive");
let boxDaySix = document.querySelector("#daySix");
let boxDaySeven = document.querySelector("#daySeven");

myDate = new Date();
diaSemana = myDate.getDay() - 1;

let presentDayWeek = dayOneOfWeek(dt).getUTCDay() + diaSemana;
switch (presentDayWeek) {
  case 0:
    boxDaySeven.classList.add("diaAtual");
    boxDaySeven.classList.remove("text-gray-400");
    break;
  case 1:
    boxDayOne.classList.add("diaAtual");
    boxDayOne.classList.remove("text-gray-400");
    break;
  case 2:
    boxDayTwo.classList.add("diaAtual");
    boxDayTwo.classList.remove("text-gray-400");
    break;
  case 3:
    boxDayThree.classList.add("diaAtual");
    boxDayThree.classList.remove("text-gray-400");
    break;
  case 4:
    boxDayFour.classList.add("diaAtual");
    boxDayFour.classList.remove("text-gray-400");
    break;
  case 5:
    boxDayFive.classList.add("diaAtual");
    boxDayFive.classList.remove("text-gray-400");
    break;
  case 6:
    boxDaySix.classList.add("diaAtual");
    boxDaySix.classList.remove("text-gray-400");
    break;

  default:
    break;
  }
  
  // let presentDayOfWeek = dayOneOfWeek(dt).getDay();
  // console.log(dayOneOfWeek(dt).getUTCDay());
  // console.log(dayTwoOfWeek(dt).getUTCDay());
  // console.log(dayThreeOfWeek(dt).getUTCDay());
  // console.log(dayFourOfWeek(dt).getUTCDay());
  // console.log(dayFiveOfWeek(dt).getUTCDay());
  // console.log(daySixOfWeek(dt).getUTCDay());
  // console.log(daySevenOfWeek(dt).getUTCDay());
  // console.log(presentDayWeek = dayOneOfWeek(dt).getDay());
  
  
 