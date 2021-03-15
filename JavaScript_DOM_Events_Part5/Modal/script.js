'use strict';
////처음으로 UI 컴포넌트를 만들 것이다.
//팝업창과 비슷한 모달. 하지만 팝업창은 원래 페이지를 컨트롤 가능.
//모달창은 창이 띄워지면 원래 페이지를 컨트롤 불가능.

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
//여기서 querySelector는 하나의 element만 가능하다. 따라서 다 고르게 all을 붙여줘야 한다.
console.log(btnsOpenModal)

//class hidden을 없에주면 modal이 살아난다.
//dot는 Selector에서만 붙는다.
const openModal = function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
//얘는 부모 창을 overlay해준다.
//가림막이라던가, 약간 흐리게 이런거
const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden') //위 아래는 서로
}//openModal, closeModal처럼 이렇게 던져주는 것도 가능하다.

for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
    btnCloseModal.addEventListener('click', closeModal)
}

/* 이것을 기억하자!
 * 1.querySelector를 통해 먼저 무엇을 선택해서 만들지 정한다.
 * 2.여러개를 선택해야하는 클래스가 있으면 querySelectorAll을 쓴다.
 * 3.All을 썼다면, for문으로 돌려준다. 그리고 addEventListener를 추가한다.
 * 4.자유롭게 하고 싶으면 function을 따로 선언해 주어도 된다.
 */

//역시 클릭 이벤트를 만들려면, addEventListener를 만들어 줘야한다.