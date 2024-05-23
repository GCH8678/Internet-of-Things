// 예제 4-14 비동기 작업의 동기적 표현(1) - Promise(1)

new Promise(function (resolve){
    setTimeout(function(){
        var name = '에스프레소';
        console.log(name);
        resolve(name);
    },500);
}).then(function (preName){
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = preName + ', 아메리카노';
            console.log(name);
            resolve(name);
        },500);
    });
}).then(function (preName){
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = preName + ', 카페모카';
            console.log(name);
            resolve(name);
        },500);
    });
}).then(function (preName){
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = preName + ', 카페라뗴';
            console.log(name);
            resolve(name);
        },500);
    });
})

// ES6의 Promise를 이용한 방식이다.
// new 연산자와 함께 호출한 Promise의 인자로 넘겨주는 콜백 함수는
// 호출할 때 바로 실행되지만 그 내부에 resolve 또는 reject 함수를 호출하는
// 구문이 있을 경우 둘 중 하나가 실행되기 전까지는 다음(then) 또는 오류 구문(catch)로 넘어가지 않는다.
// 따라서 비동기 작업이 완료될 때 비로소 resolve 또는 reject를 호출하는 방법으로
// 비동기 작업의 동기적 표현이 가능하다.