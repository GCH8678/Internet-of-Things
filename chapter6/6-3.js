// 예제 6-3 constructor 프로퍼티

var arr = [1,2];
console.log(Array.prototype.constructor === Array)  // true
console.log(arr.__proto__.constructor === Array)    // true
console.log(arr.constructor === Array)              // true

var arr2 = new arr.constructor(3,4);
console.log(arr2);                                  // [3,4]

// 생성자 함수의 프로퍼티인 prototype 객체 내부에는 constructor라는 프로퍼티가 있다.
// 생성자 함수를 참조한다.