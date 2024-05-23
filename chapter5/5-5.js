// 예제 5-5 클로저의 메모리 관리

// (1) return 에 의한 클로저의 메모리 해제

var outer = (function(){
    var a = 1;
    var inner = function(){
        return ++a;
    };
    return inner;
})();
console.log(outer());
console.log(outer());
outer = null; // outer 식별자의 inner 함수 참조를 끊음

// (2) setInterval에 의한 클로저의 메모리 해제
(function(){
    var a = 0;
    var intervalId = null;
    var inner = function(){
        if (++a>=10){
            clearInterval(intervalId);
            inner = null;   // inner 식별자의 함수 참조를 끊음
        }
        console.log(a);
    };
    intervalId = setInterval(inner,1000);
})();

// (3) eventListener에 의한 클로저의 메모리 해제
(function(){
    var count = 0;
    var button = document.createElement('button');
    button.innerText='click';

    var clickHandler = function(){
        console.log(++count,'times clicked');
        if(count>=10){
            button.removeEventListener('click',clickHandler);
            clickHandler=null; // clickHandler 식별자의 함수 참조를 끊음
        }
    }
})

// 클로저의 특성을 정확히 이해해야 메모리 누수등의 위험을 최소화 할 수 있다.
// 하지만, 최근의 자바스크립트 엔진에서는 위와 같은 위험이 크게 줄어들었고,
// 개발자의 의도하에 생기는 메모리 소비에 대한 관리법만 잘 파악해서 적용하면 충분하다.