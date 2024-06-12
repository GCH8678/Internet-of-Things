// 예제 7-13 클래스 상속 및 추상화 방법 - 완성본(3) - Object.create 활용
var extendClass3 = function (SuperClass,SubClass,subMethods){
    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
    if(subMethods){
        for (var method in subMethods){
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
}

// 예제 7-10의 방법에 추가하여 constructor가 SuperClass를 가리키는 상태를 SubClass.prototype.constructor가 원래의 subClass를 바라보도록 하여 extendClass3 function을 새로
// 작성한 예제이다. 
