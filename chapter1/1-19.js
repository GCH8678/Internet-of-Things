// 예제 1-19 자동으로 undefined를 부여하는 경우

var a;
console.log(a);

var obj = {a:1};
console.log(obj.a); // 1
console.log(obj.b); // (2) 존재하지 않는 프로퍼티에 접근
console.log(b) // c.f) ReferenceError: b is not defined

var func = function() {};
varc = func(); // (3) 반환(return) 값이 없으면 undefined를 반환한 것으로 간주
console.log(c); // undefined

// undefined를 할당하는 것은 혼동을 가져오기 때문에 NULL을 할당하는 것을 권장.
// undefined는 자바스크립트 엔진만 사용하는 것이 좋다.