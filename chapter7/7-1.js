// 예제 7-1 스태틱 메서드, 프로토타입 메서드

var Rectangle = function (width, height){
    this.width = width;
    this.height = height;
};

Rectangle.prototype.getArea = function(){   // 프로토타입 메서드
    return this.width * this.height;
}

Rectangle.isRectangle = function (instance){    // 스태틱 메서드
    return instance instanceof Rectangle && instance.width>0 && instance.height >0;
};

var rect1 = new Rectangle(3,4)
console.log(rect1.getArea());               // 12 (0)
//console.log(rect1.isRectangle(rect1));      // Error(x)
console.log(Rectangle.isRectangle(rect1))   // true

// 예제 7-1은 6장에서 자주 등장한 전형적인 생성자 함수와 인스턴스이다.
// 인스턴스에서 직접 호출할 수 있는 메서드가 바로 프로토타입 메서드이다.
// 인스턴스에서 직접 접근할 수 없는 메서드를 스태틱 메서드라고 한다.