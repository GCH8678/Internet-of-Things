// 예제 6-6 메서드 오버라이드

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

// 인스턴스가 동일한 이름의 프로퍼티 or 메서드를 가지고 있는 상황이라면,
// 메서드 오버라이드 현상이 발생한다. 메서드 위에 메서드를 덮어씌웠다는 표현이다.