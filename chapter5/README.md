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