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
console.log(friends.length, years.length) //배열의 총 크기 출력
console.log(friends[friends.length - 1]) //이렇게 하면 마지막께 나옴 -1해주자.

friends[1] = 'Hwang'
console.log(friends)
//friends = ['Bob', 'Alice'] 이렇게 할 수는 없다. 이미 지정된 const 배열이니까
let kim = ['YoungWoo', 'Kim', 2021-1996]
console.log(kim)

kim = ['YoungWoo', 'Kim', 2021-1996, ['Seoul', 'Mokdong'], friends]
//배열안에 배열을 넣는 것도 가능하다.

const arrayPopulation = [51700000, 122330000, 249860000, 74930000]
console.log(arrayPopulation.length == 4)
const percentages = [percentageOfWorld1(arrayPopulation[0]), percentageOfWorld1(arrayPopulation[1]), percentageOfWorld1(arrayPopulation[2]), percentageOfWorld1(arrayPopulation[3])]
console.log(percentages)

////Basic Array Operations(Methods)
//push메소드는 배열 맨 뒤에 element를 넣어준다.
console.log(friends)
friends.push('Choi')
console.log(friends)

const newLength = friends.push('Song')
console.log(newLength)
friends.unshift('Park')
console.log(friends)
//이렇게 하면 hwang이 제일 앞으로 붙게된다.
friends.pop()
friends.pop()
//이러면 뒤에있는걸 각각 삭제한다.
console.log(friends)

friends.shift()
console.log(friends) //제일 앞에 있는걸 삭제한다.
/* 따라서
 * push -> 뒤에 추가, pop -> 뒤에 제거, shift -> 앞에 제거, unshift -> 앞에 추가
 * 이를 마치 큐, 스택 하듯이 덱처럼 사용할 수 있다.
 * */

console.log(friends.indexOf('Hwang')) //이건 1을 반환하게 된다.
console.log(friends.indexOf('Kim)')) //없으면 -1을 반환한다.

console.log(friends.includes('Choi')) //element가 있으면 true, 없으면 false
console.log(friends.includes('Kim'))
//includes는 strict하니까 숫자랑 문자열을 구분한다.

if(friends.includes('Kim')) {
    console.log('You hava a friend called Kim')
}

const neighbours = ['Japan', 'China', 'North Korea']
console.log(neighbours)
neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop()
console.log(neighbours)

if(!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D')
}

neighbours[2] = "Democratic People's Republic of Korea"
console.log(neighbours)

////Coding Challange 2
const calcTip = (value) => {
    if(value >= 50 && value <= 300) return value * 1.15
    else return value * 1.2
}

const calTip2 = function(value) {

}

function calTip3(value) {

}
//이렇게 3가지 방법이 있다.

console.log(calcTip(200))
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips)
const total = [bills[0] +  tips[0], bills[1] +  tips[1], bills[2] +  tips[2]]
console.log(total)

////Objects
let kimObject = {
    firstName: 'youngwoo',
    lastName: 'kim',
    age: 2021-1996,
    job: 'student',
    friends: ['kim', 'lee', 'park']
} //[]말고 {}를 사용한다.
console.log(kimObject)
console.log(kimObject.job) //이렇게 가지고 온다.

let myCountry = {
    country: 'Republic of Korea',
    language: 'Korean',
    population: 51700000,
    capital: 'Seoul',
    neighbours: ['Japan', 'China', 'Taiwan']
}
console.log(myCountry)

////Dot VS Bracket Notation
console.log(kimObject.age);
console.log(kimObject['age']) //Dot, Bracket는 이렇게 선언한다.
//원하는거 하난 그냥 잡아서 사용해주자. 나는 Dot이용할 생각.

const nameKey = 'Name';
console.log(kimObject['first' + nameKey, 'last' + nameKey])
//이렇게 쓰는 것도 가능하다.

//이렇게는 불가능 하다. console.log(kimObject.('first' + nameKey))
/* const pmpt = prompt('what do you want to know?')
console.log(kimObject[pmpt]) */
//이거는 scanf와 같은거. alert처럼 입력하라는게 뜨게 된다.

kimObject.location = 'Seoul'
kimObject['phoneNumber'] = 1234567890

console.log(kimObject)

console.log(kimObject.firstName + " has " + kimObject.friends.length + " friends, and his best friend is " + kimObject.friends[1])
console.log(kimObject.firstName + " has " + kimObject['friends'].length + " friends, and his best friend is " + kimObject['friends'][1])

console.log(myCountry.country + " has " + myCountry['population'] + " " + myCountry.language + "-speaking people, " + myCountry['neighbours'].length + " neighbouring countries and capital called " + myCountry.capital)
console.log(`${myCountry['country']} has ${myCountry.population} ${myCountry['language']}-speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry['capital']}`)

////Objects Methods

kimObject = {
    firstName: 'youngwoo',
    lastName: 'kim',
    age: 2021-1996,
    job: 'student',
    friends: ['kim', 'lee', 'park'],

    calcAgeObject: function(birthYear) {
        return 2021 - birthYear;
    },

    multipleFive: num =>
    {
        return num * 5
    },

    shout: (speak, louder) => {
        console.log(speak)
        return louder
    },

    multipleAge: function(num) {
        return this.age * num //this를 쓰는 이유는 나중에 kimObject가 다른 이름
        //으로 변경되어도 용이하게 쓸 수있게 해주기 때문.
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAgeObject(1996)}-year old ${this.job}`
    }
}

console.log(kimObject.calcAgeObject(1996))
console.log(kimObject.multipleFive(20))
console.log(kimObject['shout']('HIIIIIIIIIIIII', 'LLLOUDERRRRRRRRRR!'))
console.log(kimObject.multipleAge(40))
console.log(kimObject.calcAgeObject(1996))
console.log(kimObject.getSummary())

////Coding Challanges 3
const person1 = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}

const person2 = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI= this.mass / (this.height ** 2)
        return this.BMI
    }
}

if(person1.calcBMI() > person2.calcBMI()) {
    console.log(`${person1.fullName} (${person1.BMI}) is higher than ${person2.fullName}! (${person2.BMI})`)
} else {
    console.log(`${person2.fullName} (${person2.BMI}) is higher than ${person1.fullName}! (${person1.BMI})`)
}

////For Loop
console.log(`repeat 1`)
console.log(`repeat 2`)
console.log(`repeat 3`)
console.log(`repeat 4`)
console.log(`repeat 5`)
console.log(`repeat 6`)
console.log(`repeat 7`)
console.log(`repeat 8`)
console.log(`repeat 9`)
console.log(`repeat 10 이렇게 하지 말자.`) //매우 뻘짓거리

for(let i = 1; i <= 10; i++) {
    console.log(`repeat ${i}`)
} //이게 for 반복문이다.

for(let i = 5; i > 0; i--) {
    console.log(`${i}번 반복!`)
} //거꾸로 할 수도 있다.

for(let i = 1; i < 6 ** 6; i *= 6) {
    console.log(`${i}는 제곱한다.`)
} //이렇게 ++, --뿐만 아니라 다양한 수를 곱하는 것도 가능하다.

for(let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`)
}

////Looping Arrays, Breaking and Continuing
const Array1 = [
    'Apple',
    'Banana',
    'Orange',
    'Grape',
    ['Strawberry', 'Raspberry', 'Blueberry', 'Asahiberry', 'Crayberry', 'Lingonberry'],
    'Peach',
    'Pineapple',
    'Kiwi',
    'Mango',
    'Watermelon',
    'Cherry',
] //이렇게 배열을 선언할 수 있다.

for(let i = 0; i < Array1.length; i++) {
    console.log(Array1[i])
}

const percentages2 = []
for(let i = 0; i < arrayPopulation.length; i++) {
    const percent = percentageOfWorld1(arrayPopulation[i])
    percentages2.push(percent)
}
console.log(percentages2)
percentages2.pop()
console.log(percentages2)
percentages2.shift()
console.log(percentages2)

const Array2 = [
    'Hello',
    23,
    456,
    'Hi',
    10.304,
    'Yes',
    'No',
    ['1', '2'], //이건 출력되지 않는다.
    '100'
]

for(let i = 0 ; i < Array2.length; i++) {
    if(typeof Array2[i] != 'string') continue
    else console.log(Array2[i])
}

for(let i = 0; i < Array2.length; i++) {
    if(i === 7) break;
    else console.log(Array1[i])
} //이렇게 되면 7개까지만 출력 완료

////Looping Backwards and Loops in Loops
for(let i = Array1.length; i >= 0; i--) {
    console.log(Array1[i])
} //이렇게 하면 거꾸로 출력이 된다.

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
]

for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
    }
}

for(let i = listOfNeighbours.length - 1; i >= 0; i--) {
    for(let j = listOfNeighbours[i].length - 1; j >= 0 ; j--) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
    }
}

////While Loop
let rep = Array1.length
while(rep--) {
    console.log(Array1[rep])
}

rep = 1;
while(rep <= 10) {
    console.log(`While: Lifting weights repetiton ${rep} 😀`)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
while(dice != 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
} //랜덤을 정하는 숫자다.

////Coding Challange 4
const bills2 = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
]

const tip = []
const totals = []

const calcTip2 = (value) => {
    if(value >= 50 && value <= 300) {
        tip.push(value * 0.15)
        totals.push(value * 1.15)
    }
    else {
        tip.push(value * 0.2)
        totals.push(value * 1.2)
    }
}

for(let i = 0; i < bills2.length; i++) {
    calcTip2(bills2[i])
}

console.log(tip)
console.log(totals)

const calcAverage2 = (arr = []) => {
    let sum = 0
    let t = arr.length
    while(t--) {
        sum += arr[t]
    }
    sum /= arr.length
    return sum
}

console.log(`the average of total is ${calcAverage2(totals)}`)