// 예제 4-3 콜백 함수 예제 (2-1) Array.prototype.map

var newArr = [10,20,30].map(function(currentValue,index){
    console.log(currentValue,index);
    return currentValue = 5;
});

  // -- 실행 결과 --
  // 10 0
  // 20 1
  // 30 2
  // [15, 25, 35]

  

// Array의 prototype에 담긴 map 메서든는 다음과 같은 구조로 이루어져 있다.
// Array.prototype.map(callback[,thisArg])
// callback: function(currentValue,index,array)

// map 메서드는 메서드의 대상이 되는 배열의 모든 요소들을 처음부터 끝까지 하나씩 꺼내어 콜백 함수를 반복 호출,
// 콜백 함수의 실행 결과들을 모아 새로운 배열을 만든다.