'use strict';

//querySelector()는 요소를 선택하게 해주는 메서드이다.
//가장 첫번째 요소만을 선택한다.
console.log(document.querySelector('.message')) //그럼 class message가 선택이 된다.
//message가 여러개면 그중에 하나만 가져온다.
console.log(document.querySelector('.message').textContent)
//text content를 가져온다.

