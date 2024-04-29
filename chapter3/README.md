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

##### 3-8 메서드 내부에서의 this
```bash
var obj = {
    methodA: function () {console.log(this);},
    inner: {
        methodB: function(){console.log(this);}
    }
};

obj.methodA();              // { methodA: f, inner: {...} } ( === obj)
obj['methodA']();           // { methodA: f, inner: {...} } ( === obj)

obj.inner.methodB();
obj.inner['methodB']();     // { methodB: f }               ( === obj.inner)
obj['inner'].methodB();     // { methodB: f }               ( === obj.inner)
obj['inner']['methodB']();  // { methodB: f }               ( === obj.inner)

this에는 호출한 주체에 대한 정보가 담긴다.
함수를 메서드로 호출한 경우 호출한 주체는 함수명 앞의 객체 => 이 객체가 곧 this가 된다.
```

##### 3-9 내부함수에서의 this
```bash
var obj1 = {
    outer: function () {
        console.log(this); // (1)
        var innerFunc = function (){
            console.log(this) // (2) (3)
        }
        innerFunc();

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod();
    }
};
obj1.outer();

this가 가리키고 있는 것
(1): obj1, (2) 전역객체(window), (3): obj2
```

##### 3-10 내부함수에서의 this를 우회하는 방법
```bash
var obj = {
    outer: function() {
        console.log(this);              // (1) {outer: f}
        var innerFunc1 = function(){
            console.log(this);          // (2) Window {...}
        };
        innerFunc1();

        var self = this;
        var innerFunc2 = function(){
            console.log(self);          // (3) { outer: f }
        };
        innerFunc2();
    }
};
obj.outer();

innerFunc1 내부에서 this는 전역객체를 가리킨다.
한편 outer 스코프에서 self라는 변수에 this를 저장한 상태에서 호출한 innerFUnc2의 경우 self에는 객체 obj가 출력된다.
이와 같은 방식으로 this를 상속한 것 처럼 활용된다.
```

##### 3-11 this를 바인딩하지 않는 함수(화살표 함수)
```bash
var obj = {
    outer: function(){
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        };
        innerFunc();
    }
};
obj.outer();

함수 내부에서 this가 전역객체를 바라보는 문제를 보완하고자 도입되었다.
화살표 함수는 실행 컨텍스트를 생성할 때 this 바인딩 과정 자체가 빠지게 되어, 상위 스코프의 this를 그대로 활용한다.
```

##### 3-12 콜백 함수 내부에서의 this
```bash
setTimeout(function () { console.log(this);},300);          //(1)

[1,2,3,4,5].forEach(function(x){                            //(2)
    console.log(this,x);
});

document.body.innerHTML += '<button id="a">클릭</button>';  //(3)
document.body.querySelector('#a')
    .addEventListener('click',function (e){
        console.log(this,e)
    });

콜백 함수도 함수이기 때문에 기본적으로 this가 전역객체를 참조하지만,
제어권을 받은 함수에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는 그대상을 참조하게 된다.
(1)(2)는 전역객체를 참조한다.
(3)의 addEventListener 메서드는 콜백 함수를 호출할 때 자신의 this를 상속하도록 정의되어 있다.(document.body.querySelector('#a')가 this)
```

##### 3-13 생성자 함수
```bash
var Cat = function (name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
};

var choco = new Cat('초코',7);
var nabi = new Cat('나비',5);
console.log(choco,nabi);
/**
 * Cat{ bark : '야옹', name: '초코', age:7}
 * Cat{ bark : '야옹', name: '나비', age:5}
 */


생성자 함수를 호출하면 생성자의 prototype 프로퍼티를 참조하는 __proto__ 라는 프로퍼티가 있는 객체를 만들고, 미리 준비된 공통 속성 및 개성을 해당 객체(this)에 부여한다.
생성자 함수로서 호출된 경우 : 내부에서의 this는 새로 만들 구체적인 인스턴스 자신
```

##### 3-14 call 메서드(1)
```bash
var func = function (a,b,c) {
    console.log(this,a,b,c);
}

func(1,2,3);            // Window{ ... } 1 2 3
func.call({x:1}, 4,5,6) // { x: 1 } 4 5 6

this에 별도의 대상을 바인딩하는 방법중 하나이다.
call 메서드는 메서드의 호출 주체인 함수를 즉시 실행하도록 하는 명령어 메서드의 첫번째 인자를 this로 바인딩, 이후의 인자들을 호출할 함수의 매개변수로 한다.
함수를 그냥 실행하면 this는 전역객체를 참조하지만, call 메서드 이용시 객체를 this로 지정한다.
```

##### 3-15 call 메서드(2)
```bash
var obj = {
    a: 1,
    method: function(x,y){
        console.log(this.a,x,y);
    }
};

obj.method(2,3);            // 1 2 3
obj.method.call({a:4},5,6)  // 4 5 6

메서드에 대해서도 마찬가지로 객체의 메서드를 그냥 호출하면 this는 객체를 참조하지만, call 메서드를 이용하면 임의의 객체를 this로 지정 가능하다.
```

##### 3-16 apply 메서드
```bash
var func = function(a,b,c){
    console.log(this,a,b,c);
};
func.applly({x:1},[4,5,6]); // { x:1 } 4 5 6

var obj = {
    a:1,
    method: function(x,y){
        console.log(this.a,x,y)
    }
};
obj.method.apply({a:4},[5,6])

apply 메서드는 call 메서드와 기능적으로 완전히 동일하다.
apply 메서드는 두 번째 인자를 배열로 받아 그 배열의 요소들을 호출할 함수의 매개변수로 지정한다.
```

##### 3-17 call/apply 메서드의 활용 1-1) 유사배열객체에 배열 메서드를 적용
```bash
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
Array.prototype.push.call(obj,'d');
console.log(obj);                   // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length:4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr);                   // ['a','b','c','d']


call/apply 메서드를 이용하여 객체에 배열 메서드를 적용한 예제이다.
```


##### 3-18 call/apply 메서드의 활용 1-2) arguments, NodeList에 배열 메서드 적용
```bash
function a () {
    var argv = Array.prototype.slice.call(arguments);
    argv.forEach(function(arg){
        console.log(arg)
    });
}
a(1,2,3);

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
var nodeList = document.querySelectorAll('div');
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function(node){
    console.log(node);
})

그 밖에도 유사배열객체에는 call/apply 메서드를 이용해 모든 배열 메서드를 적용할 수 있다.
단 문자열의 경우 length 프로퍼티가 읽기 전용이므로 원본 문자열에 변경을 가하는 메서드는 에러를 던진다.
concat도 대상이 반드시 배열이어야 하는 경우 에러가 나지 않더라도 원하는 결과를 얻을 수 없다.
```


##### 3-19 call/apply 메서드의 활용 1-3) 문자열에 배열 메서드 적용 예시
```bash
var str = 'abc def';

//Array.prototype.push.call(str,', pushed string'); // Error : Cannot assign to read only property 'length' of object [object String]
Array.prototype.concat.call(str,'string'); // [String {'abc def'}, 'string']

Array.prototype.every.call(str,function(char){return char !== ' ';}); // false
Array.prototype.some.call(str,function(char){return char === ' '}); // true

var newArr = Array.prototype.map.call(str,function(char){ return char+"!";})
console.log(newArr) // ['a!','b!','c!',' !','d!','e!','f!']

var newStr = Array.prototype.reduce.apply(str,[
    function(string,char,i) {return string+char+i;},
    ''
]);
console.log(newStr)


문자열의 경우 length 프로퍼티가 읽기 전용이므로 원본 문자열에 변경을 가하는 메서드는 에러를 던진다.
concat도 대상이 반드시 배열이어야 하는 경우 에러가 나지 않더라도 원하는 결과를 얻을 수 없다.
```

##### 3-20 call/apply 메서드의 활용 1-4) ES6의 Array.from  메서드
```bash
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
var arr = Array.from(obj);
console.log(arr);


ES6에서  유사배열객체 또는 순회 가능한 모든 종류의 데이터 타입을 배열로 전환하는 Array.from 메서드를 도입함으로써, 예제 3-19와 같은 활용은 잘 사용하지 않는다. (경험 없이 코드를 보고 의도를 파악하기 쉽지 않는 문제)
```


##### 3-21 call/apply 메서드의 활용 2) 생성자 내부에서 다른 생성자를 호출
```bash
function Person(name,gender){
    this.name = name;
    this.gender = gender;
}

function Student(name,gender,school){
    Person.call(this,name,gender);
    this.school=school;
}

function Employee(name,gender,company){
    Person.apply(this,[name,gender]);
    this.company = company;
}
var by = new Student('보영','female','단국대');
var jn = new Employee('재난','male','구골');


생성자 내부에 다른 생성자와 공통된 내용이 있을 경우 call 또는 apply 를 이용하여 다른 생성자를 호출하면 간단하게 반복을 줄일 수 있다.
```


##### 3-22 call/apply 메서드의 활용 3-1) 최대/최솟값을 구하는 코드를 직접 구현
```bash
var numbers = [10,20,3,16,45];
var max = min = numbers[0];
numbers.forEach(function(number){
    if(number>max){
        max = number;
    }
    if(number<min){
        min = number
    }
});
console.log(max,min)    // 45 3


코드가 불필요하게 길고 가독성도 떨어진다.
이후의 두 예제의 방법을 통해 개선할 수 있다.
```

##### 3-23 call/apply 메서드의 활용 3-2) 여러 인수를 받는 메세드(Math.max/Math.min)에 apply 적용
```bash
var numbers = [10,20,3,16,45];
var max = Math.max.apply(null,numbers);
var min = Math.min.apply(null,numbers);
console.log(max,min)    // 45 3

Math.max/Math.min메서드에 apply 를 적용하여 예제 2-22를 더 간단히 구현했다.
```


##### 3-24 callk/apply 메서드의 활용 3-3) ES6의 펼치기 연산자 활용
```bash
const numbers = [10,20,3,16,45];
const max = Math.max(...numbers)
const min = Math.min(...numbers)
console.log(max,min)

ES6에서의 펼치기 연산자를 이용하여 apply를 적용한 것 보다 더욱 간편하게 예제 3-23보다 더 쉽게 구현했다.
```
