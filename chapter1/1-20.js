// 예제 1-20 undefined와 배열

var arr1 = [];
arr1.length = 3;
console.log(arr1); // [<3 emtpy items>]

var arr2 = new Array(3);
console.log(arr2); // [<3 emtpy items>]

var arr3 = [undefined,undefined,undefined];
console.log(arr3); // [undefined,undefined,undefined]

// 빈 array에 대해서는 empty와 undefined가 구분이 힘든 문제점이 발생할 수 있기 때문에, undefined를 사용하지 않는 것을 권장