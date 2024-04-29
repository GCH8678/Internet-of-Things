// 예제 3-11 this를 바인딩하지 않는 함수(화살표 함수)

var obj = {
    outer: function(){
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        };
        innerFunc();
    }
};
obj.outer();

// 함수 내부에서 this가 전역객체를 바라보는 문제를 보완하고자 도입.
// 화살표 함수는 실행 컨텍스트를 생성할 때 this 바인딩 과정 자체가 빠지게 되어, 상위 스코프의 this를 그대로 활용