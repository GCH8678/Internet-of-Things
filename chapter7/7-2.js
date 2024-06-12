// 예제 7-2 6-2-4절의 Grade 생성자 함수 및 인스턴스

var Grade = function(){
    var args = Array.prototype.slice.call(arguments);
    for(var i=0;i<args.length;i++){
        this[i] = args[i];
    }
    this.length = args.length;
};
Grade.prototype = [];
var g = new Grade(100,80);

// 다중 프로토타입 체이닝을 잘 연결하여 클래스 상속을 구현하였다.
// 세부적으로는 완벽하게 superclass와 subclass의 구현이 이루어진 것은 아니다.
// 예제 7-2는 length 프로퍼티가 configurable하다는 점과, Grade.prototype에 빈 배열을 참조시켰다는 문제가 있다.
