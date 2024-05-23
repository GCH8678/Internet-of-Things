// 예제 5-16 부분 적용 함수 - 디바운스

var debounce = function(eventName,func,wait){
    var timeoutId = null;
    return function (event){
        var self = this;
        console.log(eventName,'event 발생');
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func.bind(self,event),wait);
    };
};

var moveHandler = function(e){
    console.log('move event 처리');
};
var wheelHandler = function (e){
    console.log('wheel evnet 처리')
}

document.body.addEventListener('mouseover',debounce('move',moveHandler,500));
document.body.addEventListener('mousewheel',debounce('wheel',wheelHandler,700));


// 실무에서 부분 함수를 사용하기에 적합한 예시이다.
// 디바운스는 짧은 시간 동안 동일한 이벤트가 많이 발생할 경우 이를 전부 처리허지 않고
// 처음 또는 마지막에 발생한 이벤트에 대해 한번만 처리를 하는 것이다.