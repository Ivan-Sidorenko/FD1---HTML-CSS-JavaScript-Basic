//test
"use strict";

var wthatIsYourName = prompt('Ваше имя?'); //Имя
var wthatIsYourSurname = prompt('Ваша фамилия?'); //Фамилия
var wthatIsYourPatronymic = prompt('Ваше отчество?'); //Отчество
var spaceUni = "\u0020"; //Пробел
var wthatIsYourFullName = wthatIsYourSurname + spaceUni + wthatIsYourName + spaceUni + wthatIsYourPatronymic; //ФИО
var wthatIsYourAge = prompt('Сколько вам лет?'); //Возраст в годах
var yourAge = parseInt(wthatIsYourAge)
var oneYear = 365;
var yourAgeInDays = oneYear * yourAge;
var inFiveYears = 5 + yourAge;
var yourGenderDimension;
var wthatIsYourGenderDimension = confirm('Если вы мужчина, нажмите - "ОК", в противном случае - "Отмена"');

if (wthatIsYourGenderDimension > 0) {
    yourGenderDimension = "Мужской";
    if (yourAge > 63)
        var notWorking = "Да";
    else
        notWorking = "Нет";
} else {
    yourGenderDimension = "Женский";
    if (yourAge > 58)
        var notWorking = "Да";
    else
        notWorking = "Нет";
    }



alert(`ваше ФИО: ${wthatIsYourFullName}
ваш возраст в годах: ${yourAge}
ваш возраст в днях: ${yourAgeInDays}
через 5 лет вам будет: ${inFiveYears}
ваш пол: ${yourGenderDimension}
вы на пенсии: ${notWorking}`);