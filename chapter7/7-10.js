// 예제 7-10 클래스 상속 및 추상화 방법(3) - Object.create 활용
var Rectangle = function(width,height){
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function(){
    return this.width*this.height;
};
var Square = function(width){
    Rectangle.call(this,width,width);
};
Square.prototype = new Rectangle();
Square.prototype = Object.create(Rectangle.prototype);
Object.freeze(Square.prototype);


var rect = new Rectangle(3,4);
console.log(rect.getArea());     // 12
var sq = new Square(5);
console.log(sq.getArea())       // 25



// ES5에 도입된 Object.create를 이용한 방법이다. 이 방법은 SubClass의 prototype의
// __proto__가 SuperClass의 prototype을 바라보되, SuperClass의 인스턴스가 되지는 않으므로 앞서 두 방법보다 안전하고 간단하다.
