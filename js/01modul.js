/*const x = true;
console.log(x);

console.log('before');
alert('Hello');
console.log('after');*/

/*const shouldRenew = confirm('продлить gjl?');
console.log(shouldRenew);*/

//let askAge = prompt('how old are you?');
//askAge = Number(askAge);
//console.log(typeof askAge);

//let value = 'fjfjfjf';
//value = Number(value);
//console.log(value);
/*const blockWidth1 = '300.5px';
const width = Number.parseInt(blockWidth1);

console.log(width);

const blockWidth2 = '300.5px';
const width1 = Number.parseFloat(blockWidth2);

console.log(width1);*/

//console.log(Math.floor(1.7));// 1
//console.log(Math.ceil(1.2)); // 2
//console.log(Math.round(1.2)); // 1
//console.log(Math.round(1.5)); // 2
//console.log(Math.max(20, 10, 50, 40)); // 50
//console.log(Math.min(20, 10, 50, 40)); // 10
//console.log(Math.pow(2, 4)); // 16

//console.log(Math.random()); // случайное число между 0 и 1
//console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10//

const valueA = "fjfjfjf";
//console.log(Number.parseFloat(valueA));
console.log(isNaN(valueA));
                  

                     // конкатинация строк шаблонных строк
/*const firstName = 'yuriy';
const lastName = 'kadola';
const apptment = 555;
const isStatus = 'VIP';

//я поселяюсь в номер 555 как VIP

const message = `Я ${firstName} ${lastName} поселяюсь в ${apptment} как ${isStatus}`;

console.log(message. length);*/

/*const number = 30;
const valueInRange = number < 20 || number > 10;
console.log(valueInRange);*/


/*let balance = 200;
const payment = 1000;

console.log(`Общая стоимость заказа ${payment} кредитов. Проверить остаток на счету.`)

if (balance >= payment) {
   // console.log('hello');
    balance = balance - payment;
    //balance -= payment;
    console.log('Все хорошо, снимаем деньги!');
    console.log(`на счету осталось ${balance}`);
} else {
    console.log('херня на счету'); 
}*/

                   //тернарный оператор(стоки)
/*const age = 10;
const type = age >= 18 ? 'adult' : 'child';
console.log(type);*/


//const num1 = 15;
//const num2 = 10;
//let biggerNum;

/*if (num1 > num2) {
    biggerNum = num1;
} else {
    biggerNum = num2;
}*/
//console.log(biggerNum);

//тернарный оператор(числа)
//const biggerNum = num1 > num2 ? num1 : num2;
//console.log(biggerNum);

/*function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Дополни эту строку
    message =  'Отменено пользователем!';
  } else if (password === 'jqueryismyjam') { // Дополни эту строку
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
  

  return message;
}*/

 
                     // конструкция switch
/*let cost;
const subscription = 'pro';

switch (subscription) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(cost); // 500*/
/*let price;
const stars = 4;
switch (stars) {
  case 1:
    price = 100; 
    console.log('fyfyfyfyf');
    break;
  case 2:
    price = 200;
    break;
  case 3:
    price = 300;
    break;
  case 4:
    price = 400;
    break;
  case 5:
    price = 500;
    break;
  default:
    console.log('not exist');
}

console.log(price);*/

/*const option = 5;
let message ='';
switch (option) {
  case 1:
    message = 'забрать курьером';
    break;
  case 2:
    message = 'забрать из офиса';
    break;
  case 3:
    message = 'отправить почтой';
    break;
  default:
    message ='вам перезвонят';
}
console.log(message);*/

                         //циклы
/*for (let i = 20; i >= 0; i -= 2) {
  console.log(i);
}                                                   

console.log('dhdhd');*/
              //конструкция for
/*const maxSalary = 5000;
const minSalary = 500;
const employees = 4;
let totalSalary = 0;
              
for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary,
  );
  
  console.log(`ЗП работника номер ${i} - ${salary}`);
  totalSalary += salary;
}
console.log('totalSalary:', totalSalary); */

//напиши скрипт который подсчитывает сумму всех четных чисел,
//которые входят в диапазон чисел переменных от min до макс

// const min = 0;
// const max = 7;
//  let total = 0;


// for (let i = min; i <= max; i += 1) {
//    //for от min до max с шагом в 1 
//   console.log(i)
//   //проверяем остатлк от деления
//   if (i % 2 === 0) {
//     console.log('even: ', i);
//   }
//   //пишем в сумму
//   total += i;
// }
//   console.log('total: ', total);
/*const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);

const message = `Вы заказали дроидов на сумму ${totalPrice}, кредитов. Доставка ${deliveryFee} включена в сумму заказа.`;
console.log(message);*/

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
  
// }  
// console.log(findNumber(start));