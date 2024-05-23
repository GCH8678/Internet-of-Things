// 예제 4-11 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법(2) - bind 메서드 활용
var obj1 = {
    name: 'obj1',
    func: function(){
        console.log(this.name);
    }
};
setTimeout(obj1.func.bind(obj1),1000);

var obj2 = { name: 'obj2' }
setTimeout(obj1.func.bind(obj2),1500);


// ES5에서 등장한 bind 메서드를 이용하는 방법이다.
// 예제 4-9의 처음부터 바라볼 객체를 명시적으로 지정하기 때문에 다른 객체를 바라볼 수 없게 되는
// 아쉬움을 보안하는 훌륭한 방법이다. 