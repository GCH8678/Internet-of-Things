// 예제 4-2 콜백 함수 예제 (1-2) setInterval

var count = 0;
var cbFunc = function(){
    console.log(count);
    if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc,300);
// -- 실행 결과 --
// 0  (0.3초)
// 1  (0.6초)
// 2  (0.9초)
// 3  (1.2초)
// 4  (1.5초)

// timer에는 setInterval 의 id가 담긴다
// 콜백 함수 내부에서 count 을 출력된다.

// 코드 실행 방식과 제어권
// code                     호출 주체     제어권
// cbFunc();                 사용자       사용자
//setInterval(cbFunc,300); setInterval  setInterval
