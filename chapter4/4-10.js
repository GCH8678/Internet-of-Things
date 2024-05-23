// 예제 4-10 예제 4-8의 func 함수 재활용
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

var obj2 = {
    name: 'obj2',
    func: obj1.func
};
var callback2 = obj2.func();
setTimeout(callback2,1500);

var obj3 = {name: 'obj3'};
var callback3 = obj1.func();
setTimeout(callback3,2000)

// 예제 4-8의 방법은 번거롭긴 하지만 this를 우회적으로나마 활용함으로써
// 다양한 상황에서 원하는 객체를 바라보는 콜백 함수를 만들 수 있는 방법이다.