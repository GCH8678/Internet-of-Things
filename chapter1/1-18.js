// 예제 1-18 JSON을 활용한 간단한 깊은 복사

var copyObjectViaJSON = function (target){
    return JSON.parse(JSON.stringify(target));
}

var obj = {
    a:1,
    b:{
        c:null,
        d:[1,2],
        func1: function() {console.log(3);}
    },
    func2: function() {console.log(4);}
};
var obj2 = copyObjectViaJSON(obj);

obj2.a=3;
obj2.b.c=4;
obj.b.d[1]=3;

console.log(obj); // { a: 1. b: { c: null, d: [1, 3], func1: f() }, func2: f() }
console.log(obj2); // { a: 3. b: { c: 4,    d: [1, 2] } }


// JSON 과 객체간 변환을 이용한 간단한 깊은 복사 방법.
// 하지만 순수 data만 copy가 되고 함수는 복사되지 않는 단점 존재