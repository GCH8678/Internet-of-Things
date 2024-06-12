// 예제 7-4 요소가 있는 배열을 prototype에 매칭한 경우
var Grade = function(){
    var args = Array.prototype.slice.call(arguments);
    for(var i=0;i<args.length;i++){
        this[i] = args[i];
    }
    this.length = args.length;
};

Grade.prototype = ['a','b','c','d'];
var g = new Grade(100,80);
g.push(90);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, length: 3 }

delete g.length;
g.push(70);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, 4: 70, length: 5 }

// 예제 7-3과 다르게 동작한다.
// 클래스에 있는 값이 인스턴스의 동작에 영향을 줘서는 안된다.
// 이러한 영향을 줄 수 있다는 사실 자체가 클래스의 추상성을 해치는 것이다.
// 인스턴스와의 관계에서는 구체적인 데이터를 지니지 않고 오직 인스턴스가 사용할 메서드만을 지니는
// 추상적인 '틀'로서만 작용하게끔 작성하지 않는다면 언젠가 예제 7-3과 7-4와 같이 예기치 않은 오류가 발생할 가능성을 안고 가게 된다.