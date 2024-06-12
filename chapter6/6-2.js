// 예제 6-2 prototype과 __proto__

var Constructor = function (name){
    this.name = name;
};
Constructor.prototype.method1 = function(){};
Constructor.prototype.property1 = "Constructor Prototype Property";

var instance = new Constructor("Instance");
console.dir(Constructor);
console.dir(instance);

// 함수의 prototype에 어떤 메서드나 프로퍼티가 있다면 인스턴스에서도 마치 자신의 것처럼 해당 메서드나 프로퍼티에 접근할 수 있게 됩니다.
// 크롬 개발자 도구의 콘솔 탭을 열어 출력 결과를 살펴보자.
