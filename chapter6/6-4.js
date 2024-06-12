// 예제 6-4 constructor 변경

var NewConstructor = function(){
    console.log("this is new constructor!");
};
var dataType = [
    1, // Number & false
    'test', // String & false
    true, // Boolean & false
    {}, // NewConstructor & false
    [], // NewConstructor & false
    function() {}, // NewConstructor & false
    /test/, // NewConstructor & false
    new Number(), // NewConstructor & false
    new String(), // NewConstructor & false
    new Boolean(), // NewConstructor & false
    new Object(), // NewConstructor & false
    new Array(), // NewConstructor & false
    new Function(), // NewConstructor & false
    new RegExp(), // NewConstructor & false
    new Date(), // NewConstructor & false
    new Error(), // NewConstructor & false
]

dataType.forEach(function(d){
    d.constructor = NewConstructor;
    console.log(d.constructor.name, '&',d instanceof NewConstructor)
})

//constructor는 읽기 전용 속성이 부여된 예외적인 경우를 제외하고는 값을 바꿀 수 있다.
//constructor를 변경하더라도 참조하는 대상이 변경될 뿐 인스턴스의 원형이나 데이터 타입이 바뀌지는 않는다.
//어떤 인스턴스의 생성자 정보를 알아내기 위해 consturctor 프로퍼티에 의존하는게 항상 안전하지는 않다.
//하지만 그런 점 때문에 클래스 상속을 흉내 내는 것이 가능해진다.