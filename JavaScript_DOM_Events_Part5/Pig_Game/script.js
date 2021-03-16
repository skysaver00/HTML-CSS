'use strict';

const score0El = document.querySelector('#score--0') //.은 class, #은 id를 지목한다.
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
//아니면 getElementById를 통해 그냥 Id만을 받아오는 방법도 있다.

/* ****************************************************************
 * querySelector VS getElementByID의 차이
 * 구체적인 엘리먼트를 선택할때는 querySelector, All을 사용한다.
 * 하지만 저것을 사용하려면 원하는 엘리먼트를 선택하려면
 * html에 들어있는 tag를 점점 내려가야 한다.
 * 하지만 getElementById는 바로 선택이 가능하다.
 * 알아서 사용하자.
 */

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let currentScore = 0; //계속 업데이트 하게 된다.
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')
const scores = [0, 0] //이게 final score가 된다.
let activePlayer = Math.trunc(Math.random() * 2)
console.log(activePlayer)
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

if(activePlayer === 0) {
    player0El.classList.add(`player--active`)
    player1El.classList.remove(`player--active`)
} else {
    player1El.classList.add(`player--active`)
    player0El.classList.remove(`player--active`)
}

btnNew.addEventListener('click', function() {

})

btnRoll.addEventListener('click', function() {
    //클릭하면 주사위를 굴린다.
    //만약에 1이 나오면 상대에게 턴을 넘긴다.
    //이외의 숫자는 current에 표시한다.
    const dice = Math.trunc(Math.random() * 6) + 1
    //이제 diceEl을 display해야 한다.
    diceEl.classList.remove('hidden')
    //그리고 src를 바꿔치기 하면 된다. 지금은 dice-5인데 `dice-${}`이렇게 해서 고쳐줄 수 있다.
    diceEl.src = `dice-${dice}.png`

    //이제 1이 나왔으면 플레이어를 바꿔야 한다.
    if(dice != 1) {
        //이러면 주사위를 current에 표시해줘야한다.
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0
        if(activePlayer === 0) activePlayer += 1
        else activePlayer -= 1
        player0El.classList.toggle(`player--active`)
        player1El.classList.toggle(`player--active`)
        currentScore = 0
    }
})

btnHold.addEventListener('click', function() {

})