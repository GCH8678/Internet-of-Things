// 예제 7-11 클래스 상속 및 추상화 방법 - 완성본(1) - 인스턴스 생성 후 프로퍼티 제거

var extendClass1 = function(SuperClass, SubClass,subMethods){
    SubClass.prototype = new SuperClass();
    for (var prop in SubClass.prototype){
        if(SubClass.prototype.hasOwnProperty(prop)){
            delete SubClass.prototype[prop];
        }
    }
    SubClass.prototype.constructor = SubClass;
    if (subMethods){
        for (var method in subMethods){
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(SubClass.prototype)
    return SubClass;
}

// 예제 7-8의 constructor가 SuperClass를 가리키는 상태를 SubClass.prototype.constructor가 원래의 subClass를 바라보도록 수정한 예제이다.