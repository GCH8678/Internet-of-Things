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

##### 2-2 매개변수와 변수에 대한 호이스팅(1) - 원본 코드
```bash
function a(x) {
    // 수집대상 1 (매개변수)
    console.log(x); // (1) 1 출력
    var x; // 수집 대상 2 (변수 선언)
    console.log(x); //(2) 1 출력
    var x= 2; // 수집 대상 3 (변수 선언)
    console.log(x); // (3) 2 출력
}
a(1);

1, undefined,2 가 아닌 1,1,2 가 출력된다.
인자를 함수 내부의 다른 코드보다 먼저 선언 및 할당이 이뤄진것 처럼 간주할 수있다. (호이스팅)
위 예제는 2-3과 동일하게 작동한다 (LexicalEnvironment 입장에선 완전히 같다)
```

##### 2-3 매개변수와 변수에 대한 호이스팅(2) - 매개변수를 변수 선언/할당과 같다고 간주해서 변환한 상태
```bash
function a() {
    var x = 1; // 수집 대상 1(매개변수 선언)
    console.log(x); // (1) 1 출력
    var x; // 수집 대상 2(변수 선언)
    console.log(x); // (2) 1 출력
    var x = 2; // 수집 대상 3(변수 선언)
    console.log(x); // (3) 2 출력
}
a()

호이스팅할 때 변수명만 끌어오고 할당 과정은 원래 자리에 그대로 남겨둔다.
매개변수의 경우도 마찬가지이다.
수집 대상 1,2,3을 순서대로 끌어올리면 예제 2-4와 같은 형태로 바뀐다.
```

##### 2-4 매개변수와 변수에 대한 호이스팅 (3) - 호이스팅을 마친 상태
```bash
function a() {
    var x; // 수집 대상 1의 변수 선언 부분
    var x; // 수집 대상 2의 변수 선언 부분
    var x; // 수집 대상 3의 변수 선언 부분

    x = 1;  //수집 대상 1의 할당 부분
    console.log(x); // (1) 1 출력
    console.log(x); // (2) 1 출력
    x = 2;
    console.log(x); // (3) 2 출력
}
a()

environment record는 현재 실행될 컨텍스트의 대상 코드 내 어떤 식별자들이 있는지만 관심이 있다
예제 2-2,2-3,2-4 는 environment record입장에서 다를것이 없다
실행 결과도 2-2,2-3,2-4와 동일하다.
```

##### 2-5 함수 선언의 호이스팅(1) - 원본 코드
```bash
function a(){
    console.log(b); // (1) [Function : b] 출력
    var b = 'bbb'; // 수집대상 1(변수 선언)
    console.log(b); // (2) 'bbb' 출력
    function b() {} // 수집대상 2(함수 선언)
    console.log(b); // (3) 'bbb' 출력
}
a();

a 함수 실행 순간 a 함수의 실행 컨텍스트가 생성된다
이때 변수명과 함수 선언의 정보를 위로 끌어올린다
변수는 선언부만 끌어올리지만 함수 선언은 함수 전체를 끌어올린다
```

##### 2-6 함수 선언의 호이스팅(2)-호이스팅을 마친 상태
```bash
function a(){
    var b;  // 수집 대상 1. 변수는 선언부만 끌어올립니다.
    function b() {} // 수집 대상 2. 함수 선언은 전체를 끌어올립니다.

    console.log(b);  //(1) [Function: b] 출력
    b='bbb';        // 변수의 할당부는 원래 자리에 남겨둡니다.
    console.log(b); // (2) 'bbb' 출력
    console.log(b); // (3) 'bbb' 출력
}
a();

2-5의 예제와 해당 예제는 동일하게 작동한다. 
이 예제는 2-5 예제의 호이스팅을 마친 상태를 코드로 표현한 것이다.
```

##### 2-7 함수 선언의 호이스팅(3)-함수 선언문을 함수 표현식으로 바꾼 코드
```bash
function a(){
    var b;
    var b = function b () {}

    console.log(b)
    b='bbb'
    console.log(b)
    console.log(b)
}
a();

예제 2-5,2-6에서의 코드와 동일하게 작동한다.
해석의 편의성을 위해 함수 선언문을 함수 표현식으로 바꾼 예제이다.
```

##### 2-8 함수를 정의하는 세가지 방식
```bash
function a () {/* */} // 함수 선언문. 함수명 a가 곧 변수명
a();
var b = function () {/* */} // (익명) 함수 표현식, 변수명 b가 곧 함수명
b();

var c = function d() {/* */} // 기명 함수 표현식, 변수명은 c, 함수명은 d.
c(); 
d(); // a,b,c 함수 모두 잘 작동하지만 d()에서는 에러가 발생한다.

함수를 정의하는 방법에 대해 알려주는 예제이다.
기명 함수 표현식 사용시 주의할 점은 외부에서 함수명으로 함수를 호출할 수 없다는 점이다. 
(함수명은 함수 내부에서만 접근 가능)
```

##### 2-9 함수 선언문과 함수 표현식(1)-원본 코드
```bash
console.log(sum(1,2));
console.log(multiply(3,4))
function sum (a,b){ //함수 선언문 sum
    return a+b;
}
var multiply = function (a,b){ // 함수 표현식 multiply
    return a*b;
};

함수 표현식에서 주의할 점은 console.log 함수에서 사용되는 multiply는 아직 할당이 되지 않았기 때문에 not a function라는 TypeError가 발생한다.
함수 선언문은 전체를 호이스팅하고 함수 표현식은 변수 선언부만 호이스팅 했기 때문에 생긴 문제이다.
```

##### 2-10 함수 선언문과 함수 표현식(2)-호이스팅을 마친 상태
```bash
var sum = function sum (a,b){ // 함수 선언문은 전체를 호이스팅
    return a+b;    
};
var multiply; // 변수는 선언부만 끌어올린다.
console.log(sum(1,2));
console.log(multiply(3,4));

multiply = function (a,b) {
    return a*b;
}

예제 2-9와 동일하게 작동한다.
호이스팅을 마친 상태를 코드로 표현한 것이다
```

##### 2-11 함수 선언문의 위험성
```bash
console.log(sum(3,4))
/** (중략) */
function sum(x,y){
    return x+y;
};
/** (중략) */
var a = sum(1,2);
/** (중략) */
function sum(x,y){
    return x+'+'+y+'='+(x+y);
}
/** (중략) */
var c = sum(1,2);
console.log(c);

전역 컨텍스트가 활성화 될 때 전역공간에 선언된 함수들이 모두 가장 위로 끌여올려진다.
동일한 변수명에 서로 다른 값을 할당할 경우 나중에 할당한 값이 먼저 할당한 값을 덮어씌우게 된다.
따라서, 위와 같은 예제에서 마지막 함수만 동작하게 된다.
에러가 발생하지 않아 디버깅에 어려움이 발생한다.
```