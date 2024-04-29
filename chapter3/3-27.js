// 예제 3-27 내부함수에 this 전달-call vs bind

var obj = {
    outer:  function () {
        console.log(this);
        var innerFunc = function(){
            console.log(this);
        };
        innerFunc.call(this);
    }
};
obj.outer();

var obj = {
    outer:  function () {
        console.log(this);
        var innerFunc = function(){
            console.log(this);
        }.bind(this);
        innerFunc();
    }
};
obj.outer();

// 3-1-3절에서 메서드의 내부함수에 메서드의 this를 그대로 바라보게 하기 위한 방법으로 self등의 변수를 활용한 우회법을 소개했었음
// call,apply 또는 bind메서드를 이용하면 이를 더 깔끔하게 처리할 수 있다.