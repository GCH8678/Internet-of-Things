// 예제 5-8 콜백 함수와 클로저(3)

var fruits = ['apple','banana','peach'];
var $ul = document.createElement('ul');

var alertFruit = function (fruit){
    alert('your choice is '+fruit);
};

fruits.forEach(function(fruit){
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click',alertFruit.bind(null,fruit));
    $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[1]);

// 예제 5-7의 [object MouseEvent]라는 값이 출력되는 문제를 해결했다.
// 하지만 이벤트 객체가 인자로 넘어오는 순서가 바뀌는 점 및 함수 내부에서의 this가 원래의 그것과 달라지는 점은 감안해야 한다.
// 이런 변경사항이 발생하지 않게끔 하면서 이슈를 해결하기 위해 bind 메서드가 아닌 고차함수를 활용한다.