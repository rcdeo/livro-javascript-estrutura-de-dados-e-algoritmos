// @ts-check
/* eslint-disable */

/* Operadores Aritméticos */

var num = 0; // {1}
console.log('num value is ' + num);

num = num + 2;
console.log('New num value is ' + num);

num = num * 3;
console.log('New num value is ' + num);

num = num / 2;
console.log('New num value is ' + num);

num++;
num--;

console.log('New num value is ' + num);

console.log('num mod 2 value is ' + (num % 2));

/* Operadores de Atribuição */

num += 1; // {2}
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('New num value is ' + num);

/* Operadores de Comparação */

console.log('num == 1 : ' + (num == 1)); // {3}
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

/* Operadores Lógicos */
console.log('true && false : ' + (true && false)); // {4}
console.log('true || false : ' + (true || false));
console.log('!true : ' + !true);

/* Operadores Bit a Bit (bitwise) */
console.log('5 & 1:', 5 & 1); // same as 0101 & 0001 (result 0001 / 1)
console.log('5 | 1:', 5 | 1); // same as 0101 | 0001 (result 0101 / 5)
console.log('~ 5:', ~5); // same as ~0101 (result 1010 / -6)
console.log('5 ^ 1:', 5 ^ 1); // same as 0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', 5 << 1); // same as 0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', 5 >> 1); // same as 0101 >> 1 (result 0010 / 2)

/* typeOf */
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name:John}:', typeof { name: 'John' });

/* delete */
var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj); // exibe Object {name: "John"}
