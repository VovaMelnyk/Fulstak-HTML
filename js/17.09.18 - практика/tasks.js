// ==================== #1 ==========================
const scientist = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];

// let sum = scientist.reduce(function(acc, el){
//     return acc + (el.passed - el.year);
// },0)

// let result = scientist.sort(function (a, b) {
//     return a.first > b.first ? 1 : -1
// });

// let result = scientist.sort((a, b) => a.first > b.first ? 1 : -1)
// console.log(result);

// let result = scientist.sort(function(a, b){
//     return (a.passed - a.year) - (b.passed - b.year);
// });

// let result = scientist.sort((a, b) => ((a.passed - a.year) - (b.passed - b.year)))

// console.log(result);

// let result = scientist.filter(function (el) {
//     return el.year < 1400 || el.year >= 1700
// })

// console.log(result);

// let result = scientist.find(function(el){
//     return el.first === 'Albert' && el.last === 'Einstein'
// })

// let result = scientist.filter(function(el){
//     return el.last[0] === 'C';
// })
// console.log(result);

// console.log(result.year);
// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A
// ============================= #2 =================================

/*
Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem
console.log('16px'); // 1rem
console.log('24px'); // 1.5rem
console.log('0px'); // 0rem
*/

// =============================== #3 ===================================

/*
Написати ф-ю convertToPrc(container, block) яка приймає розміри контейнера та розміри блока в форматі строк і повертає значення блока в %. Якщо резкльтат дробовий округлювати до двох знаків після коми.
console.log('1000px', '100px'); //10%
console.log('950px', '150px'); // 15.79%
*/

// =============================== #4 ===================================
/*
Написати ф-ю pxConvertor(from, to, block, container)  яка приймає параметром from - одиниці з яких конвертувати, параметром to - одиниці в які конвертувати, block - розміри блока для конвертації, container - розмір контейнера. Всі параметри це строки. Ф-я повертає результат або % або rem.
   console.log('px', 'rem', 16); // 1rem
   console.log('px', 'rem', 24); // 1.5rem
   console.log('px','%', 100px', '1000px'); //10%
   console.log('px', '%', '150px', '950px'); // 15.79%
*/

// =============================== #5 ===================================

/*
Написати ф-ю convertFromKmToMetric(km). Ця функція приймає відстань в кілометрах і перетворює її в м, дм, см. Ф-я повертає обєкт конвертованих даних.
console.log(convertFromKm(1)); // {cm: 100000, dm: 10000, m: 1000,}
console.log(convertFromKm(1.5)); // {cm: 150000, dm: 15000, m: 1500,}
console.log(convertFromKm(3)); // {cm: 300000, dm: 30000, m: 3000,}

*/
// =============================== #6 ===================================
/*
Написати ф-ю convertFromKmToImperial(km). Ця функція приймає відстань в кілометрах і перетворює її в фути, дюйми, ярди. Ф-я повертає обєкт конвертованих даних.
console.log(convertFromKm(1)); // {feet: 3280,84, inch: 39370,08, yards: 1093,613,}
console.log(convertFromKm(1.5)); // {feet: 4921,26, inch: 59055,12, yards: 1640,42,}
*/
// =============================== #7 ===================================

/*
let worker = {
    workSchedule: [
        {day: 'M', hours: 9},
        {day: 'T', hours: 10},
        {day: 'W', hours: 11},
        {day: 'T', hours: 5},
        {day: 'F', hours: 12},
        ],
        penalty: [
        {day: 'M', value: 0},
        {day: 'T', value: 120},
        {day: 'W', value: 50},
        {day: 'T', value: 0},
        {day: 'F', value: 35},
        ],
        premium: 500,
}

написати ф-ю getSalary(worker, rate) яка приймає аргументами обєкт робітника і погодинну ставку.
Ф-я вертає зарплату робітника за тиждень з урахуванням штрафів і премій
hours - години роботи
value - сума штрафу
premium - премія
console.log(getSalary(worker, 20)); // 1235
console.log(getSalary(worker, 8)); // 671
*/
