# Explations on the examples in chapter 7

##### 7-1 스태틱 메서드, 프로토타입 메서드
```bash
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

예제 7-1은 6장에서 자주 등장한 전형적인 생성자 함수와 인스턴스이다.
인스턴스에서 직접 호출할 수 있는 메서드가 바로 프로토타입 메서드이다.
인스턴스에서 직접 접근할 수 없는 메서드를 스태틱 메서드라고 한다.
```

##### 7-2 6-2-4절의 Grade 생성자 함수 및 인스턴스
```bash
var Grade = function(){
    var args = Array.prototype.slice.call(arguments);
    for(var i=0;i<args.length;i++){
        this[i] = args[i];
    }
    this.length = args.length;
};
Grade.prototype = [];
var g = new Grade(100,80);

다중 프로토타입 체이닝을 잘 연결하여 클래스 상속을 구현하였다.
세부적으로는 완벽하게 superclass와 subclass의 구현이 이루어진 것은 아니다.
예제 7-2는 length 프로퍼티가 configurable하다는 점과, Grade.prototype에 빈 배열을 참조시켰다는 문제가 있다.

```
