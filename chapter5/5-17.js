// 예제 5-17 커링 함수(1)

var curry3 = function(func){
    return function (a){
        return function(b){
            return func(a,b)
        };
    };
};

var getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10(8));   //10
console.log(getMaxWith10(25));  //25

var getMinWith10 = curry3(Math.min)(10);
console.log(getMinWith10(8));  //8
console.log(getMinWith10(25));  //10


// 커링 함수란 여러 개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출될 수 있게 체인 형태로 구성한 것이다.