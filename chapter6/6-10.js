// 예제 6-10 Grade 생성자 함수와 인스턴스

var Grade = function () {
    var args = Array.prototype.slice.call(arguments);
    for(var i=0;i<args.length;i++){
        this[i] = args[i];
    }
    this.length = args.length;
};
var g = new Grade(100,80);

//대각선의 __proto__를 연결하는 방법은 __proto__가 가리키는 대상, 즉 생성자 함수의 prototype이 연결하고자하는 상위 생성자 함수의 인스턴스를 바라보게끔 해주면 된다.