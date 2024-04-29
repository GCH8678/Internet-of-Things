// 예제 3-14 call 메서드(1)

var func = function (a,b,c) {
    console.log(this,a,b,c);
}

func(1,2,3);            // Window{ ... } 1 2 3
func.call({x:1}, 4,5,6) // { x: 1 } 4 5 6

// this에 별도의 대상을 바인딩하는 방법중 하나
// call 메서드는 메서드의 호출 주체인 함수를 즉시 실행하도록 하는 명령어
// 메서드의 첫번째 인자를 this로 바인딩, 이후의 인자들을 호출할 함수의 매개변수로 함.
// 함수를 그냥 실행하면 this는 전역객체를 참조하지만, call 메서드 이용시 객체를 this로 지정