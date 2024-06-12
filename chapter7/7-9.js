// 예제 7-9 클래스 상속 및 추상화 방법(2) - 빈 함수를 활용
var extendClass2 = (function(){
    var Bridge = function(){};
    return function (SuperClass, SubClass, subMethods){
        Bridge.prototype = SuperClass.prototype;
        SubClass.prototype = new Bridge();
        if(subMethods){
            for (var method in subMethods){
                SubClass.prototype[method] = subMethods[method];
            }
        }
        Object.freeze(SubClass.prototype);
        return SubClass;
    }
})();

// 예제 7-9에서는 즉시실행함수 내부에서 Bridge를 선언해서 이를 클로저로 활용함으로써 메모리에 불필요한 함수 선언을 줄였다.
// SubMethods엔 SubClass의 prototype에 담길 메서들을 객체로 전달하게끔 하였다.