'use strict';

//querySelector()는 요소를 선택하게 해주는 메서드이다.
//가장 첫번째 요소만을 선택한다.
console.log(document.querySelector('.message')) //그럼 class message가 선택이 된다.
//message가 여러개면 그중에 하나만 가져온다.
console.log(document.querySelector('.message').textContent)
//text content만을 갖고온다. 위의것은 <p class...에 해당하는 것을 모두 가져온다.

////Dom Manipulation
//우리는 이미 위에서 dom을 이용해봤다.
//dom = document object model. => 웹페이지를 자바스크립트로 제어하기위한
//객체 모델. html 문서의 요소를 제어하기 위해 웹 브라우저에서 지원한다.
//트리로 저장된다.
//document.querySelector이 피룡하다.
//document는 DOM의 entry point이다.

//documet -> element html -> element head, body -> title, section -> p, img
//이 순서로 간다.
//따라서 html에 무엇이 있든간에, DOM에도 있어야 한다는 것이다.
//DOM은 html을 대표한다. 이를 잘 써먹으면 된다.

//중요!!!! -> DOM은 Javascript가 아니다.
//Javascript는 ecmascript의 방언이다. DOM은 절대 자바스크립트와 같지 않다.
//DOM과 Document는 WEB API에 속한다. 이는 구글크롬, 네이버 웨일등의 라이브러리에 속한다.
//API는 라이브러리처럼 작동한다. API = application programming language
//WEB API는 자바스크립트에서도 쓰이는데 이게 원래 각각 인터넷 엔진들의 방식
//이라고 생각하자.
//API는 타이머, 등등이 있다.

////Selecting and Manipulating Documents
//Element를 get뿐만 아니라, Set도 가능하다.
//document.querySelector('.message').textContent = 'Correct number!'
//안먹히는 이유는 바꾸긴 하는데, 어떤 기준으로 바꾸는지는 모르기 때문이다.

//class = guess에 숫자가 담겨있기 때문에 여기를 querySelector로 가져온다.
//score에는 점수가 담겨있다.

//document.querySelector('.number').textContent = 13
//document.querySelector('.score').textContent = 1000000
//13이 들어가고, score에는 1000000이 쌓이게 된다.

//그럼 input은 어떻게 가지고 올까?
console.log(document.querySelector('.guess').value) //이렇게 하면 일단
//빈칸의 숫자를 입력했을때 가져올 수 있다.
//document.querySelector('.guess').value = 3000
//이렇게하면 기본값이 3000지정

//그럼 클릭을 해서 콘솔창에서 클릭을 하게 해보려면 어떻게 해야할까?

////Handling Click Events, Implementing Game Logic
//ㄹㅇ 무언가 클릭하면 상호작용하는 것 -> event listener
//Event가 일어나야하는 곳을 확인하고 지정해야 한다.
const number = Math.trunc(Math.random() * 20) + 1;
//숨겨진 번호는 이렇게 정한다.
let score = 20
//얘는 점수다.
document.querySelector('.number').textContent = number

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    document.querySelector('.number').textContent = guess

    if(!guess) {
        document.querySelector('.message').textContent = '😡 No Number!'
    } else if(guess === number) {
        document.querySelector('.message').textContent = '🎉 Correct Number!'
        document.querySelector('.highscore').textContent = score
    } else if(guess > number) {
        if(score > 1) {
            document.querySelector('.message').textContent = '🤨 Too high!'
            score--
            document.querySelector('.score').textContent = score 
            } else {
                document.querySelector('.message').textContent = '😈 You lost the game!'
                document.querySelector('.score').textContent = 0
            }
    } else if(guess < number) {
        if(score > 1) {
            document.querySelector('.message').textContent = '🤨 Too high!'
            score--
            document.querySelector('.score').textContent = score 
            } else {
                document.querySelector('.message').textContent = '😈 You lost the game!'
                document.querySelector('.score').textContent = 0
            }
    }
    //매직 넘버를 만들어주는 것은 바깥에서 해야한다.
    //오직 한번만 지정해줘야하기 때문이다.
})
//이걸 누르면 상호작용이 이뤄져야 한다. 클릭하면 event가 실행
//따라서 상호작용이 일어나야 하는 것을 고르자.
//function은 이제 click시, 무슨일이 일어나야 하는지 함수로 정의된다.

//이렇게 하면 .check이라는 버튼을 클릭하게 되면,
//.guess에 있는 값이 console창에 보여지게 된다.