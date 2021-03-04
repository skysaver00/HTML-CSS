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