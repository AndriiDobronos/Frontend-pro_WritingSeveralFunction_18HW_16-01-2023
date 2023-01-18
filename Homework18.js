"use strict";
//Ця дз складається з чотирьох невеликих завдань,
// за реалізацію кожної з них можна отримати 25 балів:

//Дано масив з елементами різних типів. Створити функцію яка
//вираховує середнє арифметичне лише числових елементів даного масиву.

const arrTest = [5,"hello","world",75,32,41,"","func45",4,null,0,"number10"," ","5"]
function arithmeticMean(array) {
    let sumArithmeticMean = 0
    const arithmeticMeanNumArr = []
   for(let d = 0; d < array.length ; d++) {
       if (!isNaN(array[d]) && array[d] !== " " && array[d] !== null && array[d] !== "") {
// не пацює if (!(!array[d]?.trim())) {
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

//const lengthOuterArr = 5
//const sourceArr = [3,4,2,5,7]
//const userArrayS = ['y','e','s',1,2,3,4,'n','o',5,5,5,5,5,'f','i','n','i','s','h',0]

function lengthOuterArray() {
    let lengthOuterArr = Number(prompt(`Input length outer array for example "5"`))
    while (lengthOuterArr <= 0 || isNaN(lengthOuterArr) ) {
        lengthOuterArr = Number(prompt(`You inputted incorrect number length outer array`))
    }
    return lengthOuterArr
}

const lengthOuterArr = Number(lengthOuterArray())
function lengthInternalArr(lengthOuterArr) {
    let lengthInternalArr1 = (prompt(`Input number length internal
           arrays separated by a "," for example [3,4,2,5,7]`)).split(",")
    let testSum = null
    for (let l = 0; l < lengthInternalArr1.length; l++) {
        testSum = testSum + +lengthInternalArr1[l]
    }
    while (lengthInternalArr1.length !== lengthOuterArr ||
    isNaN(testSum)) {
        lengthInternalArr1 = (prompt(`You inputted incorrect number length internal arrays repeat please`)).split(",")
    }
    return lengthInternalArr1
}

const sourceArr = lengthInternalArr(lengthOuterArr)
let sumLengthInternalArr = 0
for (let i = 0; i < lengthOuterArr ; i++) {
    sumLengthInternalArr = sumLengthInternalArr + Number(sourceArr[i])
}

function userArray (sumLengthInternalArr) {
    let userArray1 = (prompt(`Input elements for 2DArray separated by a ","
    for example : ['y','e','s',1,2,3,4,'n','o',5,5,5,5,5,'f','i','n','i','s','h',0]`)).split(',')
    while ( userArray1.length !== sumLengthInternalArr) {
        userArray1 = (prompt(`You inputted incorrect number elements,repeat please`)).split(",")
    }
    return userArray1
}

let userArrayS = userArray(sumLengthInternalArr)
function fill2DArray(length, value,lengthInternalArr) {
    const OuterArr = []
    for (let i = 0, k = 0; i < length; i++) {
        const subArr = []
        for(let j = 0; j < +lengthInternalArr[i] ; j++) {
            subArr.push(value[j + k])
        }
        OuterArr.push(subArr)
        k = k + +lengthInternalArr[i]
    }
    return OuterArr
}

console.log(fill2DArray(lengthOuterArr,userArrayS,sourceArr))
//alert(fill2DArray(lengthOuterArr,userArrayS,sourceArr))
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