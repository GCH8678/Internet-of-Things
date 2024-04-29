// 예제 3-9 내부함수에서의 this

var obj1 = {
    outer: function () {
        console.log(this); // (1)
        var innerFunc = function (){
            console.log(this) // (2) (3)
        }
        innerFunc();

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod();
    }
};
obj1.outer();

// this가 가리키고 있는 것
// (1): obj1, (2) 전역객체(window), (3): obj2
