# Explations on the examples in chapter 4

##### 4-1 콜백 함수 예제 (1-1) setInterval
```bash
var count = 0;
var timer = setInterval(function(){
    console.log(count);
    if (++count>4) clearInterval(timer);
},300)

콜백 함수는 다른 코드의 인자로 넘겨주는 함수이며, 다른 코드에게 인자로 넘겨줌으로써 제어권도 함께 위임한 함수이다.

setInterval의 구조를 살펴보면 
var intervalID = scop.esetInterval(func,delay[,param1,param2, ...]);
scope에는 Window 객체 또는 Worker의 인스턴스가 들어올 수 있다.
두 객체 모두 setInterval 메서드를 제공하기에, 일반적인 브라우저 환경에서는 window를 생략해 함수처럼 사용 가능하다.
해당 메소드를 실행하면 반복적으로 실행되는 내용 자체를 특정할 수 있는 고유한 ID 값이 반환한다.
이를 변수에 담는 이유는 반복 실행되는 중간에 종료할 수 있게 하기 위해서이다.
```

