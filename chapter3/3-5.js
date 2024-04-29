// 예제 3-5 전역변수와 전역객체(3)

var a = 1;
delete window.a;                // false -> delete 불가
console.log(a,window.a,this.a)  // 1 1 1

var b = 2;
delete window.b;                // false -> delete 불가
console.log(b,window.b,this.b)  // 2 2 2

var c = 3;
delete c;                       // true -> delete 가능
console.log(c,window.c,this.c)  // Uncaught ReferenceError: c is not defined => 실제 크롬상에서는 잘 작동함. (3 3 3 출력)

var d = 4;
delete d;                       // false -> delete 불가
console.log(d,window.d,this.d)  // Uncaught ReferenceError: d is not defined => 실제 크롬상에서는 잘 작동함. (4 4 4 출력)

// 전역 변수를 선언하면 자바스크립트 엔진이 자동으로 전역객체의 프로퍼티로 할당하면서 추가적으로
// 해당 프로퍼티의 configurable attribute(변경 및 삭제가능성)을 false로 정의
