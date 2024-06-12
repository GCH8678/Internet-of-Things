// 예제 6-1 Person.prototype

var Person = function(name){
    this._name = name;
}
Person.prototype.getName = function(){
    return this._name
}
var suzi = new Person("Suzi")
console.log(suzi.__proto__.getName())             // undefined
console.log(Person.prototype === suzi.__proto__)  // true

// 함수의 prototype에 어떤 메서드나 프로퍼티가 있다면 인스턴스에서도 마치 자신의 것처럼 해당 메서드나 프로퍼티에 접근할 수 있게 됩니다.