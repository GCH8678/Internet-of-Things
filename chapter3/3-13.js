// 예제 3-13 생성자 함수

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

// 생성자 함수를 호출하면 생성자의 prototype 프로퍼티를 참조하는 __proto__ 라는 프로퍼티가 있는 객체를 만들고,
// 미리 준비된 공통 속성 및 개성을 해당 객체(this)에 부여함.
// 생성자 함수로서 호출된 경우 : 내부에서의 this는 새로 만들 구체적인 인스턴스 자신