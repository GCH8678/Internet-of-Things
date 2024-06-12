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
