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
var notWorking;

var wthatIsYourGenderDimension = confirm('Если вы мужчина, нажмите - "ОК", в противном случае - "Отмена"');

(wthatIsYourGenderDimension > 0) ?
yourGenderDimension = "Мужской" : yourGenderDimension = "Женский";

var yourGenderDimension = "Мужской";

(yourAge > 62) ?
notWorking = "Да" : notWorking = "Нет"

var yourGenderDimension = "Женский";

(yourAge > 57) ?
notWorking = "Да" : notWorking = "Нет"


alert(`ваше ФИО: ${wthatIsYourFullName}
ваш возраст в годах: ${yourAge}
ваш возраст в днях: ${yourAgeInDays}
через 5 лет вам будет: ${inFiveYears}
ваш пол: ${yourGenderDimension}
вы на пенсии: ${notWorking}`);