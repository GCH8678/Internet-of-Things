// 예제 3-17 call/apply 메서드의 활용 1-1) 유사배열객체에 배열 메서드를 적용

var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
Array.prototype.push.call(obj,'d');
console.log(obj);                   // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length:4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr);                   // ['a','b','c','d']

// call/apply 메서드를 이용하여 객체에 배열 메서드를 적용한 예제