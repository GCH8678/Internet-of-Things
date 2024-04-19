// 예제 2-10 함수 선언문과 함수 표현식(2)-호이스팅을 마친 상태

var sum = function sum (a,b){ // 함수 선언문은 전체를 호이스팅
    return a+b;    
};
var multiply; // 변수는 선언부만 끌어올린다.
console.log(sum(1,2));
console.log(multiply(3,4));

multiply = function (a,b) {
    return a*b;
}

// 예제 2-9와 동일하게 작동. (호이스팅을 마친 상태를 코드로 표현한 것)