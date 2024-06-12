// 예제 7-6 Square 클래스 변형

var Rectangle = function(width,height){
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function(){
    return this.width*this.height
};
var rect = new Rectangle(3,4);
console.log(rect.getArea())     //12

var Square = function(width){
    this.width = width;
    this.height = width;
}
Square.prototype.getArea = function(){
    return this.width*this.height;
};

// 소스상으로도 Square를 Rectangle의 하위 클래스로 삼을 수 있을 것 같다.
// getArea라는 메서드는 동일한 동작을 하므로 상위 클래스에서만 정의하고, 하위 클래스에서는 해당 메서드를 상속하면서 height 대신 width를 넣어주면 된다.