"use strict";
//Ця дз складається з чотирьох невеликих завдань,
// за реалізацію кожної з них можна отримати 25 балів:

//Дано масив з елементами різних типів. Створити функцію яка
//вираховує середнє арифметичне лише числових елементів даного масиву.

const arrTest = [5,"hello","world",undefined,75,32,41,"","func45",4,null,0,"number10"," ","5"]
function arithmeticMean(array) {
    let sumArithmeticMean = 0
    const arithmeticMeanNumArr = []
   for(let d = 0; d < array.length ; d++) {
       let isValid = array.every(el => Number(array[d]) || array[d] === 0)
       if (isValid) {
//       if (!isNaN(array[d]) && array[d] !== " " && array[d] !== null && array[d] !== "") {
           sumArithmeticMean = sumArithmeticMean + +array[d]
           arithmeticMeanNumArr.push(array[d])
       }
   }
   return sumArithmeticMean / arithmeticMeanNumArr.length
}
alert(arithmeticMean(arrTest))
/**********************************************************/

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи:
//числа x і y, рядок znak. У змінній znak може бути:
//+, -, *, /, %, ^ (ступінь ).Вивести результат математичної
//дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const firstNumber = prompt(`Enter first number :`)
const action = prompt(`Enter an action +, -, *, /, %, ^(ступінь):`)
const secondNumber = prompt(`Enter second number :`)

function doMatch(x,znak,y) {
    if (x === null || x.trim() === "" || isNaN(+x) ) {
        return "first number is incorrect"
    }
    else if (y === null || y.trim() === "" || isNaN(+y)) {
        return "second number is incorrect"
    }
    let result
    switch (znak){
        case  "+" :
            result = (+x) + (+y)
            break;
        case "-" :
            result = (+x) - (+y)
            break;
        case "*" :
            result = (+x) * (+y)
            break;
        case "/" :
            result = (+x) / (+y)
            break;
        case "%" :
            result = (+x) % (+y)
            break;
        case "^" :
            result = (+x) ** (+y)
            break;
        default :
            result = "znak is incorrect symbol"
    }
    return result
}
alert(doMatch(firstNumber,action,secondNumber))
/*********************************************************************/
//Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

function lengthOuterArray() {
    let lengthOuterArr = Number(prompt(`Input length outer array for example "5"`))
    while (lengthOuterArr <= 0 || isNaN(lengthOuterArr) ) {
        lengthOuterArr = Number(prompt(`You inputted incorrect number length outer array`))
    }
    return lengthOuterArr
}
const lengthOuterArr = Number(lengthOuterArray())

function sumInternalArrays (lengthOuterArr) {
    const outerArray = []
    for (let h = 1; h <= lengthOuterArr ; h++ ) {
        const internalArr = []
        internalArr[h] = prompt(`Input elements for  internal
        arrays ${h} separated by a "," for example: 3,4,2,5,7`)
        if (internalArr[h] !== null && internalArr[h].length > 0) {
            outerArray.push((internalArr[h]).split(","))
        }
        else {
            return alert(`You haven't inputted anything`)
        }
    }
    return outerArray
}
const result = sumInternalArrays (lengthOuterArr)
alert(result)
console.log(result)

/***********************************************************************/
//Створити функцію, яка прибирає з рядка всі символи,
// які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])'
// поверне нам "hello word". Вихідний рядок та символи
// для видалення задає користувач.

const stringOfUser = prompt(`Enter string for changes 
for example: 'hello world'`)
const arrDeleteSymbol = ([prompt(`Enter symbol you want to delete
separated by commas for example: l,d`)]).join(',')
//const stringOfUser = 'hello world'
function deleteSymbol(sourceString) {
    if(!sourceString?.trim() || arrDeleteSymbol.length === 0) {
        return `Inputted date is incorrect`
    }
    let j = 0
    while (j < arrDeleteSymbol.length) {
        sourceString = sourceString.split(arrDeleteSymbol[j]).join('')
        j = j + 1
    }
    return sourceString
}
alert(deleteSymbol(stringOfUser))