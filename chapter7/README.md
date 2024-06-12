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

##### 7-3 length 프로퍼티를 삭제한 경우 
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

g.push(90);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, length: 3 }

delete g.length;
g.push(70);
console.log(g); // Grade { 0: 70, 1: 80, 2: 90, length: 1}

내장객체인 배열 인스턴스의 length는 configurable 속성이 false라 삭제가 불가능 하지만, Grade 클래스의 인스턴스는 배열 메서드를 상속하지만 기본적으로는 일반 객체의 성질을 그대로 지니므로 삭제가 가능해서 문제가 된다.
```


##### 7-4 요소가 있는 배열을 prototype에 매칭한 경우
```bash
var Grade = function(){
    var args = Array.prototype.slice.call(arguments);
    for(var i=0;i<args.length;i++){
        this[i] = args[i];
    }
    this.length = args.length;
};

Grade.prototype = ['a','b','c','d'];
var g = new Grade(100,80);
g.push(90);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, length: 3 }

delete g.length;
g.push(70);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, 4: 70, length: 5 }

예제 7-3과 다르게 동작한다.
클래스에 있는 값이 인스턴스의 동작에 영향을 줘서는 안된다.
이러한 영향을 줄 수 있다는 사실 자체가 클래스의 추상성을 해치는 것이다.
인스턴스와의 관계에서는 구체적인 데이터를 지니지 않고 오직 인스턴스가 사용할 메서드만을 지니는 추상적인 '틀'로서만 작용하게끔 작성하지 않는다면 언젠가 예제 7-3과 7-4와 같이 예기치 않은 오류가 발생할 가능성을 안고 가게 된다.
```

##### 7-5 Recctangle.Square 클래스
```bash
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

Rectangle과 Square 클래스에 width라는 프로퍼티가 공통이다. getArea는 내용이 다르지만 비슷하다.
만약 Square에서 width 프로퍼티만 쓰지 않고 height 프로퍼티에 width 값을 부여하는 형태가 된다면 getArea도 동일하게 고칠 수 있을것이다.
```


##### 7-6 Square 클래스 변형
```bash
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

소스상으로도 Square를 Rectangle의 하위 클래스로 삼을 수 있을 것 같다.
getArea라는 메서드는 동일한 동작을 하므로 상위 클래스에서만 정의하고, 하위 클래스에서는 해당 메서드를 상속하면서 height 대신 width를 넣어주면 된다.
```


##### 7-7 Rectangle을 상속하는 Square 클래스
```bash
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

Square의 생성자 함수 내부에서 Rectangle의 생성자 함수를 함수로써 호출하였다.
이때 인자 height 자리에 width를 전달하였다.
위 코드만으로는 완벽한 클래스 체계가 구축되었다고 볼 수 없다.
예제 7-4와 동일한 문제를 가지고 있다.
```

##### 7-8 클래스 상속 및 추상화 방법(1) - 인스턴스 생성 후 프로퍼티 제거
```bash
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

클래스(prototype)가 구체적인 데이터를 지니지 않게 하는 방법은 여러가지가 있다.
그중 가장 쉬운 방법은 일단 만들고 나서 프로퍼티들을 일일이 지우고 더는 새로운 프로퍼티를 추가할 수 없게 하는 것이다.
```
