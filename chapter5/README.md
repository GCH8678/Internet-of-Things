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