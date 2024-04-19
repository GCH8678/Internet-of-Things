# Explations on the examples in chapter 2

##### 2-1 실행 컨텍스트랑 콜 스택
```bash
// -------------------------- (1)
var a = 1;
function outer() {
  function inner() {
    console.log(a); // undefined
    var a = 3;
  }
  inner(); // ------------ (2)
  console.log(a); // 1
}
outer(); // ---------------- (3)
console.log(a); // 1

declaration - 선언 => var a : 선언 / function outer(), inner() : 선언
expression - 표현 => a=1, console.log(a) ... 등이 expression이다.
(declaration이 아닌 것들을 전부 표현이라 봐도 무방하다.)

(1) 전역 컨텍스트가 콜 스택에 담긴다
(3) outer 함수를 호출하면 자바스크립트 엔진은 outer에 대한 환경 정보를 수집하여 실행 컨텍스트를 생성한 후 콜 스택에 담긴다
(2) 에서 inner 함수의 실행 컨텍스트가 콜 스택 가장 위에 담긴다

콜 스택의 위에서 부터 순차적으로 실행된다.
```
