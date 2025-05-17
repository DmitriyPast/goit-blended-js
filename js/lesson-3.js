function checkForSpam(message) {
    const banWords = ["spam", "sale"];
    return message.toLowerCase().includes(banWords[0]) || message.toLowerCase().includes(banWords[1]);
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().
const userNum = Number.parseInt(prompt("Введіть число: "));
alert(userNum === 10 ? 'Вірно' : 'Невірно');

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
// switch (res) {
//     case 1:
//         alert(`${min} входить в першу чверть`);
//         break;
//     case 2:
//         alert(`${min} входить в другу чверть`);
//         break;
//     case 3:
//         alert(`${min} входить в третю чверть`);
//         break;
//     case 4:
//         alert(`${min} входить в четверту чверть`);
//         break;
//     default:
//         alert(`[Invalid] ${min}`);
//         break;
// }
// const min = Math.floor(Math.random() * (59 - 0) + 0);
let min = Math.floor(Math.random() * 59); //<== Kill yourself!
// let res = (min - min % 15) / 15 + 1;
let res = Math.floor(min / 15);
// console.log(min, res);
const qtr = ["першу", "другу", "третю", "четверту"]
alert(`${min} входить в ${qtr[res]} чверть`);

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
const num = Number.parseInt(prompt("Введіть число від 1 до 4: "));
// const seasons = ['зима', 'весна', 'літо', 'осінь'];
// 1 <= num && num <= 4 ? alert(seasons[num-1]) : alert(`[Err: invalid]: ${num}`);
switch (num) {
    case 1:
        alert('зима');
        break;
    case 2:
        alert('весна');
        break;
    case 3:
        alert('літо');
        break;
    case 4:
        alert('осінь');
        break;
    default:
        alert(`[Err: invalid]: ${num}`);
        break;
}

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
const mins = prompt("Введіть кількість хв:");
console.log(`${Math.floor(mins / 60).toString().padStart(2, "0")}:${(mins % 60).toString().padStart(2, "0")}`);

// Напишіть код, який<\\ запитуватиме //>у користувача
// логін за допомогою p\\rompt і виво//дить результат в консоль браузера
//            0================0==============0
// Після цього| додайте// перев|ірку \\введено|го користувачем значення:
// Якщо відвід|увач вв//одить "|Адмін"\\,     |
// то prompt запитує //пароль (не забуд\\ьте зберігти його у змінну для подальшої перевірки)//.                 \\
// Якщо нічого не в//вели або натиснули C\\ancel,
// Вивести в alert// строку "Скасовано"   \\
// В іншому випад//ку вивести в alert рядок\\ "Я вас не знаю"
                //                          \\
// Пароль перев//іряти так:                  \\
// Якщо введен//о пароль "Я головний",        \\
// то вивести// в alert рядок "Добрий день!",  \\
// в іншому //випадку вивести в alert рядок "Нев\\ірний пароль!"
const login = prompt('логін: ');
// console.log(login);
// switch (login) {
//     case "Адмін":
//         alert(prompt('пароль: ') === "Я головний" ? "Добрий день!" : "Невірний пароль!");
//         break;
//     case "":
//         alert("Скасовано");
//         break;
//     default:
//         alert("Я вас не знаю");
//         break;
// }
if (login === "Адмін") {
    alert(prompt('пароль: ') === "Я головний" ? "Добрий день!" :"Невірний пароль!");
} else {
    alert(Boolean(login) == "" ? "Скасовано" : "Я вас не знаю");
}
