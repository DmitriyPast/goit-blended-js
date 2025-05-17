

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
let i = 0;
do {
    console.log(i++);
} while (i <= 20) 
    
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
function getNumbers(min, max) {
    let sum = 0;
        if (min > max) {
            console.log('ARE YOU TRYING TO KILL ME!?');
            throw "min > max.";
            return -1;
        }
    for (let i = max; i >= min; i--) {
        console.log(`i: ${i}`);
        !(i % 2) ? sum += i : {};
    }
    console.log(`sum: ${sum}`);
}
getNumbers(20, 22);

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
min = function min(a, b) {
    // console.log(b - a);
    if (isNaN(a) || isNaN(b)) return 'Not a number!';
    return b - a >= 0 ? a : b;
}
console.log(`min: ${min(9, 'pee')}`);
console.log(`min: ${min(9, 5)}`);

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).
function isAdult(age) {
    return age >= 18? true : confirm('Підтвердити?'); 
}
console.log(`isAdult(15): ${isAdult(15)}`);
console.log(`isAdult(18): ${isAdult(18)}`);
console.log(`isAdult(22): ${isAdult(22)}`);

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        const fizz = !(i % 3) ? 'fizz' : '';
        const buzz = !(i % 5) ? 'buzz' : '';
        console.log(`fb@${i}: [${fizz+buzz}]`);
    }
}
fizzBuzz(49);