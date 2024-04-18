// 예제 1-22 undefined와 null의 비교

var n = null;
console.log(typeof n); //object

console.log(n==undefined); //true
console.log(n==null); //true

console.log(n===undefined); //false
console.log(n===null); //true

// JS 버그중 하나 : null의 type이 object로 나옴.
// 어떤 변수에 대해 null인지 파악하기 위해서는 동등연산자 ===를 사용함.