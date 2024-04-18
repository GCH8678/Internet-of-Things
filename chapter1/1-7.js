// 예제 1-7 변수 복사

var a = 10;
var b = a;

var obj1 = {c:10, d: 'ddd'};
var obj2 = obj1;

// 10과 'ddd' 같은 primitive type은 immutable이기 때문에 다른 값으로 변경되지 않음
// 똑같은 값을 할당하거나, 복사할 때 data가 새로 생성되지 않고 원래 있던 주소를 활용.

