// 예제 4-16 비동기 작업의 동기적 표현 (3) - Generator

var addCoffee = function(prevName,name){
    setTimeout(function(){
        coffeeMaker.next(prevName ? prevName + ', '+name:name);
    },500);
};
var coffeeGenerator = function* (){
    var espresso = yield addCoffee('','에스프레소');
    console.log(espresso);
    var americano = yield addCoffee(espresso,'아메리카노')
    console.log(americano)
    var mocha = yield addCoffee(americano,'카페모카')
    console.log(mocha)
    var latte = yield addCoffee(mocha,'카페라떼')
    console.log(latte)
}
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();

// 예제 4-16은 ES6의 Generator를 이용했다.
// 6번째 줄의 *이 붙은 함수가 바로 Generator 함수이다.
// Generator 함수를 실행하면 Iterator 가 반환되는데, Iterator는 next 메서드를 가지고 있다.
// 이 next 메서드를 호출하면 Generator함수 내부에서 가장 먼저 등장하는 yield에서 함수의 실행을 멈춘다.
// 비동기 작업이 완료되는 시점마다 next 메서드를 호출해준다면 Generator함수 내부의 소스가
// 위에서 부터 아래로 순차적으로 진행된다.