////Using Strict Mode
'use strict';
//이건 무엇인가. 일단 strict 모드는 맨 위에 올리도록 하자.
//실수등을 피할 수 있게 해준다. Strict모드는 몇몇 행동을 제한하거나,
//우릐의 실수를 어느정도 보정해준다.
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true; //s가 빠져있다.
if(hasDriversLicense) console.log('I can drive :D')
//이제 에러메세지가 뜨면서 문제가 있었다는 것을 확인할 수 있다.
//hasDriverLicense에 uncaught ReferenceError가 뜨게 된다.

//const interface = 'Audio';
//역시 에러가 뜬다. interface는 이미 저장되어있는 단어이다.
const private = 500;
//이와 같은건 interface, if, else등과 같은 이미 저장된 단어들이 있다.

