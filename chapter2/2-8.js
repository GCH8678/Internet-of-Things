// 예제 2-8 함수를 정의하는 세가지 방식

function a () {/* */} // 함수 선언문. 함수명 a가 곧 변수명
a();

var b = function () {/* */} // (익명) 함수 표현식, 변수명 b가 곧 함수명
b();

var c = function d() {/* */} // 기명 함수 표현식, 변수명은 c, 함수명은 d.
c(); 
d(); // a,b,c 함수 모두 잘 작동하지만 d()에서는 에러가 발생한다.

// 함수를 정의하는 방법에 대해 알려주는 예제이다.
// 기명 함수 표현식 사용시 주의할 점은 외부에서 함수명으로 함수를 호출할 수 없다는 점이다. (함수명은 함수 내부에서만 접근 가능)