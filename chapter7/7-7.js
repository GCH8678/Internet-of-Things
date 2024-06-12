// 예제 7-7 Rectangle을 상속하는 Square 클래스
var Rectangle = function(width,height){
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function(){
    return this.width*this.height;
};
var rect = new Rectangle(3,4);
console.log(rect.getArea());     // 12

var Square = function(width){
    Rectangle.call(this,width,width);
};
Square.prototype = new Rectangle();
var sq = new Square(5);
console.log(sq.getArea())       // 25

// Square의 생성자 함수 내부에서 Rectangle의 생성자 함수를 함수로써 호출하였다.
// 이때 인자 height 자리에 width를 전달하였다.
// 위 코드만으로는 완벽한 클래스 체계가 구축되었다고 볼 수 없다.
// 예제 7-4와 동일한 문제를 가지고 있다.