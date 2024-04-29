// 예제 3-29 화살표 함수 내부에서의 this

var obj = {
    outer: function () {
        console.log(this);
        var innerFunc = ()=>{
            console.log(this);
        };

        innerFunc();
    }
};
obj.outer();

// 화살표 함수는 실행 컨텍스트 생성 시 this를 바인딩하는 과정이 제외됨.
// 이 함수 내부에는 this가 아예 없으며, 접근하고자 하면 스코프체인상 가장 가까운 this에 접근하게 됨