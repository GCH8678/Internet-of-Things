// 예제 4-8 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법(1) - 전통적인 방식

var obj1 = {
    name: 'obj1',
    func: function (){
        var self = this;
        return function () {
            console.log(self.name);
        };
    }
};

var callback = obj1.func();
setTimeout(callback,1000);

// 전통적으로 this를 다른 변수에 담아 콜백 함수로 활용할 함수에는 this 대신 그 변수를 사용하게 하고,
// 이를 클로저로 만드는 방식이 많이 쓰였습니다.
// 하지만, 이 방식은 실제로 this를 사용하지도 않을뿐더러 번거롭다.