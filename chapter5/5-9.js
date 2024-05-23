// 예제 5-9 콜백 함수와 클로저(4)

var fruits = ['apple','banana','peach'];
var $ul = document.createElement('ul');

var alertFruitBuilder = function (fruit){
    return function(){
        alert('your choice is '+fruit);
    }
};

fruits.forEach(function(fruit){
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click',alertFruitBuilder(fruit));
    $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[1]);

// alertFruit 함수 대신 alertFruitBuilder라는 이름의 함수를 작성하였다.
// 이 함수 내부에서는 다시 익명함수를 반환하는데, 이 익명함수가 바로 기존의 alertFruit 함수이다.
// 이렇게 작성하면 함수의 실행 결과가 다시 함수가 되며, 반환된 함수를 리스너에 콜백 함수로써 전달할 것이다.
// 이후 언젠가 클릭 이벤트가 발생하면 비로소 이 함수의 실행 컨텍스트가 열리면서 alertFruitBuilder의 인자로 넘어온 fruit를
// outerEnvironmentReference에 의해 참조할 수 있게된다.
// 즉 alertFruitBuilder의 실행 결과로 반환된 함수에는 클로저가 존재한다.