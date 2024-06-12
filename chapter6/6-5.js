// 예제 6-5 다양한 constructor 접근 방법
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
// 정리 차원에서 살펴본 추가 예제이다.
// 다양한 constructor에 대한 접근 방법을 보여준다.
