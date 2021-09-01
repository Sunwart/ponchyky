// const age = 37;
// console.log(age);

// alert('Hi there!');

// const type = typeof true;
// console.log(type);

// const shouldRenew = confirm('Should we renew your subscription?');
// console.log(shouldRenew);

// let element = prompt('Type something with number');
// const result = Number.parseFloat(element);
// console.log(result);
// const resultInt = Number.parseInt(element);
// console.log(resultInt);

// let salary = 13000.456789;
// salary = Number(salary.toFixed(2));
// console.log(salary);

// console.log(Math.PI);

// const base = 5;
// const power = 3;
// console.log(Math.pow(5, 3));
// console.log(base ** power);

// console.log(Math.sqrt(64));

// const num = prompt('Number?');
// const pow = prompt('Power for Your numbet');
// console.log(Number.parseInt(Number.parseFloat(num) ** Number.parseInt(pow)));

// console.log(Math.random());

// Math.random()*(max-min)+min

// const min = prompt('Число початку діапізону');
// const max = prompt('Число останнього значення');
// console.log('Random number is ', Math.round(Math.random() * (max - min) + min));

const colors = [
  '#fcfaed',
  '#fff6eb',
  '#ffffff',
  '#fff8f0',
  '#fffaf5',
  '#ffffff',
  '#fff7ed',
  '#fff9f2',
  '#ffffff',
  '#fff5f2',
  '#fffbfa',
  '#ffffff',
  '#fffef7',
  '#ffffff',
];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;

// const meggase = '1 3 5 7 9';
// console.log(meggase.length);

// console.log('qwe' + 'rty' + ' ' + 123);
// console.log(`2 + 3 = ${2 + 3}`);

// const brand = 'SunwArt';
// const normalizedBrand = brand.toUpperCase();
// console.log(normalizedBrand);
// debugger;
// console.log(brand.slice(4));
// console.log(normalizedBrand.slice(0, 3).toLowerCase());
// debugger;
// console.log(`${brand[0]} ${brand[1]} ${brand[2]}`);

// const isEqual = 1 == true;
// console.log(isEqual);
// const isNotEqual = 1 === true;
// console.log(isNotEqual);
