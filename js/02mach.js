          // массивы
//const friends = ['mango', 'kiwi', 'poly', 'ajex'];
//console.table(friends);

//friends[1] = 'dolly';
//friends[3] =1234;
//console.table(friends);
//console.log(friends[0]);
//const lastIndex = friends.length - 1;

/*for( let i = 0; i <=lastIndex; i +=1) {
  console.log(friends[i]);
};*/


//const lastIndex = friends.length - 1;
//console.log(lastIndex);

/*const a = [1, 2, 3];
const b = a;

console.log('a', a);
console.log('b', b);

a[0] = 500;
console.log('a', a);
console.log('b', b);
console.log(a === b);*/

//Написать скрипт, который запрашивает 2 числа, 
//
//начало и конец диапазона, и 
//в результате выдаёт сумму всех нечетных чисел в этом диапазоне.



/*Дано произвольное целое число n. Написать программу, которая
разбивает число n на цифры и выводит их на экран;
подсчитывает сколько цифр в числе n;
находит сумму цифр числа n;
меняет порядок цифр числа n на обратный.
Пример: ввожу число 123
цифр в числе = 3
сумма = 6(это значение получили следующим образом 1+2+3)
обратный порядок = 321
*/

// Переменная lang может принимать 2 значения: 'ru' 'en'.
//  Если она имеет значение 'ru', то в переменную arr запишем строку из дней недели на русском языке, 
//  а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case.

// "пн, вт, ср, чт, пт, сб, вс"
// "mn, ts, wd, th, fr, st, sn"

// let lang = prompt('введите ru или en');
// const lan1 ='ru';
// const lan2 ='en';
// let arr = '';

// if (lang === lan1) {
//   arr = "пн, вт, ср, чт, пт, сб, вс";
// } else if (lang === lan2) {
//   arr = "mn, ts, wd, th, fr, st, sn";
// }
  
// alert(arr);

// switch (lang) {
//   case lan1:
//     arr = "пн, вт, ср, чт, пт, сб, вс";
//     break;
//   case lan2:
//     arr = "mn, ts, wd, th, fr, st, sn";
//     break;
//   default:
//     lang;
//     break;


// }
//alert(arr);  

//Задачи (Lesson 1)1.Вывести на экран первых 10 чисел, кратных 7 (которые делятся на 7).

// 7.	Определить, кем является человек: дошкольник(0 - 6),
//   ученик(6 - 17), студент(17 - 23) и т.д.

// const age = Math.random() * 30;
// let person = '';
// if (age > 0 && age < 6) {
//   console.log('дошкольник');

// } else if (age > 6 && age < 17) {
//   console.log('ученик');
// } else if (age > 17 && age < 23) {
//   console.log('студент');
// } else {console.log('все остальные')};

// 12.	 В компьютер поступают результаты соревнований по плаванию для трех спортсменов.
// Выбрать и вывести лучший результат.

//const b = prompt('sss');
//const a = confirm('ddddd');
// console.log(a);
//alert('message');

// Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора определения типа убедитесь, что переменных принадлежат типам: string, number, boolean.

// const str = ('Привет');
// console.log(typeof str);
// const num = (123);
// console.log(typeof num);
// const flag = (true);
// console.log(typeof flag);
// const txt = ("true");
// console.log(typeof txt);

// Создайте переменные a1, a2, a3, a4, a5.При помощи математических операторов(сложение, вычитание и т.д.)
// найдите значения выражений:
// 5 + 3,
// 5 - 3,
// 5 * 3,
// 5 / 3,
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'   
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

//  let a1 = 75 + 'kg';
//  console.log(a1);

// Напишите скрипт, который находит площадь прямоугольника высота 23см. 
// (в числовую переменную height), шириной 10см(в числовую переменную width),
//   значение площади должно хранится в числовой переменной s.

// 1. создать var
// const height = (23);
// const width = (10);


// let s;
// s = (height * width);
// console.log(s);

// У прямоугольного треугольника две стороны n(со значением 3) и m(со значением 4).
// Найдите гипотенузу k по теореме Пифагора(нужно использовать функцию Math.pow(число, степень) или 
// оператор возведения в степень ** ).
// const n = 3;
// const m = 4;
// let k = Math.pow(3, 2) + Math.pow(4, 2);
// console.log(Math.sqrt(k));

// Даны размер ипотечного кредита(S — 2 млн.руб), процентная ставка(p  — 10 %), кол - во лет(years — 5).
// Найти переплату по кредиту, значение переплаты должно содержаться в переменной perepl.
// const credit = 2000000;
// const peny = 0.1;
// const years = 5;

// let persent = (peny * 100) / 0.1;
// console.log(persent);
// let persentYears = (persent * 12) * 5;
// console.log(persentYears);

// Создайте переменные m и n. В m поместите произвольное числовое значение.
// Напишите оператор ветвления if так, чтобы если m было больше 50,
//   то в переменную n помещалось слово «большое», иначе — слово «маленькое».

// const m = 70;
// let n = '';

// if (m > 50) {
//   n = ('большое');
//   console.log(n);
// } else {
//   console.log('маленькое')
// };

//Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
// let counter = 45;
// while (counter <= 67) {
//   console.log('counter:', counter);
//   counter += 1;
// }

//Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.
// let counter = 45;
// while (counter <= 670) {
//   console.log( counter);
//   counter += 10;
// }

// Напишите скрипт, который используя оператор for выполнит два предыдущих задания.
// let counter1 = 67;
// let counter2 = 670;


// for (let i = 45; i < counter1; i += 1) {
//   console.log(i);
// }

          // МАССИВЫ //

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// const numbers = [1, 2, 3];

//  for (let i = 0; i < 5; i += 1) {
//   numbers.push(`label-${i}`);
//  }
// for (const number of numbers) 
  
//   console.log('numbers: ', numbers);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total);  


//напишите скрипт поиска самого большого числа в массиве, при условии что числа уникальны.
// const numbers = [25, 36, 8, 11, 17, 31, 55];
// let biggestNum = numbers[0];


// for (const number of numbers) {
  
//   if (number > biggestNum) {
//     biggestNum = number;
//   }
// }
// console.log('biggestNum: ', biggestNum);

// Напиши скрипт, который объединяет все элементы массива в одно строковое значение.Напиши.
// Элементов может быть произвольное количество, разделенных запятой.

// 1. Метод for:
//метод не деструктивный, потому что не изменяет то на чем он вызывается, а возвращает новую копию, 
//чтобы это исправить записываем строку : string = string.slice(0, string.length - 1)
/*const friends = ['mango', 'polly', 'jessy', 'george'];
let string = '';
for (const friend of friends) {
  string += friend + ',';
}*/
//string = string.slice(0, string.length   -- новая строка
//console.log(string.slice(0, string.length - 1));
//console.log(string); // если убрать длину...

// 2. Метод массива join:
// const friends = ['mango', 'polly', 'jessy', 'george'];

// const string = friends.join(',');
// console.log(string);

//Напиши скрипт, который заменяет регистр каждого символа на противоположный.
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);
  
//   const isEqual = letter === letter.toLowerCase();
  
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
  
// }
// console.log('invertedString: ', invertedString);

// const message = 'Welcome to Bahamas!';

// console.log(message.split(''));

// последовательность фибоначи
// let firstNum = 1;
// let secondNum = 0;
// let total;


// for (let i = 0; i < 55; i += 1) {
//   total = firstNum + secondNum;
//   firstNum = secondNum;
//   secondNum = total;
//   console.log(total);
// }

//создать строку, а потом разбить эту строку на массив по запятой.

// const string1 = prompt('ввести строку и разбить ее');
// if (string1 !== null) {
//   let arr = string1.split(',');
  
//   console.log(arr);
//   console.log(arr.join(','));
// }


//делаем slug в URL из названия строки( например на dev.to)
//заголовок статьи состоит из букв и пробелов
//должен получиться такой slug: 'Привет-заходите-к-нам-на-огонек'
//const title = 'Привет Заходите к нам на ОгонеК';
//первый метод
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);
//второй метод
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);


// Напиши функцию filterArray(numbers, value),
//   которая принимает массив чисел(параметр numbers) и возвращает новый массив,
//   в котором будут только те элементы массива numbers,
//     которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let sumArray = [];
//   //1. перебрать массив
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       sumArray.push(numbers[i]);
//     }
//   }
//   // 2. сравнить с value
//   // 3. проверить на совпадения
//   // 4. вывести совпадения
//   // 5. вернуть результат функции
//   return sumArray;
// } console.log(filterArray([1, 2, 3, 1, 2, 3], 1));

// function filterArray(numbers, value) {
//   let sumArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       sumArray.push(number);
//     }
//   }
//   return sumArray;
// } console.log(filterArray([1, 2, 3, 4, 5], 3)); 
 
// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
    


// return [array[0],array[length - 1]];
//     // Пиши код выше этой строки
// }
//   console.log(array);

//============ОБЪЕКТЫ===========================
// let name = 'Resort Hotel';
// let stars = 5;

// const hotel = {
//   name,
//   stars,
//   capacity: 100,
// };

// console.log(hotel);

// const key = 'person';
// const object = {};

// object[key] = 'Mango';
// console.log(object);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
// const entries = Object.entries(hotel);

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }


//найти в массиве чисел, четные числа и вывести их в новом массиве.

// const array = [1, 4, 5, 8];
// const newArray = [];
// for (const array1 of array) {
//   if (array1 % 2 === 0) {
//     newArray.push(array1);
//   }
// }console.log(newArray);


