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

##### 5-4 return 없이도 클로저가 발생하는 다양한 경우
```bash
// (1) setInterval/setTimeout
(function(){
    var a = 0;
    var intervalId = null;
    var inner = function(){
        if(++a>=10){
            clearInterval(intervalId);
        }
        console.log(a);
    };
    intervalId = setInterval(inner,1000);
})();
// (2) eventListener
(function(){
    var count = 0;
    var button = document.createElement('button');
    button.innerText='click';
    button.addEventListener('click',function(){
        console.log(++count,'times clicked');
    });
    document.body.appendChild(button);
})();

(1)의 경우 별도의 외부 객체인 window의 메서드에 전달할 콜백 함수 내부에서 지역변수를 참조한다.
(2)의 경우 별도의 외부객체인 DOM의 메서드에 등록할 handler 함수 내부에서 지역변수를 참조한다.
두 상황 모두 지역변수를 참조하는 내부함수를 외부에 전달했기 때문에 클로저이다.
```


##### 5-5 클로저의 메모리 관리
```bash
// (1) return 에 의한 클로저의 메모리 해제
var outer = (function(){
    var a = 1;
    var inner = function(){
        return ++a;
    };
    return inner;
})();
console.log(outer());
console.log(outer());
outer = null; // outer 식별자의 inner 함수 참조를 끊음

// (2) setInterval에 의한 클로저의 메모리 해제
(function(){
    var a = 0;
    var intervalId = null;
    var inner = function(){
        if (++a>=10){
            clearInterval(intervalId);
            inner = null;   // inner 식별자의 함수 참조를 끊음
        }
        console.log(a);
    };
    intervalId = setInterval(inner,1000);
})();

// (3) eventListener에 의한 클로저의 메모리 해제
(function(){
    var count = 0;
    var button = document.createElement('button');
    button.innerText='click';

    var clickHandler = function(){
        console.log(++count,'times clicked');
        if(count>=10){
            button.removeEventListener('click',clickHandler);
            clickHandler=null; // clickHandler 식별자의 함수 참조를 끊음
        }
    }
})

클로저의 특성을 정확히 이해해야 메모리 누수등의 위험을 최소화 할 수 있다.
하지만, 최근의 자바스크립트 엔진에서는 위와 같은 위험이 크게 줄어들었고, 개발자의 의도하에 생기는 메모리 소비에 대한 관리법만 잘 파악해서 적용하면 충분하다.
```

##### 5-6 콜백 함수와 클로저(1)
```bash
var fruits = ['apple','banana','peach'];
var $ul = document.createElement('ul');

fruits.forEach(function(fruit){
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click',function(){
        alert('your choice is '+fruit);
    });
    $ul.appendChild($li);
});
document.body.appendChild($ul);

대표적인 콜백 함수 중 하나인 이벤트 리스너에 관한 예시이다.
클로저의 '외부 데이터'에 주목하면서 흐름을 따라가자.
```