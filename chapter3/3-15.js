// 예제 3-15 call 메서드(2)

var obj = {
    a: 1,
    method: function(x,y){
        console.log(this.a,x,y);
    }
};

obj.method(2,3);            // 1 2 3
obj.method.call({a:4},5,6)  // 4 5 6

// 메서드에 대해서도 마찬가지로 객체의 메서드를 그냥 호출하면 this는 객체를 참조하지만
// call 메서드를 이용하면 임의의 객체를 this로 지정 가능