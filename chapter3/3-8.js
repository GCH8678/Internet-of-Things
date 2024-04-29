// 예제 3-8 메서드 내부에서의 this

var obj = {
    methodA: function () {console.log(this);},
    inner: {
        methodB: function(){console.log(this);}
    }
};

obj.methodA();              // { methodA: f, inner: {...} } ( === obj)
obj['methodA']();           // { methodA: f, inner: {...} } ( === obj)

obj.inner.methodB();
obj.inner['methodB']();     // { methodB: f }               ( === obj.inner)
obj['inner'].methodB();     // { methodB: f }               ( === obj.inner)
obj['inner']['methodB']();  // { methodB: f }               ( === obj.inner)

// this에는 호출한 주체에 대한 정보가 담김.
// 함수를 메서드로 호출한 경우 호출한 주체는 함수명 앞의 객체 -> 이 객체가 곧 this가 됨