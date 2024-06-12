# Explations on the examples in chapter 6

##### 6-1 Person.prototype
```bash
var Person = function(name){
    this._name = name;
}
Person.prototype.getName = function(){
    return this._name
}
var suzi = new Person("Suzi")
console.log(suzi.__proto__.getName())             // undefined
console.log(Person.prototype === suzi.__proto__)  // true

함수의 prototype에 어떤 메서드나 프로퍼티가 있다면 인스턴스에서도 마치 자신의 것처럼 해당 메서드나 프로퍼티에 접근할 수 있게 된다.
```

##### 6-2 prototype과 __proto__
```bash
var Constructor = function (name){
    this.name = name;
};
Constructor.prototype.method1 = function(){};
Constructor.prototype.property1 = "Constructor Prototype Property";

var instance = new Constructor("Instance");
console.dir(Constructor);
console.dir(instance);

함수의 prototype에 어떤 메서드나 프로퍼티가 있다면 인스턴스에서도 마치 자신의 것처럼 해당 메서드나 프로퍼티에 접근할 수 있게 된다.
크롬 개발자 도구의 콘솔 탭을 열어 출력 결과를 살펴보자.
```

##### 6-3 constructor 프로퍼티
```bash
var arr = [1,2];
console.log(Array.prototype.constructor === Array)  // true
console.log(arr.__proto__.constructor === Array)    // true
console.log(arr.constructor === Array)              // true

var arr2 = new arr.constructor(3,4);
console.log(arr2);                                  // [3,4]

생성자 함수의 프로퍼티인 prototype 객체 내부에는 constructor라는 프로퍼티가 있다.
생성자 함수를 참조한다.
```

##### 6-4 constructor 변경
```bash
var NewConstructor = function(){
    console.log("this is new constructor!");
};
var dataType = [
    1, // Number & false
    'test', // String & false
    true, // Boolean & false
    {}, // NewConstructor & false
    [], // NewConstructor & false
    function() {}, // NewConstructor & false
    /test/, // NewConstructor & false
    new Number(), // NewConstructor & false
    new String(), // NewConstructor & false
    new Boolean(), // NewConstructor & false
    new Object(), // NewConstructor & false
    new Array(), // NewConstructor & false
    new Function(), // NewConstructor & false
    new RegExp(), // NewConstructor & false
    new Date(), // NewConstructor & false
    new Error(), // NewConstructor & false
]

dataType.forEach(function(d){
    d.constructor = NewConstructor;
    console.log(d.constructor.name, '&',d instanceof NewConstructor)
})

constructor는 읽기 전용 속성이 부여된 예외적인 경우를 제외하고는 값을 바꿀 수 있다.
constructor를 변경하더라도 참조하는 대상이 변경될 뿐 인스턴스의 원형이나 데이터 타입이 바뀌지는 않는다.
어떤 인스턴스의 생성자 정보를 알아내기 위해 consturctor 프로퍼티에 의존하는게 항상 안전하지는 않다.
하지만, 그런 점 때문에 클래스 상속을 흉내 내는 것이 가능해진다.
```

##### 6-5 다양한 constructor 접근 방법
```bash
var Person = function(name){
    this.name = name;
}
var p1 = new Person("사람1");
var p1Proto = Object.getPrototypeOf(p1);
var p2 = new Person.prototype.constructor('사람2');
var p3 = new p1Proto.constructor('사람3');// {name:'사람2'} true
var p4 = new p1.__proto__.constructor('사람4');
var p5 = new p1.constructor('사람5');

[p1,p2,p3,p4,p5].forEach( function(p) {
    console.log(p,p instanceof Person);
});

정리 차원에서 살펴본 추가 예제이다.
다양한 constructor에 대한 접근 방법을 보여준다.
```

##### 6-6 메서드 오버라이드
```bash
var Person = function (name) {
    this.name = name;
};

Person.prototype.getName = function(){
    return this.name;
};

var iu = new Person('지금');
iu.getName = function () {
    return '바로 ' + this.name;
};
console.log(iu.getName()); // 바로 지금

인스턴스가 동일한 이름의 프로퍼티 or 메서드를 가지고 있는 상황이라면, 메서드 오버라이드 현상이 발생한다. 메서드 위에 메서드를 덮어씌웠다는 표현이다.
```

##### 6-7 배열에서 배열 메서드 및 객체 메서드 실행
```bash
var arr = [1,2];
arr.push(3) // arr(.__proto__).push(3);
console.log(arr.hasOwnProperty(2)) // true // arr(.__proto__)(.__proto__).hasOwnProperty(2) 

어떤 데이터의 __proto__ 프로퍼티 내부에 다시 __proto__프로퍼티가 연쇄적으로 이어진 것을 프로토타입 체인이라 하고, 이 체인을 따라가며 검색하는 것을 프로토타입 체이닝이라 한다.
프로토타입 체이닝은 메서드 오버라이드와 동일한 맥락이다.
어떤 메서드를 호출하면 자바스크립트 엔진은 데이터 자신의 프로퍼티들을 검색해서 원하는 메서드가 있으면 그 메서드를 실행하고, 없으면 __proto__를 검색해서 있으면 그 메서드를 실행하고, 없으면 다시 __proto__를 검색해서 실행하는 식으로 진행한다.
```

##### 6-8 메서드 오버라이드와 프로토타입 체이닝
```bash
var arr = [1,2];
Array.prototype.toString.call(arr); //1,2
Object.prototype.toString.call(arr); // [object Array]
arr.toString();

arr.toString = function(){
    return this.join('_')
};
console.log(arr.toString());

메서드 오버라이드와 프로토타입 체이닝을 보여주는 예제이다.
```

##### 6-9 Object.prototype에 추가한 메서드에의 접근
```bash
Object.prototype.getEntries = function(){
    var res = [];
    for (var prop in this){
        if(this.hasOwnProperty(prop)){
            res.push([prop,this[prop]]);
        }
    }
    return res;
};

var data = [
    ['object', { a: 1, b: 2, c: 3 }], // [["a",1], ["b", 2], ["c",3]]
    ['number', 345], // []
    ['string', 'abc'], // [["0","a"], ["1","b"], ["2","c"]]
    ['boolean', false], // []
    ['func', function() {}], // []
    ['array', [1, 2, 3]], // [["0", 1], ["1", 2], ["2", 3]]
];

data.forEach(function(datum){
    console.log(datum[1].getEntries())
})

어떤 생성자 함수이든 prototype은 반드시 객체이기 때문에, Object.prototype이 언제나 프로토타입 체인의 최상단에 존재하게 된다.
따라서, 객체에서만 사용할 메서드는 다른 여느 데이터 타입처럼 프로토타입 객체 안에 정의할 수가 없다.
```


##### 6-10 Grade 생성자 함수와 인스턴스
```bash
var Grade = function () {
    var args = Array.prototype.slice.call(arguments);
    for(var i=0;i<args.length;i++){
        this[i] = args[i];
    }
    this.length = args.length;
};
var g = new Grade(100,80);

대각선의 __proto__를 연결하는 방법은 __proto__가 가리키는 대상, 즉 생성자 함수의 prototype이 연결하고자하는 상위 생성자 함수의 인스턴스를 바라보게끔 해주면 된다.
```
