// 예제 4-4 콜백 함수 예제 (2-2) Array.prototype.map - 인자의 순서를 임의로 바꾸어 사용한 경우

var newArr2 = [10,20,30].map(function(index,currentValue){
    console.log(index,currentValue);
    return currentValue+5;
});
console.log(newArr2)  

// -- 실행 결과 --
// 10 0
// 20 1
// 30 2
// [15, 25, 35]

// 인자의 순서를 임의로 바꾸어 사용한 경우를 보여준 예제이다.
// 콜백 함수의 제어권을 넘겨받은 코드는 콜백 함수를 호출할 때 인자에 어떤 값들을 어떤 순서로 넘길 것인지에 대한 제어권을 가진다.

