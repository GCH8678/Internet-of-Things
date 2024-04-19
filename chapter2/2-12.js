// 예제 2-12 상대적으로 함수 표현식이 안전

/** (중략) */
console.log(sum(3,4)) // Uncaught Type Error: sum is not a function
/** (중략) */
var sum = function (x,y){
    return x+y;
};
/** (중략) */
var a = sum(1,2);
/** (중략) */
var sum = function (x,y){
    return x+'+'+y+'='+(x+y);
}
/** (중략) */
var c = sum(1,2);
console.log(c);

// 함수 표현식을 사용하면 예제 2-11과 같은 문제를 예방할 수 있음