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

##### 4-2 콜백 함수 예제 (1-2) setInterval
```bash
var count = 0;
var cbFunc = function(){
    console.log(count);
    if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc,300);
// -- 실행 결과 --
// 0  (0.3초)
// 1  (0.6초)
// 2  (0.9초)
// 3  (1.2초)
// 4  (1.5초)

timer에는 setInterval 의 id가 담긴다
콜백 함수 내부에서 count 을 출력된다.

- 코드 실행 방식과 제어권
 code                       호출 주체       제어권
 cbFunc();                    사용자        사용자
 //setInterval(cbFunc,300); setInterval  setInterval
```

##### 4-3 콜백 함수 예제 (2-1) Array.prototype.map
```bash
var newArr = [10,20,30].map(function(currentValue,index){
    console.log(currentValue,index);
    return currentValue = 5;
});
  // -- 실행 결과 --
  // 10 0
  // 20 1
  // 30 2
  // [15, 25, 35]

  
Array의 prototype에 담긴 map 메서든는 다음과 같은 구조로 이루어져 있다.
Array.prototype.map(callback[,thisArg])
callback: function(currentValue,index,array)

map 메서드는 메서드의 대상이 되는 배열의 모든 요소들을 처음부터 끝까지 하나씩 꺼내어 콜백 함수를 반복 호출,
콜백 함수의 실행 결과들을 모아 새로운 배열을 만든다.
```

##### 4-4 콜백 함수 예제 (2-2) Array.prototype.map - 인자의 순서를 임의로 바꾸어 사용한 경우
```bash
var newArr2 = [10,20,30].map(function(index,currentValue){
    console.log(index,currentValue);
    return currentValue+5;
});
console.log(newArr2)  

// -- 실행 결과 --
// 10 0
// 20 1
// 30 2
// [15, 25, 35]

인자의 순서를 임의로 바꾸어 사용한 경우를 보여준 예제이다.
콜백 함수의 제어권을 넘겨받은 코드는 콜백 함수를 호출할 때 인자에 어떤 값들을 어떤 순서로 넘길 것인지에 대한 제어권을 가진다.
```

##### 4-5 콜백 함수 예제 (2-3) Array.prototype.map - 구현
```bash
Array.prototype.map = function (callback,thisArg){
    var mappedArr = [];
    for (var i = 0; i<this.length; i++){
        var mappedValue = callback.call(thisArg || window, this[i],i,this);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
}

map 메서드에 대한 동작 원리를 이해하기 위한 예제이다.
this에 thisArg값이 있을 경우 그 값을 ,없을 경우에 전역객체를 지정한다.
첫번째 인자는 this가 배열을 가리킬 것이므로 배열의 i 번째 요소 값을,
두번쨰 인자는 i 값을, 세번째 인자는 배열 자체를 지정해 호출한다.

this에 다른값이 담기는 이유이기도 하다.
```

##### 4-6 콜백 함수 내부에서의 this
```bash
setTimeout(function(){console.log(this);},300); // (1) Window { ... }
[1,2,3,4,5].forEach(function(x){
    console.log(this);                      // (2) Window { ... }
});
document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a")
.addEventListener('click',function(e){
    console.log(this,e); //     (3) <button id="a">클릭</button>
                         //         MouseEvent { isTrusted: true, ... }
});

콜백 함수 내부에서의 this에 대한 예제이다.
this에 다른 값이 담기는 이유는 제어권을 넘겨받을 코드에서 call/apply 메서드의 첫 번쨰 인자에 콜백 함수 내부에서의 this가 될 대상을 명시적으로 바인딩하기 떄문이다.
```