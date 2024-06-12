// 예제 6-8 메서드 오버라이드와 프로토타입 체이닝

var arr = [1,2];
Array.prototype.toString.call(arr); //1,2
Object.prototype.toString.call(arr); // [object Array]
arr.toString();

arr.toString = function(){
    return this.join('_')
};
console.log(arr.toString());

// 메서드 오버라이드와 프로토타입 체이닝을 보여주는 예제이다.