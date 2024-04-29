// 예제 3-6 함수로서 호출, 메서드로서 호출

var func = function (x) {
    console.log(this,x);
};
func(1); // window { ... } 1

var obj = {
    method: func
};
obj.method(2); // { methood: f } 2

// 함수와 메서드를 구분하는 유일한 차이점 : "독립성"
// 자바스크립트에서는 상황별로 this 키워드에 다른 값을 부여하게 함으로써 이를 구현함.