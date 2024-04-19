// 예제 2-13 스코프 체인

var a = 1;
var outer = function(){
    var inner = function(){
        console.log(a);
        var a = 3;
    };
    inner();
    console.log(a);
};
outer();
console.log(a)

// 스코프 : 식별자에 대한 유효범위
// 무조건 스코프체인 상에서 가장 먼저 발견된 식별자에만 접근 가능하다.