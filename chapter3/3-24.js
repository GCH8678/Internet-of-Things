// 예제 3-24 callk/apply 메서드의 활용 3-3) ES6의 펼치기 연산자 활용
const numbers = [10,20,3,16,45];
const max = Math.max(...numbers)
const min = Math.min(...numbers)
console.log(max,min)

// ES6에서의 펼치기 연산자를 이용하여 apply를 적용한 것 보다 더욱 간편하게 예제 3-23보다 더 쉽게 구현