// 예제 5-18 커링 함수(2)
var curry5 = function (func){
    return function (a){
        return function (b){
            return function (c){
                return function (d){
                    return function (e){
                        return func(a,b,c,d,e)
                    }
        
                }
            }
        }
    }
}
var getMax = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));

// 인자가 많아지면 가독성이 떨어지는 단점이 있다.
// ES 6에서 화살표 함수를 써서 다음과 같이 한 줄로 표기 가능 하다.
var curry5 = func => a=>b=>c=>d=>e=>func(a,b,c,d,e);

// 당장 필요한 정보만 받아서 전달하고 또 필요한 정보가 들어오면 전달하는 식으로 하면 결국 마지막 인자가 넘어갈 떄까지 함수 실행을 미루는 셈이다.
// 이를 함수형 프로그래밍에서는 지연실행이라고 한다.