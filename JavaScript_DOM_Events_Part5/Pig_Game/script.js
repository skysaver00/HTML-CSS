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

