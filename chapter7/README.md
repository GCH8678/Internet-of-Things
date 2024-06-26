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


##### 7-9 클래스 상속 및 추상화 방법(2) - 빈 함수를 활용
```bash
var extendClass2 = (function(){
    var Bridge = function(){};
    return function (SuperClass, SubClass, subMethods){
        Bridge.prototype = SuperClass.prototype;
        SubClass.prototype = new Bridge();
        if(subMethods){
            for (var method in subMethods){
                SubClass.prototype[method] = subMethods[method];
            }
        }
        Object.freeze(SubClass.prototype);
        return SubClass;
    }
})();

예제 7-9에서는 즉시실행함수 내부에서 Bridge를 선언해서 이를 클로저로 활용함으로써 메모리에 불필요한 함수 선언을 줄였다.
SubMethods엔 SubClass의 prototype에 담길 메서들을 객체로 전달하게끔 하였다.
```


##### 7-9 클래스 상속 및 추상화 방법(2) - 빈 함수를 활용
```bash
var extendClass2 = (function(){
    var Bridge = function(){};
    return function (SuperClass, SubClass, subMethods){
        Bridge.prototype = SuperClass.prototype;
        SubClass.prototype = new Bridge();
        if(subMethods){
            for (var method in subMethods){
                SubClass.prototype[method] = subMethods[method];
            }
        }
        Object.freeze(SubClass.prototype);
        return SubClass;
    }
})();

예제 7-9에서는 즉시실행함수 내부에서 Bridge를 선언해서 이를 클로저로 활용함으로써 메모리에 불필요한 함수 선언을 줄였다.
SubMethods엔 SubClass의 prototype에 담길 메서들을 객체로 전달하게끔 하였다.
```

##### 7-10 클래스 상속 및 추상화 방법(3) - Object.create 활용
```bash
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

ES5에 도입된 Object.create를 이용한 방법이다. 이 방법은 SubClass의 prototype의 __proto__가 SuperClass의 prototype을 바라보되, SuperClass의 인스턴스가 되지는 않으므로 앞서 두 방법보다 안전하고 간단하다.
```


##### 7-11 클래스 상속 및 추상화 방법 - 완성본(1) - 인스턴스 생성 후 프로퍼티 제거
```bash
var extendClass1 = function(SuperClass, SubClass,subMethods){
    SubClass.prototype = new SuperClass();
    for (var prop in SubClass.prototype){
        if(SubClass.prototype.hasOwnProperty(prop)){
            delete SubClass.prototype[prop];
        }
    }
    SubClass.prototype.constructor = SubClass;
    if (subMethods){
        for (var method in subMethods){
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(SubClass.prototype)
    return SubClass;
}

예제 7-8의 constructor가 SuperClass를 가리키는 상태를 SubClass.prototype.constructor가 원래의 subClass를 바라보도록 수정한 예제이다.
```

##### 7-12 클래스 상속 및 추상화 방법 - 완성본(2) - 빈 함수를 활용
```bash
var extendClass2 = (function(){
    var Bridge = function(){};
    return function (SuperClass, SubClass, subMethods){
        Bridge.prototype = SuperClass.prototype;
        SubClass.prototype = new Bridge();
        SubClass.prototype.constructor = SubClass;
        if(subMethods){
            for (var method in subMethods){
                SubClass.prototype[method] = subMethods[method];
            }
        }
        Object.freeze(SubClass.prototype);
        return SubClass;
    }
})();

예제 7-9의 constructor가 SuperClass를 가리키는 상태를 SubClass.prototype.constructor가 원래의 subClass를 바라보도록 수정한 예제이다.
```

##### 7-13 클래스 상속 및 추상화 방법 - 완성본(3) - Object.create 활용
```bash
var extendClass3 = function (SuperClass,SubClass,subMethods){
    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
    if(subMethods){
        for (var method in subMethods){
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
}

예제 7-10의 방법에 추가하여 constructor가 SuperClass를 가리키는 상태를 SubClass.prototype.constructor가 원래의 subClass를 바라보도록 하여 extendClass3 function을 새로 작성한 예제이다. 
```

##### 7-14 상위 클래스 접근 수단인 super 메서드 추가
```bash
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

다른 객체지향 언어들의 클래스 문법 중 하나인 'super'를 흉내낸 예제이다.
하위 클래스에서 상위 클래스의 프로토타입 메서드에 접근하기 위한 별도의 수단을 구현한 예제이다.
```

##### 7-15 ES5와 ES6의 클래스 문법 비교
```bash
var ES5 = function (name) {
    this.name = name;
};
ES5.staticMethod = function () {
    return this.name + ' staticMethod';
};
ES5.prototype.method = function (){
    return this.name + ' method';
};
var es5Instance = new ES5('es5');
console.log(ES5.staticMethod());
console.log(es5Instance.method());

var ES6 = class{
    constructor(name){
        this.name = name;
    }
    static staticMethod(){
        return this.name +' staticMethod';
    }
    method(){
        return this.name+' method';
    }
};
var ex6Instance = new ES6('es6');
console.log(ES6.staticMethod());
console.log(ex6Instance.method());

ES6에서 본격적으로 클래스 문법이 도입되었다.
```


##### 7-16 ES6의 클래스 상속
```bash
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

ES5에는 상속 문법 자체가 없다.
7-14에서 구현한 super와 비교하여 ES6에서의 클래스 상속의 차이를 확인해보기 위한 예제이다.
```