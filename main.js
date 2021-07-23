// // //Task1+ Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// let age = prompt("How old are you?");
// age = +age;

// if(age > 2 && age < 12) {
//  alert('You are a child!');
//  console.log('You are a child!');
// }

//  else if(age >= 12 && age < 18) {
//     console.log('You are a teenager');
//  alert('You are a teenager');
// }

// else if (age >= 12 && age < 18) {
//     console.log('You are a grown');
//     alert ('You are a grown');
// }

// else if (age >=18 && age < 60){
//     alert('You are a grown');
// }
// else if (age >=60){
//     console.log('You are a pensioner');
//     alert('You are a pensioner');
// }



//Task2 + Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// let number = prompt('Enter the number from 0 to 9');
//     switch(number) {
//         case '0':
//             alert(')');
//             console.log(')');
//             break;
//         case '1':
//             alert('!');
//             console.log('!');
//             break;
//         case '2':
//             alert('@');
//             console.log('@');
//             break;
//         case '3':
//             alert('#');
//             console.log('#');
//             break;
//         case '4':
//             alert('$');
//             console.log('$');
//             break;
//         case '5':
//             alert('%');
//             console.log('%');
//             break;
//         case '6':
//             alert('^');
//             console.log('^');
//             break;
//         case '7':
//             alert('&');
//             console.log('&');
//             break;
//         case '8':
//             alert('*');
//             console.log('*');
//             break;
//         case '9':
//             alert('(');
//             console.log('(');
//             break;
//     }





//Task3+ Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
// let number = prompt ("Enter any 3 digit number");
// number = number + '';
// if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
// {
//     alert('Matches found');
// }
// else
//     alert('No matches found');



//Task4 Запросить у пользователя год и проверить, високосный он или нет.
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
//  let year = prompt ("Enter year");
//     if (year % 4 == 0 && year % 100 !== 0){
//         alert('Leap year');
//     }
//     else{
//         alert('Not Leap Year');
//     }
      

//Task5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// let number = prompt ("Enter five-digit number");
//     number = number + '';
//     if (number === number.split('').reverse().join('')){
//         alert('palindrome');
//     }
       
//     else{
//         alert('NOT palindrome');
//     }
       

//Task6 Написать конвертор валют. Пользователь вводит количество USD,
// выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму
// let amount = prompt('Enter the amount of USD:');
//     let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
//     switch(currency) {
//         case '1':
//             alert("amount*32.04 + 'EUR");
//             console.log(amount*32.04 + 'EUR');
//             break;
//         case '2':
//             alert(amount*27.20 + 'UAH');
//             console.log(amount*27.20 + 'UAH');
//             break;
//         case '3':
//             alert(amount*16.00 + 'AZN');
//             console.log(amount*16.00 + 'AZN');
//             break;
//         }


//Task 7 Запросить у пользователя сумму покупки
// и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
// let amount = prompt ("Enter enter purchase amount");
// if (amount >=200 && amount < 300){
//     alert("amount/100*97 + '$ with 3% discount");
// }
// else if (amount >=300 && amount < 500){
//     alert(amount/100*95 + '$ with 5% discount');
// }
// else if (amount >=500){
// alert(amount/100*93 + '$ with 7% discount');
// }

//Task 8 Запросить у пользователя длину окружности и периметр квадрата. 
//Определить, может ли такая окружность поместиться в указанный квадрат.
// let circleLength = prompt("Enter length");
// let squarePerimeter = prompt("Enter perimeter");
// let side = squarePerimeter / 4;
// let diameter = circleLength / Math.PI;
// circleLength = +circleLength;
// squarePerimeter = +squarePerimeter;
// if (diameter > side){
//    alert("fit");
// } 
// else  {
//    alert("Will_not_fit");
// }


//Task 9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
//За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
// let questionOne = prompt ("Sky is blue? 1- yes, 2 - maybe, 3 - no");
// let questionTwo = prompt ("Is the cloud white? 1- yes, 2 - maybe, 3 - no");
// let questionThird = prompt("is the snow yellow? 1- yes, 2 - maybe, 3 - no");
// questionOne = +questionOne;
// questionTwo = +questionTwo;
// questionThird = +questionThird;
// let score = 0;
// if (questionOne === 1){
//   (score +=2);
// }

// if (questionTwo === 1){
//     (score +=2);
// }

// if (questionThird === 3){
//     (score +=2);
// }

//     alert(score);    писать без кавычек, потому что это переменная. " это строка!"




//Task 10 Запросить дату (день, месяц, год) и вывести следующую за ней дату.
// Учтите возможность перехода на следующий месяц, год, а также високосный год.
let day = prompt ("Enter day");
let month = prompt ("Enter month");
let year = prompt ("Enter year");
day = +day;
month = +month;
year = +year;
const nextDay = new Date(year, month+1, day+1);
console.log (nextDay);
alert (nextDay);



