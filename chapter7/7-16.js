// 예제 7-16 ES6의 클래스 상속

var Recctangle = class {
    constructor (width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width*this.height;
    }
};
var Square = class extends Recctangle{
    constructor(width){
        super(width,width);
    }
    getArea(){
        console.log('size is :',super.getArea());
    }
};

// ES5에는 상속 문법 자체가 없다.
// 7-14에서 구현한 super와 비교하여 ES6에서의 클래스 상속의 차이를 확인해보기 위한 예제이다.