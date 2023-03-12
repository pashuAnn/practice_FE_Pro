// Выведите с помощью цикла столбец чисел от 1 до 100.
for(let i = 1; i <= 100; i++) {
    console.log(i);
}
// Выведите с помощью цикла столбец чисел от 100 до 1.
for (let i = 100; i >= 1; i--){
    console.log(i);
}
// Выведите с помощью цикла столбец четных чисел от 1 до 100
for(let i = 2; i <= 100; i += 2){
    console.log(i);
}
//Заполните массив 10-ю иксами с помощью цикла
let arr = []
for(let i = 0; i < 10; i++){
    arr[i] = 'x';
}
console.log(arr);
// Заполните массив числами от 1 до 10 с помощью цикла
let arr1 = []
for(let i = 1; i <= 10; i++){
    arr1.push(i)
}
console.log(arr1);

//Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части




//напишите функцию любую //напишите функцию любую и вызовите ее
function name(){
    console.log('Hello');
}
name()

//напишите функцию которая возвращает строку
function test(){
    return "Great Britain"
}
console.log(test());

//напишите функцию которая возвращает возраст ваш
// function age(){
//  const my_age = prompt ('Write your age')
//  return my_age
// }
// const result = age()
// console.log(result);

//напишите функцию которая возвращает ваше имя и прибавляет к нему слово “Красавчик/ица”)
function name(name){
    const name_and_comp = name + " Красавиц "
    return name_and_comp
}
console.log(name("Паша"))

//напишите функцию которая возвращает ваше имя, прибавляет к нему слово “Красавчик/ица” и прибавляет к этой строке цифру, которую мы тоже передаем в функцию снаружи через аргумент
function name(name, age){
    const name_and_comp = name + " Красавиц " + age
    return name_and_comp
}
console.log(name("Паша", 28))

//напишите функцию без аргументов и сохраните ее в переменную а потом сделайте вызов функции из переменной
functionTemp = function(){
    console.log("temp of function");
}
functionTemp()