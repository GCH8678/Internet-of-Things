# Explations on the examples in chapter 3

##### 3-1 전역 공간에서의 this(브라우저 환경)
```bash
console.log(this); // {alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(window); // {alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(this === window); // true

전역 공간에서 this는 전역 객체를 가리킨다.
개념상 전역 컨텍스트를 생성하는 주체가 전역 객체이기 때문이다.
브라우저 환경에서는 window, Node.js 환경에서는 global.
```

##### 3-2 전역 공간에서의 this(Node.js 환경)
```bash
console.log(this); // {alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(global); // {alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(this === global); // true

전역 공간에서 this는 전역 객체를 가리킨다.
개념상 전역 컨텍스트를 생성하는 주체가 전역 객체이기 때문이다.
브라우저 환경에서는 window, Node.js 환경에서는 global.

VSCODE 상에서 돌려보면 this가 빈객체가 나온다.
js 파일에서 작성하는 코드 전체는 하나의 함수 내부로 들어가게 되므로 당연히 비교 결과도 false로 나오는 결과이다.
추가적인 설명으로, js파일은 하나의 함수 안에서 실행되므로, 해당 함수 내부에 존재하는 기본 객체가 this의 참조값이 된다.
따라서 교재의 결과와 다르게 나온다.

*다음 코드 참고
console.log(this, module.exports, exports); // {}, {}, {} 
console.log(this === module.exports); // true 
console.log(this === exports); // true 
console.log(module.exports === exports); // true 
console.log(this === global); // false

실제 global이 전역객체인것을 확인하려면 어떤 함수든 일반 함수로 실행되면 해당 함수 내부에서 참조하는 this 는 전역객체라는 점을 이용한다.

* 다음 코드 참고
function a() { 
    console.log(this) // global 
    console.log(this === global) // true 
} 
a()
```

##### 3-3 전역변수와 전역객체(1)
```bash
var a = 1;
console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1 

자바스크립트의 모든 변수는 특정 객체의 프로퍼티로서 동작한다.
여기서 특정객체란 실행 컨텍스트의 "LexicalEnvironment(L.E)"이다.
실행컨텍스트는 변수를 수집해서 L.E의 프로퍼티로 저장된다.
```

##### 3-4 전역변수와 전역객체(2)
```bash
var a = 1;
window.b = 2;
console.log(a,window.a,this.a); // 1 1 1
console.log(b,window.b,this.b); // 2 2 2

window.a = 3;
b = 4;
console.log(a,window.a,this.a); // 3 3 3
console.log(b,window.b,this.b); // 4 4 4


전역변수를 선언하면 자바스크립트 엔진은 이를 전역객체의 프로퍼티로 할당한다.
전역 공간에서는 var 변수를 선언하는 대신 window의 프로퍼티에 직접 할당하더라도 결과적으로 var로 선언한 것과 똑같이 동작할 것을 예상할 수 있다. (단, 삭제 명령을 제외한)
```

##### 3-5 전역변수와 전역객체(3)
```bash
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

전역 변수를 선언하면 자바스크립트 엔진이 자동으로 전역객체의 프로퍼티로 할당하면서 추가적으로 해당 프로퍼티의 configurable attribute(변경 및 삭제가능성)을 false로 정의한다.
```

##### 3-6 함수로서 호출, 메서드로서 호출
```bash
var func = function (x) {
    console.log(this,x);
};
func(1); // window { ... } 1

var obj = {
    method: func
};
obj.method(2); // { methood: f } 2

함수와 메서드를 구분하는 유일한 차이점 : "독립성"
자바스크립트에서는 상황별로 this 키워드에 다른 값을 부여하게 함으로써 이를 구현한다.
```

##### 3-7 메서드로서 호출 - 점 표기법, 대괄호 표기법
```bash
var obj = {
    method: function (x) { console.log(this,x);}
};
obj.method(1);      // { method: f } 1
obj['method'](2);   // { method: f } 2

함수를 호출할 때 그 함수 이름 앞에 객체가 명시되어 있는 경우 : 메서드로 호출한 것
그렇지 않은 모든 경우 : 함수로 호출한 것
```