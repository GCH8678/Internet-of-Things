# Explations on the examples in chapter 5

##### 5-1 외부 함수의 변수를 참조하는 내부 함수(1)
```bash
var outer = function() {
    var a = 1;
    var inner = function() {
      console.log(++a);
    };
    inner();
  };
  outer();

클로저란 "어떤 함수 에서 선언한 변수를 참조하는 내부함수에서만 발생하는 현상" 이다.
해당 예제는 외부 함수의 변수를 참조하는 내부 함수에 관한 예제이다.
```

##### 5-2 외부 함수의 변수를 참조하는 내부 함수(2)
```bash
var outer = function () {
    var a = 1;
    var inner = function(){
        return ++a;
    };
    return inner();
};
var outer2 = outer();
console.log(outer2)

inner함수 내부에서 외부 변수인 a를 사용했지만, inner함수를 실행한 결과를 리턴하고 있기 때문에, outer 함수의 실행 컨텍스트가 종료된 시점에는 a 변수를 참조하는 대상이 사라진다. 
a와 inner변수의 값들은 가비지 컬렉터에 의해 소멸하게 된다.
```

##### 예제 5-3 외부 함수의 변수를 참조하는 내부 함수(3)
```bash
var outer = function(){
    var a = 1;
    var inner = function(){
        return ++a;
    };
    return inner;
};
var outer2 = outer();
console.log(outer2()); // 2
console.log(outer2()); // 3

가비지 컬렉터의 동작방식 때문에 inner함수의 실행 시점에 outer함수가 종료 상태이지만 out함수의 Lexicalenviroment에 접근할 수 있게 된다.
가비지 컬렉터는 어떤 값을 참조하는 변수가 하나라도 있다면 그 값은 수집 대상에 포함시키지 않는다.
```