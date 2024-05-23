// 예제 5-3 외부 함수의 변수를 참조하는 내부 함수(3)

var outer = function(){
    var a = 1;
    var inner = function(){
        return ++a;
    };
    return inner;
};
var outer2 = outer();
console.log(outer2()); // 2
console.log(outer2()); // 3

// 가비지 컬렉터의 동작방식 때문에 inner함수의 실행 시점에 outer함수가 종료 상태이지만 out함수의 Lexicalenviroment에 접근할 수 있게 된다.
// 가비지 컬렉터는 어떤 값을 참조하는 변수가 하나라도 있다면 그 값은 수집 대상에 포함시키지 않는다.