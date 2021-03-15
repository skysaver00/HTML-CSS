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

for(let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].addEventListener('click', function() {
        //class hidden을 없에주면 modal이 살아난다.
        modal.classList.remove('hidden') //dot는 Selector에서만 붙는다.
        //아직 모달을 지우지는 못한다.
        overlay.classList.remove('hidden')
    }))
}

//역시 클릭 이벤트를 만들려면, addEventListener를 만들어 줘야한다.