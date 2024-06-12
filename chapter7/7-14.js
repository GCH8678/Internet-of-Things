// 예제 7-14 상위 클래스 접근 수단인 super 메서드 추가
var extendClass = function (SuperClass, SubClass, subMethods){
    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
    SubClass.prototype.super = function (propName){ // 추가된 부분 시작
        var self = this;
        if (!propName) return function(){
            SuperClass.apply(self,arguments);
        }
        var prop = SuperClass.prototype[propName];
        if(typeof prop!='function') return prop;
        return function(){
            return prop.apply(self,arguments);
        }
    };                                              // 추가된 부분 끝
    if(subMethods){
        for(var method in subMethods){
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
};

var Rectangle = function (width,height){
    this.width =width;
    this.height=height;
};
Rectangle.prototype.getArea = function(){
    return this.width*this.height;
}

var Square = extendClass(
    Rectangle,
    function(width){
        this.super()(width,width)                               // super 사용 (1)
    },{
        getArea: function(){
            console.log("size is ",this.super('getArea')());    // super 사용 (2)
        }
    }
)

var sq = new Square(10);
sq.getArea();                       // size is : 100
console.log(sq.super('getArea')())  // 100

// 다른 객체지향 언어들의 클래스 문법 중 하나인 'super'를 흉내낸 예제이다.
// 하위 클래스에서 상위 클래스의 프로토타입 메서드에 접근하기 위한 별도의 수단을 구현한 예제이다.