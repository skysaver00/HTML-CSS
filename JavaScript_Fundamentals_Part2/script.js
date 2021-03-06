////Using Strict Mode
'use strict';
//이건 무엇인가. 일단 strict 모드는 맨 위에 올리도록 하자.
//실수등을 피할 수 있게 해준다. Strict모드는 몇몇 행동을 제한하거나,
//우릐의 실수를 어느정도 보정해준다.
let hasDriversLicense = false;
const passTest = true;

//if(passTest) hasDriverLicense = true; //s가 빠져있다.
if(hasDriversLicense) console.log('I can drive :D')
//이제 에러메세지가 뜨면서 문제가 있었다는 것을 확인할 수 있다.
//hasDriverLicense에 uncaught ReferenceError가 뜨게 된다.

//const interface = 'Audio';
//역시 에러가 뜬다. interface는 이미 저장되어있는 단어이다.
//const private = 500;
//이와 같은건 interface, if, else등과 같은 이미 저장된 단어들이 있다.

////Functions
//function 함수 이름() {}
function logger() {
    //function body
    console.log('My name is YoungWoo Kim')
}

//calling = running = invoking function
logger()
logger()
logger()
logger()
logger() //여러번 불러올 수 있다.

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`

    return juice
}

const appleJuice = fruitProcessor(5, 0); //이렇게 파라미터를 주고 const에 저장
console.log(appleJuice) //그럼 여기서 출력이 가능
console.log(fruitProcessor(10, 20))

let appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

logger(23) //아무 효과가 없다. 파라미터가 없는걸 억지로 줘도 상관은 없지만,
//뭐 그렇다고 달라지는건 아니다.

const num = Number('23')

////Function Declarations vs. Expressions
function calcAge1(birthYear) {
    const age = 2021 - birthYear;
    return age;
} //또는

function calcAge2(birthYear) {
    return 2021 - birthYear;
}

console.log(calcAge1(1996))
console.log(calcAge2(1996))

const age1 = calcAge1(1964)
console.log(age1) //이게 Function Declaration

//이게 Function Expression이다.
const calcAge3 = function (birthYear) {
    return 2100 - birthYear;
}

const age2 = calcAge3(2001)
console.log(age1, age2)

//따라서 Function은 type이 아니다. String, Number가 아니라 Value일 뿐이다.
//이렇기 때문에 어떻게 하든 상관이 없다.

////Arrow Functions
//3번째 Function의 정의 방법이 있다. ES6때 새로 지정됨.
//Declaration, Expression말고 Arrow Function이 있다는 것

//밑고 같이 화살표같은게 들어간다.
const calcAge4 = birthYear => 2021 - birthYear
const age4 = calcAge4(1991);
console.log(age4)

const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear
    const retirement = 65 - age
    
    return retirement
}

console.log(yearsUntilRetirement(1996))

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2021 - birthYear
    const retirement = 65 - age
    
    return `${firstName} retires in ${retirement}years.`
}

console.log(yearsUntilRetirement2(2001, 'Bob'))
console.log(yearsUntilRetirement2(1999, 'Tohmas'))
