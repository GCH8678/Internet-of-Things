// 예제 5-6 콜백 함수와 클로저(1)

var fruits = ['apple','banana','peach'];
var $ul = document.createElement('ul');

fruits.forEach(function(fruit){
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click',function(){
        alert('your choice is '+fruit);
    });
    $ul.appendChild($li);
});
document.body.appendChild($ul);

// 대표적인 콜백 함수 중 하나인 이벤트 리스너에 관한 예시이다.
// 클로저의 '외부 데이터'에 주목하면서 흐름을 따라가자.