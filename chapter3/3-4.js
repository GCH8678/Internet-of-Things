// 예제 3-4 전역변수와 전역객체(2)

var a = 1;
window.b = 2;
console.log(a,window.a,this.a); // 1 1 1
console.log(b,window.b,this.b); // 2 2 2

window.a = 3;
b = 4;
console.log(a,window.a,this.a); // 3 3 3
console.log(b,window.b,this.b); // 4 4 4

// 전역변수를 선언하면 자바스크립트 엔진은 이를 전역객체의 프로퍼티로 할당한다
// 전역 공간에서는 var 변수를 선언하는 대신 window의 프로퍼티에 직접 할당하더라도 결과적으로
// var로 선언한 것과 똑같이 동작할 것을 예상할 수 있다. (단 삭제 명령을 제외한)