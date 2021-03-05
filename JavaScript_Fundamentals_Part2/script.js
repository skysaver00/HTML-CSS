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

if(population > 33000000) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is below average`)
}

////Coding Challange 2
markMass = 78
markHeight = 1.69
johnMass = 92
johnHeight = 1.95
markHigherBMI = (markMass / (markHeight ** 2) > johnMass / (johnHeight ** 2))
if(markHigherBMI) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

markMass = 95
markHeight = 1.88
johnMass = 85
johnHeight = 1.76
markHigherBMI = (markMass / (markHeight ** 2) > johnMass / (johnHeight ** 2))
if(markHigherBMI) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

////Type Conversion and Coercion
const inputYear = '1991'
console.log(Number(inputYear) + 30, inputYear)
console.log(inputYear + 30)

const inputNumber = 2020
console.log(String(inputNumber) + ` Hello World!`)

//만약에 숫자로 바꿀 수 없는 값이 들어오면 NaN이 뜬다.
console.log(Number('Young Woo Kim'))
console.log(typeof NaN)
//하지만 NaN의 타입은 숫자다. 이건 기억해두자.

console.log(String(23), 23, '23')

//Type coercion
console.log('I am ' + 23 + ` year's old.`)
//여기서 23은 coercion이 일어나서 Number에서 String으로 바뀌었다.

if(('I am ' + 23 +  "year's old.") === ('I am ' + '23' +  "year's old.")) {
    console.log("True")
} else console.log("False")
//따라서 같은걸 보면 23은 String으로 인식되는 걸로 알 수 있다.

console.log(23 - '10' - 3)
console.log('23' - '10' - 3)
console.log(23 + '10' - 3)
//-, *, /는 모두 string으로 정의된 숫자를 모두 Number로 바꾼다.
//그에 반해, +는 Number를 String으로 바꿔버린다.
console.log((('23' + '10') - '8') / '2' + '50')
console.log((('23' + '10') - '8') / '2')
//이미 나누기를 할때 Number로 바뀌게 되었다.
//따라서 Number를 더해주면 Number + Number니까 제대로 더해진다.
console.log((('23' + '10') - '8') / '2' +  50)
let num = '1' + 1
num = num - 1
console.log(num)

console.log(2 + 3 + 4 + 5 + '5')
console.log('10' - '4' - '3' + 2 + '5')

console.log('9' - '5') // 4
console.log('19' - '13' + '17') // 617
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143

////Truthy and Falsy values
//5 Falsy values: 0, '', undefined, null, NaN
//나머지는 Truthy value이다.
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean())
console.log(Boolean({}))

const money = 0; //money 는 숫자지만,
if(money) { //여기 if/else문에서 coercion이 일어나서 falsy 값이니까 거짓이된다.
    console.log("Don't spend it all")
} else { //그래서 else가 실행되는 것.
    console.log("You should get a job!")
}

let height = '0' // 이건 True로 인식된다.
if(height) {
    console.log('Yay!!!')
} else {
    console.log('Height is UNDEFINED')
}

////Equality Operators == vs ===
const age3 = 18;
if(age3 === 18) {
    console.log('You just became an adult :D')///=== =3개는 완벽히 같으면
}

//true는 ===에서 양쪽이 완벽히 같을때만 인식된다.
console.log(18 === 18)
console.log(18 === 19)
console.log(18 === '18')//=3개일때는 확실히 구분해버린다. false가 나온다.
console.log(18 == 18)
console.log(18 == 19)//이건 뭘하든 틀렸다고 나온다.
console.log(18 == '18')//== =2개는 type coercion을 고려하지 않는다.
//따라서 이건 값이 같다고 나오게 된다.

//==은 loose하게 비교하고, ===은 strict하3게 비교한다고 생각하면 된다.

/*const favourite = prompt("Whats's your favourite number?")
console.log(favourite)
console.log(typeof(favourite))

if(favourite == 23) {
    console.log('Cool! 23 is an amazing number!')
} else if(favourite == 7) {
    console.log('7 is also a cool number')
} else {
    console.log("You didn't answer cool number")
}*/

let numNeighbours = prompt('How many neighbour does your country have?')
if(numNeighbours == 1) {
    console.log("Only 1 border")
} else if(numNeighbours > 1) {
    console.log("More than 1 border")
} else {
    console.log('No border')
}