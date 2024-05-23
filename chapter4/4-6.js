// 예제 4-6 콜백 함수 내부에서의 this

setTimeout(function(){console.log(this);},300); // (1) Window { ... }
[1,2,3,4,5].forEach(function(x){
    console.log(this);                      // (2) Window { ... }
});
document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a")
.addEventListener('click',function(e){
    console.log(this,e); //     (3) <button id="a">클릭</button>
                         //         MouseEvent { isTrusted: true, ... }
});


// 콜백 함수 내부에서의 this에 대한 예제이다.

// this에 다른 값이 담기는 이유는
// 제어권을 넘겨받을 코드에서 call/apply 메서드의 첫 번쨰 인자에
// 콜백 함수 내부에서의 this가 될 대상을 명시적으로 바인딩하기 떄문이다.