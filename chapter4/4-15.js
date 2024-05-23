// 예제 4-15 비동기 작업의 동기적 표현(2) - Promise(2)

var addCoffee = function (name){
    return function (prevName){
        return new Promise(function(resolve){
            setTimeout(function(){
                var newName = prevName ? (prevName+','+name):name;
                console.log(newName);
                resolve(newName);
            },500);
        });
    };
};

addCoffee('에스프레소')()
.then(addCoffee('아메리카노'))
.then(addCoffee('카페모카'))
.then(addCoffee('카페라뗴'))


// 예제 4-15는 예제 4-14의 반복적인 내용을 함수화해서 더욱 짧게 표현한 것이다.