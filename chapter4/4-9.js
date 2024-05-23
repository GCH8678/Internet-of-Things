// 예제 4-9 콜백 함수 내부에서 this를 사용하지 않는 경우 

var obj1 = {
    name: 'obj1',
    func: function(){
        console.log(obj1.name);
    }
};
setTimeout(obj1.func, 1000);

// 앞선 예제에서 this를 사용하지 않았을 경우 4-9예제의 결과가 나온다.
// 간결하고 직관적이지만 this를 이용해 다양한 상황에 재활용할 수 없다.