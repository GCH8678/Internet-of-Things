// 예제 5-4 return 없이도 클로저가 발생하는 다양한 경우

// (1) setInterval/setTimeout
(function(){
    var a = 0;
    var intervalId = null;
    var inner = function(){
        if(++a>=10){
            clearInterval(intervalId);
        }
        console.log(a);
    };
    intervalId = setInterval(inner,1000);
})();
// (2) eventListener
(function(){
    var count = 0;
    var button = document.createElement('button');
    button.innerText='click';
    button.addEventListener('click',function(){
        console.log(++count,'times clicked');
    });
    document.body.appendChild(button);
})();

// (1)의 경우 별도의 외부 객체인 window의 메서드에 전달할 콜백 함수 내부에서 지역변수를 참조한다.
// (2)의 경우 별도의 외부객체인 DOM의 메서드에 등록할 handler 함수 내부에서 지역변수를 참조한다.
// 두 상황 모두 지역변수를 참조하는 내부함수를 외부에 전달했기 때문에 클로저이다.