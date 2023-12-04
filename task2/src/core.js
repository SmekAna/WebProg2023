//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n | 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    let i = 1;
    do {
        if (!(i % 2)) arr.push(i);
        i++;
    } while (arr.length === 0 || arr[arr.length - 1] != 20);
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let s = 0;
    for (let i = 0; i <= n; ++i) {
        s += i;
    }
    return s;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n <= 0) {
        return 0;
    }
    return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    return n === 0 ? 1 : factorial(n - 1) * n;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n === 2 || n === 1) return true;
    return n / 2 === 2 ? true : n > 2 ? isBinary(n / 2) : false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    let f1 = 1;
    let f2 = 1;
    for (let i = 3; i <= n; i++) {
        let f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }
    return f2;
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    let iv = initialValue;
    return function result(value) {
        if (!!operatorFn) iv = operatorFn(iv, value);
        return iv;
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    let s = start - step;
    return function () {
        s += step;
        return s;
    };
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (
        (typeof firstObject == 'number' &&
            isNaN(firstObject) &&
            typeof secondObject == 'number' &&
            isNaN(secondObject)) ||
        firstObject === secondObject
    ) {
        return true;
    } else if (
        typeof firstObject == 'object' &&
        firstObject != null &&
        typeof secondObject == 'object' &&
        secondObject != null
    ) {
        if (Object.keys(firstObject).length != Object.keys(secondObject).length)
            return false;

        for (let temp in firstObject) {
            if (
                secondObject.hasOwnProperty(temp) &&
                !deepEqual(firstObject[temp], secondObject[temp])
            ) {
                return false;
            } else if (!secondObject.hasOwnProperty(temp)) return false;
        }

        return true;
    } else return false;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};