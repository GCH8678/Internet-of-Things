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

##### 4-7 메서드를 콜백 함수로 전달한 경우
```bash
var obj = {
    vals: [1,2,3],
    logValues: function(v,i){
        console.log(this,v,i);
    }
};
obj.logValues(1,2);             // { vals: [1,2,3], logValues: f } 1 2
[4,5,6].forEach(obj.logValues); // Window { ... } 4 0
                                // Window { ... } 5 1
                                // Window { ... } 6 2

콜백 함수로 어떤 객체의 메서드를 전달하더라도 그 메서드는 메서드가 아닌 함수로서 호출된다.
```

##### 4-8 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법(1) - 전통적인 방식
```bash
var obj1 = {
    name: 'obj1',
    func: function (){
        var self = this;
        return function () {
            console.log(self.name);
        };
    }
};
var callback = obj1.func();
setTimeout(callback,1000);

전통적으로 this를 다른 변수에 담아 콜백 함수로 활용할 함수에는 this 대신 그 변수를 사용하게 하고, 이를 클로저로 만드는 방식이 많이 쓰였습니다.
하지만, 이 방식은 실제로 this를 사용하지도 않을뿐더러 번거롭다.
```

##### 4-9 콜백 함수 내부에서 this를 사용하지 않는 경우 
```bash
var obj1 = {
    name: 'obj1',
    func: function(){
        console.log(obj1.name);
    }
};
setTimeout(obj1.func, 1000);

앞선 예제에서 this를 사용하지 않았을 경우 4-9예제의 결과가 나온다.
간결하고 직관적이지만 this를 이용해 다양한 상황에 재활용할 수 없다.
```

##### 4-10 예제 4-8의 func 함수 재활용
```bash
var obj1 = {
    name: 'obj1',
    func: function (){
        var self = this;
        return function () {
            console.log(self.name);
        };
    }
};
var callback = obj1.func();
setTimeout(callback,1000);

var obj2 = {
    name: 'obj2',
    func: obj1.func
};
var callback2 = obj2.func();
setTimeout(callback2,1500);

var obj3 = {name: 'obj3'};
var callback3 = obj1.func();
setTimeout(callback3,2000)

예제 4-8의 방법은 번거롭긴 하지만 this를 우회적으로나마 활용함으로써 다양한 상황에서 원하는 객체를 바라보는 콜백 함수를 만들 수 있는 방법이다.
```

##### 4-11 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법(2) - bind 메서드 활용
```bash
var obj1 = {
    name: 'obj1',
    func: function(){
        console.log(this.name);
    }
};
setTimeout(obj1.func.bind(obj1),1000);

var obj2 = { name: 'obj2' }
setTimeout(obj1.func.bind(obj2),1500);

ES5에서 등장한 bind 메서드를 이용하는 방법이다.
예제 4-9의 처음부터 바라볼 객체를 명시적으로 지정하기 때문에 다른 객체를 바라볼 수 없게 되는 아쉬움을 보안하는 훌륭한 방법이다. 
```

##### 4-12 콜백 지옥 예시(1-1)
```bash
setTimeout(
    function(name) {
      var coffeeList = name;
      console.log(coffeeList);
  
      setTimeout(
        function(name) {
          coffeeList += ', ' + name;
          console.log(coffeeList);
   
          setTimeout(
            function(name) {
              coffeeList += ', ' + name;
              console.log(coffeeList);
  
              setTimeout(
                function(name) {
                  coffeeList += ', ' + name;
                  console.log(coffeeList);
                },
                500,
                '카페라떼'
              );
            },
            500,
            '카페모카'
          );
        },
        500,
        '아메리카노'
      );
    },
    500,
    '에스프레소'
  );

콜백 지옥은 콜백 함수를 익명 함수로 전달하는 과정이 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상으로, 자바스크립트에서 흔히 발생하는 문제이다.
```

##### 4-13 콜백 지옥 해결 - 기명함수로 변환
```bash
var coffeeList = '';

var addEspresso = function(name) {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 500, '아메리카노');
};
var addAmericano = function(name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addMocha, 500, '카페모카');
};
var addMocha = function(name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addLatte, 500, '카페라떼');
};
var addLatte = function(name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');

가독성 문제와 어색함을 동시에 해결하는 가장 간단한 방법으로 익명의 콜백 함수를 모두 기명함수로 전환하는 방법이 있다.
```

##### 4-14 비동기 작업의 동기적 표현(1) - Promise(1)
```bash
new Promise(function (resolve){
    setTimeout(function(){
        var name = '에스프레소';
        console.log(name);
        resolve(name);
    },500);
}).then(function (preName){
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = preName + ', 아메리카노';
            console.log(name);
            resolve(name);
        },500);
    });
}).then(function (preName){
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = preName + ', 카페모카';
            console.log(name);
            resolve(name);
        },500);
    });
}).then(function (preName){
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = preName + ', 카페라뗴';
            console.log(name);
            resolve(name);
        },500);
    });
})

ES6의 Promise를 이용한 방식이다.
new 연산자와 함께 호출한 Promise의 인자로 넘겨주는 콜백 함수는 호출할 때 바로 실행되지만 그 내부에 resolve 또는 reject 함수를 호출하는 구문이 있을 경우 둘 중 하나가 실행되기 전까지는 다음(then) 또는 오류 구문(catch)로 넘어가지 않는다.
따라서 비동기 작업이 완료될 때 비로소 resolve 또는 reject를 호출하는 방법으로 비동기 작업의 동기적 표현이 가능하다.
```


##### 4-15 비동기 작업의 동기적 표현(2) - Promise(2)
```bash
var addCoffee = function (name){
    return function (prevName){
        return new Promise(function(resolve){
            setTimeout(function(){
                var newName = prevName ? (prevName+','+name):name;
                console.log(newName);
                resolve(newName);
            },500);
        });
    };
};
addCoffee('에스프레소')()
.then(addCoffee('아메리카노'))
.then(addCoffee('카페모카'))
.then(addCoffee('카페라뗴'))

예제 4-15는 예제 4-14의 반복적인 내용을 함수화해서 더욱 짧게 표현한 것이다.
```

##### 4-16 비동기 작업의 동기적 표현 (3) - Generator
```bash
var addCoffee = function(prevName,name){
    setTimeout(function(){
        coffeeMaker.next(prevName ? prevName + ', '+name:name);
    },500);
};
var coffeeGenerator = function* (){
    var espresso = yield addCoffee('','에스프레소');
    console.log(espresso);
    var americano = yield addCoffee(espresso,'아메리카노')
    console.log(americano)
    var mocha = yield addCoffee(americano,'카페모카')
    console.log(mocha)
    var latte = yield addCoffee(mocha,'카페라떼')
    console.log(latte)
}
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();

예제 4-16은 ES6의 Generator를 이용했다.
6번째 줄의 *이 붙은 함수가 바로 Generator 함수이다.
Generator 함수를 실행하면 Iterator 가 반환되는데, Iterator는 next 메서드를 가지고 있다.
이 next 메서드를 호출하면 Generator함수 내부에서 가장 먼저 등장하는 yield에서 함수의 실행을 멈춘다.
비동기 작업이 완료되는 시점마다 next 메서드를 호출해준다면 Generator함수 내부의 소스가 위에서 부터 아래로 순차적으로 진행된다.
```

##### 4-17 비동기 작업의 동기적 표현(4) - Promise + Async/await
```bash
var addCoffee = function (name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name);
        },500);
    });
};
var coffeeMaker = async function (){
    var coffeeList = '';
    var _addCoffee = async function (name){
        coffeeList += (coffeeList ? ',':'') + await addCoffee(name);
    };
    await _addCoffee('에스프레소');
    console.log(coffeeList);
    await _addCoffee('아메리카노');
    console.log(coffeeList);
    await _addCoffee('카페모카');
    console.log(coffeeList);
    await _addCoffee('카페라떼');
    console.log(coffeeList);
}
coffeeMaker()

ES2017에서 가독성이 뛰어나면서 작성법도 간단한 새로운 기능이 추가되었다.
비동기 작업을 수행하고자 하는 함수 앞에 async를 표기하고, 함수 내부에서 실질적인 비동기 작업이 필요한 위치마다 await을 표기하는 것만으로 뒤의 내용을 Promise로 자동 전환하고, 해당 내용이 resolve된 이후에야 다음으로 진행한다.
즉 Promise의 then과 흡사한 효과를 얻을 수 있다.
```