// 예제 7-8 클래스 상속 및 추상화 방법(1) - 인스턴스 생성 후 프로퍼티 제거

var Rectangle = function(width,height){
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function(){
    return this.width*this.height;
};
var extendClass1 = function(SuperClass, SubClass,subMethods){
    SubClass.prototype = new SuperClass();
    for (var prop in SubClass.prototype){
        if(SubClass.prototype.hasOwnProperty(prop)){
            delete SubClass.prototype[prop];
        }
    }
    if (subMethods){
        for (var method in subMethods){
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(SubClass.prototype)
    return SubClass;
}
var Square = extendClass1(Rectangle,function(width){
    Rectangle.call(this,width,height)
})

// 클래스(prototype)가 구체적인 데이터를 지니지 않게 하는 방법은 여러가지가 있다.
// 그중 가장 쉬운 방법은 일단 만들고 나서 프로퍼티들을 일일이 지우고 더는 새로운 프로퍼티를 추가할 수 없게 하는 것이다.