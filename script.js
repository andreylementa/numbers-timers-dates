'use strict';

//////////////////////////////////////////////////
// Преобразование И Проверка Чисел

// console.log(10 === 10.0);

// // 10 - 0-9; 1 / 10 = 0.1; 10 / 3 = 3.33333333
// // 2 - 0, 1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // Converting strings to numbers
// console.log(Number('11'));
// console.log(+'11');
// console.log('11');

// // Parsing numbers from string
// console.log(Number.parseInt('20%', 10));
// console.log(Number.parseInt('1011%', 2)); // 1011 -> 1 * 2 ** 0 + 1 * 2 ** 1 + 0 * 2 ** 2 + 1 * 2 ** 3 -> 1 + 2 + 0 + 8 -> 11
// console.log(Number.parseInt('s20', 10));
// console.log(Number.parseFloat('9.7kg'));
// console.log(Number.parseInt('9.7kg'));
// console.log(parseInt('9.7kg'));

// // Other methods from Number namespace
// console.log(Number.isNaN(111));
// console.log(Number.isNaN('111'));
// console.log(Number.isNaN(Number.parseInt('s20', 10)));
// console.log(+'20s');
// console.log(Number.isNaN(+'20s'));
// console.log(11 / 0);
// console.log(Number.isNaN(11 / 0));

// console.log('-------------');

// // Check if the value is finite number
// console.log(Number.isFinite(111));
// console.log(Number.isFinite('111'));
// console.log(Number.isFinite('111%'));
// console.log(Number.isFinite(+'111$'));
// console.log(Number.isFinite(11 / 0));

//////////////////////////////////////////////////
// Работа с Math

// console.log(Math.sqrt(9));
// console.log(9 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(3, 55, 66, 44, 31, 2, 9));
// console.log(Math.max(3, '55', '66', 44, 31, 2, 9));
// console.log(Math.max(3, '55%', '66%', 44, 31, 2, 9));
// console.log(Math.min(3, 55, 66, 44, 31, 2, 9));

// console.log(Math.PI);
// console.log(Math.PI * Number.parseInt('20px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// console.log(Math.trunc(1.99));

// console.log(Math.round(1.99));
// console.log(Math.round(1.39));

// console.log(Math.ceil(1.99));
// console.log(Math.ceil(1.39));

// console.log(Math.floor('1.99'));
// console.log(Math.floor(1.39));

// console.log(Math.trunc(-1.11));
// console.log(Math.floor(-1.11));

// console.log(Math.PI);
// console.log(Math.PI.toFixed(2));
// console.log(+(1.34567).toFixed(2));

//////////////////////////////////////////////////
// Оператор Остаток

// console.log(7 % 3); // 7 = 3 * 2 + 1
// console.log(7 % 4); // 7 = 4 * 1 + 3

// console.log(8 % 2);
// console.log(108 % 2);
// console.log(8564 % 2);

// console.log(9 % 2);
// console.log(89 % 2);
// console.log(881 % 2);

// const isNumberOdd = x => x % 2 !== 0;
// console.log(isNumberOdd(5));
// console.log(isNumberOdd(7));
// console.log(isNumberOdd(6));
// console.log(isNumberOdd(10));
