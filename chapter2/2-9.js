// 예제 2-9 함수 선언문과 함수 표현식(1)-원본 코드

console.log(sum(1,2));
console.log(multiply(3,4))
function sum (a,b){ //함수 선언문 sum
    return a+b;
}
var multiply = function (a,b){ // 함수 표현식 multiply
    return a*b;
};

// 함수 표현식에서 주의할 점은 console.log 함수에서 사용되는 multiply는 아직 할당이 되지 않았기 때문에 not a function라는 TypeError가 발생한다.
// 함수 선언문은 전체를 호이스팅하고 함수 표현식은 변수 선언부만 호이스팅 했기 때문에 생긴 문제
