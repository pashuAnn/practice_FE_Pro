//Задание 1: 
//Написать функцию стрелочную - которая ничего не далает и назвать ее

const newFunction_arrow = () => {}

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
const min = (a,b) => a < b ? a : b;
console.log(min(23,35));

const min1 = (a,b) => a <= b  ? a : b;
console.log(min1(23,23));

//Задание номер 3:

//Написать функцию - которая вернет слово большее по количеству букв. Стрелочная. Принимать в качестве аргументов она должна 2 слова

const biggerWord = (word1, word2) => word1.length > word2.length ? word1 : word2;

console.log(biggerWord ("Function", "cycle"));

//Задание 4:

//Написать функцию. Стрелочную. Принимает аргементом строку - пароль. Возвращает true если пароль длинее или равен 7 символам. Иначе возвращает false

const checkPass = (pass) => pass.length >= 7;
console.log(checkPass("67776778678"));

