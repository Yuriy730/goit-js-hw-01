//=======РАБОТА С КОЛЛЕКЦИЕЙ(МАССИВОМ ОБЪЕКТОВ)==============

//получить имена всех друзей
// const friends = [

//   { name: 'Mango', online: false },
//   { name: 'Kiwiw', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ]
// console.table(friends); //Array (4)

// const getAllNames = function (allFriends) {
//   const names = [];
  
//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(getAllNames(friends));


//посчитать количество свойств в объекте
// const x = {
//   a: 1,
//   b: 2,
//   c: 30,
//   d: 45
// }
// console.log(Object.keys(x).length);

//==========spread============================
// const temperatures = [18, 14, 12, 21, 17, 29];

// const min = Math.min(...temperatures);
// console.log(min);

// const a = { x: 20, y: 20 };
// const b = { x: 0, y: 10, z: 3 };

// const c = { ...a, ...b };
// console.log(c); // {x: 0, y: 10, z: 3}

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
// apartment[owner] name:'Генри', phone: '982-126-1588', email: 'henry.carter@aptmail.com'];


// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');

// console.log(apartment);

// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка 'Ямайка';
// city - город, строка 'Кингстон'.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Ямайка',
//   city: 'Кингстон'
// };

//   console.log(apartment);

// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password,
//   имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка 'henry.carter@aptmail.com',
//   а значением свойства password - строка 'jqueryismyjam'.
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
  
//   [ emailInputName ]:  'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
  
// };
// console.log(credentials);

// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи,
//   а в массив values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
  
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(keys);
//   console.log(values);
// }


// console.log(apartment);
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   // Пиши код ниже этой строк
//   const arr = [];
//   for (const item of products) {
//     let keys = Object.keys(item);
//     console.log('keys', keys);
//     console.log(keys.includes(propName));
//     if (Object.keys(item).includes(propName)) {
//       arr.push(item[propName]);
//     }
//     // console.log(Object.keys(item));
//   }
//   return arr;
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('price'));


// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
//  Перебери массив объектов colors используя цикл for...of.Добавь в массив hexColors значения свойств hex,
//  а в массив rgbColors значения свойств rgb из всех объектов массива colors.
// const hexColors = [];
// const rgbColors = [];
// Пиши код ниже этой строки
// for(const color of colors) {
//   hexColors.push('hex');
//   rgbColors.push('rgb');
// };
// console.log(hexColors);

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   {name: 'Радар', price: 1300, quantity: 4},
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (product of products) {
//     if (product.name === productName) {
      
//       return product.price;
//     }  
//   } return null;
  
  
// }  
  // Пиши код выше этой строки}
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем,
//   функция должна вернуть пустой массив.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const totalProd = [];
//   for(const product of products) {
//     let keys = Object.keys(product);
//     if (Object.keys(product).includes(propName));
    
//     return product.keys;
    
//   }  
  
//   return totalProd;
//   // Пиши код выше этой строки
// }

//3-41
// const atTheOldToad = {
//     potions: [
//         { name: 'Зелье скорости', price: 460 },
//         { name: 'Дыхание дракона', price: 780 },
//         { name: 'Каменная кожа', price: 520 },
//     ],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//         this.potions.push(potionName);
//     },
//     removePotion(potionName) {
//         let potions = this.potions;
//         for (let i = 0; i < potions.length; i += 1) {
//             if (potions[i].name === potionName) {
//                 potions.splice(i, 1);
//                 break;
//             };
//         };
//     },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//                 break;
//             };
//         };
//     },
// };

//ЗАДАЧА 20, МОДУЛЬ 3.
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

// let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName)
//   totalPrice = product.price * product.quantity;
//   }
// return totalPrice;
    

//   // Пиши код выше этой строки
// } console.log(calculateTotalPrice('Дроид'));


// ============Деструктуризация====================

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {
//   today: {high: highToday, low :lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',},
//   tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',},

// } = forecast;

function calculateMeanTemperature(forecast) {
  const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;

  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

