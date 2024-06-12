// 예제 7-15 ES5와 ES6의 클래스 문법 비교

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

// ES6에서 본격적으로 클래스 문법이 도입되었다.