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
