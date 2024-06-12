// 예제 7-12 클래스 상속 및 추상화 방법 - 완성본(2) - 빈 함수를 활용

var extendClass2 = (function(){
    var Bridge = function(){};
    return function (SuperClass, SubClass, subMethods){
        Bridge.prototype = SuperClass.prototype;
        SubClass.prototype = new Bridge();
        SubClass.prototype.constructor = SubClass;
        if(subMethods){
            for (var method in subMethods){
                SubClass.prototype[method] = subMethods[method];
            }
        }
        Object.freeze(SubClass.prototype);
        return SubClass;
    }
})();

// 예제 7-9의 constructor가 SuperClass를 가리키는 상태를 SubClass.prototype.constructor가 원래의 subClass를 바라보도록 수정한 예제이다.
