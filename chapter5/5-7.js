// 예제 5-7 콜백 함수와 클로저(2)
var fruits = ['apple','banana','peach'];
var $ul = document.createElement('ul');

var alertFruit = function (fruit){
    alert('your choice is '+fruit);
};

fruits.forEach(function(fruit){
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click',alertFruit);
    $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[1]);

// 공통 함수로 쓰고자 콜백 함수를 외부로 꺼내어 alertFruit라는 변수에 담았다.
// 이제 alertFruit을 직접 실행할 수 있다.
// 그런데 각 li를 클릭하면 클릭한 대상의 과일명이 아닌 [object MouseEvent]라는 값이 출력된다.
// 콜백 함수의 인자에 대한 제어권을 addEventListener가 가진 상태이며, add EventListener는 콜백 함수를 호출할 때 첫 번째 인자에
// '이벤트 객체'를 주입하기 때문이다.