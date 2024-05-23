// 예제 5-13 bind 메서드를 활용한 부분 적용 함수
var add = function(){
    var result = 0;
    for (var i = 0 ; i< arguments.length;i++){
        result += arguments[i];
    }
    return result;
};
var addPartial = add.bind(null,1,2,3,4,5);
console.log(addPartial(6,7,8,9,10)); // 55

// 부분 적용함수란 n개의 인자를 받는 함수에 미리 n개의 인자만 넘겨 기억시켰다가, 나중에 (n-m)개의 인자를 넘기면 비로소 원래 함수의 실행 결과를 얻을 수 있게끔 한 함수이다.
// this를 바인딩해야 하는 점을 제외하면 앞서 살펴본 bind 메서드의 실행결과가 바로 부분 적용 함수이다.
// 위 add 함수는 this의 값을 변경할 수 밖에 없기 때문에 메서드에는 사용할 수 없다.