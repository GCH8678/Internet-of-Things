// 예제 3-23 call/apply 메서드의 활용 3-2) 여러 인수를 받는 메세드(Math.max/Math.min)에 apply 적용
var numbers = [10,20,3,16,45];
var max = Math.max.apply(null,numbers);
var min = Math.min.apply(null,numbers);
console.log(max,min)    // 45 3


// Math.max/Math.min메서드에 apply 를 적용하여 예제 3-22를 더 간단히 구현함