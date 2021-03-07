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

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`
}

const descPortugal = describeCountry('Portugal', 10, 'Lisbon')
const descGermany = describeCountry('Germany', 83, 'Berlin')
const descFinland = describeCountry('Finland', 6, 'Helsinki')
console.log(descPortugal)
console.log(descGermany)
console.log(descFinland)

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

function percentageOfWorld1(population) {
    return (population / 7900000000) * 100
}

const percentageOfWorld2 = function(population) {
    return ((population / 7900000000) * 100)
}

console.log(percentageOfWorld1(55000000))
console.log(percentageOfWorld1(121000000))
console.log(percentageOfWorld1(1441000000))

console.log(percentageOfWorld2(304000000))
console.log(percentageOfWorld2(83000000))
console.log(percentageOfWorld2(1370000000))

////Arrow Functions
//3번째 Function의 정의 방법이 있다. ES6때 새로 지정됨.
//Declaration, Expression말고 Arrow Function이 있다는 것

//밑과 같이 화살표같은게 들어간다.
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

const percentageOfWorld3 = (population, country) => {
    let pop = (population / 7900000000) * 100
    return `${country}'s population ratio is ${pop}%`
}

console.log(percentageOfWorld3(83000000, 'Germany'))
console.log(percentageOfWorld3(121000000, 'Japan'))
console.log(percentageOfWorld3(1441000000, 'China'))

////Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`

    return juice
}

console.log(fruitProcessor2(2, 4))

//여기서 2, 4가 function fruitProcessor에 들어간다 112번줄에 있는.
//그럼 2 -> apples해서 cutFruitPieces에 들어가서 다시 위의 함수를 불러온다.
//따라서 함수 내에서 또 함수를 불러올 수 있는 것이다!
//이렇게 해서 2였던 숫자는 applePieces에 2 * 4 => 8이 저장된다.
//몰론 옆에있는 4도 마찬가지다.

const describePopulation = (country, population) => {
    const pop = percentageOfWorld2(population)

    return `${country} has ${population}, which is about ${pop}% of the world`
}

console.log(describePopulation('China', 1441000000))

////Reviewing Function
const yearsUntilRetirement3 = function(birthYear, firstName) {
    const age = calcAge1(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement
        console.log(`${firstName} retires in ${retirement} years`)
    } else {
        return -1
        console.log(`${firstName} has already retired!`)
    } //이미 다른 언어를 했으니까 잘 알텐데, return 뒤에는 닿을 수 없다.
    //따라서 뒤에는 닿지 않고 return에서 해당 function을 탈출하게 된다.
}

console.log(yearsUntilRetirement3(1991, 'Jonas'))
console.log(yearsUntilRetirement3(1955, 'Mike'))

//Function은 3개를 기억하자. Declaration, Expression, Arrow
//Arrow function ES6에서 새로 나온 방법이다.

////Coding Challange 1
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) /3
}

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins > 2 * avgKoalas) {
        return `Dolphins Win! (${avgDolphins} vs. ${avgKoalas})`
    } else if(avgDolphins * 2 < avgKoalas) {
        return `Koalas Win! (${avgDolphins} vs. ${avgKoalas})`
    } else return `Dolphins and Koalas Drew.`
}

console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)))
console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23,34,27)))

////Arrays
const friend1 = 'Kim';
const friend2 = 'Lee';
const friend3 = 'Min';
//이렇게 하면 개극혐이지 않을까? 언제 이러고 계속 해야하냐...
const friends = ['Kim', 'Lee', 'Min']; //이러면 된다.
//배열은 자바스크립트에도 있다.
console.log(friend1, friend2, friend3, friends)
//또는 이렇게 지정이 가능하다.
const years = new Array(1964, 1965, 1996, 2001);
console.log(years)

console.log(friends[0]) //이렇게 하면 맨 처음에 들어있는 값이 출력된다.
//당연히 0부터 시작한다.
console.log(friends.length, years.length)