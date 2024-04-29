// 예제 3-26 bind 메서드 - name 프로퍼티

var func = function (a,b,c,d){
    console.log(this,a,b,c,d);
}
var bindFunc = func.bind({x:1},4,5);
console.log(func.name);         // func
console.log(bindFunc.name);     // bound func

// bind 메서드를 적용해서 새로 만든 함수는 한 가지 독특한 성질이 있음.
// name 프로퍼티에 동사 bind의 수동태인 bound라는 접두어가 붙는다.
// 함수의 name 프로퍼티가 bound xxx라면 이는 곧 함수명이 xxx인 원본 함수에 bind 메서드를 적용했다는 의미.