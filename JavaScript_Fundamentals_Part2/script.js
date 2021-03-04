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