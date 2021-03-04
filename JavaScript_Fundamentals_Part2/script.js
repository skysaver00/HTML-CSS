////Values and Variables
let country = "Republic of Korea"
let continent = "Asia"
let population = 51000000

console.log(country)
console.log(continent)
console.log(population)

//Number, String, Boolean, Undefined, Null, Symbol, BigInt
//Dynamic Typing 지원

////Data Types
let javascriptIsFun = true;
console.log(typeof(javascriptIsFun))
console.log(typeof(continent))
console.log(typeof Null)
javascriptIsFun = 'Yes!'
console.log(typeof(javascriptIsFun))

let year;
console.log(year);
console.log(typeof(year))

let isIsland = true;
let language;
console.log(typeof(isIsland))
console.log(typeof(population))
console.log(typeof(country))
console.log(typeof(language))

////Let, Const and Var
let age = 30
age = 31
console.log(age)
//const birth = 1996 이건 오류가 뜬다.
birth = 2002
console.log(birth)
//Var는 피해야한다. 추천되지 않는다.
//ES5까지 Javascript에서 변수를 선언하는 방법. 지금은 비추천
var job = 'programmer'
console.log(job)

lastName = "Kim"
console.log(lastName)

language = "Korean"
//const country = "Republic of Korea"
//const continent = "Asia"
console.log(country)
console.log(continent)
console.log(language)

////Basic Operators
const ageKim = 2021-1996
const ageMom = 2021-1965
console.log(ageKim, ageMom)
console.log(ageKim * 2, ageMom / 2, 2 ** 3)

const firstName2 = 'Young Woo'
const lastName2 = 'Kim'
console.log(firstName2 + " " + lastName2)

let x = 10 + 5
console.log(x + 100)
x += 10
console.log(x)
x *= 4
console.log(x)
x--
console.log(x)
x++
console.log(x)
x -= 10
console.log(x)
x /= 3
console.log(x)

console.log(ageKim > ageMom)
console.log(ageKim <= 30)

const t = true
console.log(!t)

console.log(population / 2)
population = population + 1
console.log(population)
console.log(population > 6000000)
console.log(population < 33000000)

let description = country + " is in " + continent + ", and its " + population + " people speak " + language
console.log(description)

////Operator Precedence
//왜 어떤 연산자가 먼저 실행되는가?
//우선순위가 있기 때문이다. mdn operator precendence을 보면 확인해 볼 수 있다.
//x - 1991 > x - 2018을 보면 -, >가 있다.
//-는 12순위다. 그리고 왼쪽 먼저다. x보고 오른쪽 보고 -하게 된다.
// 하지만 =, +=, -= 등은 오른쪽에서 왼쪽으로 간다.

let a, b
a = b = 25 - 10 - 5
console.log(a, b)

////Coding Challange
let markMass = 78
let markHeight = 1.69
let johnMass = 92
let johnHeight = 1.95
let markHigherBMI = (markMass / (markHeight ** 2) > johnMass / (johnHeight ** 2))
console.log(markMass / (markHeight ** 2), johnMass / (johnHeight ** 2), markHigherBMI)

markMass = 95
markHeight = 1.88
johnMass = 85
johnHeight = 1.76
markHigherBMI = (markMass / (markHeight ** 2) > johnMass / (johnHeight ** 2))
console.log(markMass / (markHeight ** 2), johnMass / (johnHeight ** 2), markHigherBMI)

////Strings and Template Literals
const firstName3 = "Young Woo"
const job2 = "student"
const birthyear = "1996"

const youngwoo = "I'm " + firstName3 + ", a " + (2021 - birthyear) + " years old "
+ job2 + "!"
console.log(youngwoo)

const youngwooNew = `I'm ${firstName3}, a ${2021-birthyear} years old ${job2}!`
console.log(youngwooNew)
console.log(`Just a regular String...`)
//따라서 '', ""은 일반적인 String
//``은 Template String이라고 한다.

console.log('String with \n\
multiple \n\
lines')

description = `${country} is in ${continent}, and its ${population} people speak ${language}`
console.log(description)

////Taking Decisions: if/else statements
const age2 = 19
const isOldEnough = age2 >= 18;

if(isOldEnough) {
    console.log('Sarah can start driving liscense 🚗')
} else {
    console.log(`Sarah is too young. Wait another ${18 - age2}`)
}