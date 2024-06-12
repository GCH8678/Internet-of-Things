// 예제 7-5 Recctangle.Square 클래스

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
}
Square.prototype.getArea = function(){
    return this.width*this.width;
}
var sq = new Square(5);
console.log(sq.getArea());      //25

// Rectangle과 Square 클래스에 width라는 프로퍼티가 공통이다. getArea는 내용이 다르지만 비슷하다.
// 만약 Square에서 width 프로퍼티만 쓰지 않고 height 프로퍼티에 width 값을 부여하는 형태가 된다면 getArea도 동일하게 고칠 수 있을것이다.