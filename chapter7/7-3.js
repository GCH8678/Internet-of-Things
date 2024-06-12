// 예제 7-3 length 프로퍼티를 삭제한 경우 

var Grade = function(){
    var args = Array.prototype.slice.call(arguments);
    for(var i=0;i<args.length;i++){
        this[i] = args[i];
    }
    this.length = args.length;
};
Grade.prototype = [];
var g = new Grade(100,80);

g.push(90);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, length: 3 }

delete g.length;
g.push(70);
console.log(g); // Grade { 0: 70, 1: 80, 2: 90, length: 1}

// 내장객체인 배열 인스턴스의 length는 configurable 속성이 false라 삭제가 불가능 하지만,
// Grade 클래스의 인스턴스는 배열 메서드를 상속하지만 기본적으로는 일반 객체의 성질을 그대로 지니므로 삭제가 가능해서 문제가 된다.