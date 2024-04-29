// 예제 3-28 bind 메서드-내부함수에 this 전달
var obj = {
    logThis: function(){
        console.log(this);
    },
    logThisLater1: function(){
        setTimeout(this.logThis, 500);
    },
    logThisLater2: function(){
        setTimeout(this.logThis.bind(this), 1000);
    }
};
obj.logThisLater1(); // Window {...}
obj.logThisLater2(); // obj {logThis: f, ...}

// 콜백 함수를 인자로 받는 함수나 메서드 중에서 기본적으로 콜백 함수 내에서의 this에 관여하는 
// 함수 또는 메서드에 대해서도 bind 메서드를 이용하면 this 값을 사용자의 입맛에 맞게 바꿀 수 있음.
