// 예제 3-3 전역변수와 전역객체(1)

var a = 1;
console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1 

// 자바스크립트의 모든 변수는 특정 객체의 프로퍼티로서 동작한다.
// 여기서 특정객체란 실행 컨텍스트의 "LexicalEnvironment"이다.
// 실행컨텍스트는 변수를 수집해서 L.E의 프로퍼티로 저장
