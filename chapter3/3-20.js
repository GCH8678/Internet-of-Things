// 예제 3-20 call/apply 메서드의 활용 1-4) ES6의 Array.from  메서드

var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
var arr = Array.from(obj);
console.log(arr);

// ES6에서  유사배열객체 또는 순회 가능한 모든 종류의 데이터 타입을 배열로 전환하는 Array.from 메서드를 도입함으로써
// 예제 3-19와 같은 활용은 잘 사용하지 않음. ( 경험 없이 코드를 보고 의도를 파악하기 쉽지 않음 )