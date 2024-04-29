// 예제 3-25 bind 메서드 - this 지정과 부분 적용 함수 구현

var func = function(a,b,c,d){
    console.log(this,a,b,c,d);  // Window{ ... } 1 2 3 4 
};
func(1,2,3,4);

var bindFunc1 = func.bind({x:1});
bindFunc1(5,6,7,8); // {x:1} 5 6 7 8

var bindFunc2 = func.bind({x:1},4,5);
bindFunc2(6,7)      // {x:1} 4 5 6 7 
bindFunc2(8,9)      // {x:1} 4 5 8 9 


//bind 메서드는 ES5에 추가된 기능
// call과 비슷하지만 즉시 호출하지는 않고 넘겨받은 this 및 인수들을 바탕으로 새로운 함수를 반환하기만 하는 메서드
// 다시 새로운 함수를 호출할 때 인수를 넘기면 그 인수들은 기존 bind메서드를 호출할 때 전달했던 인수들의 뒤에 이어서 등록됨
// 즉 bind 메서드는 함수에 this를 미리 적용하는 것과 부분 적용 함수를 구현하는 두가지 목적을 모두 지님.