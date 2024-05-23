// 예제 4-7 메서드를 콜백 함수로 전달한 경우

var obj = {
    vals: [1,2,3],
    logValues: function(v,i){
        console.log(this,v,i);
    }
};
obj.logValues(1,2);             // { vals: [1,2,3], logValues: f } 1 2
[4,5,6].forEach(obj.logValues); // Window { ... } 4 0
                                // Window { ... } 5 1
                                // Window { ... } 6 2

// 콜백 함수로 어떤 객체의 메서드를 전달하더라도 그 메서드는 메서드가 아닌 함수로서 호출된다.

