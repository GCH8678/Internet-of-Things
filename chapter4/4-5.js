// 예제 4-5 콜백 함수 예제 (2-3) Array.prototype.map - 구현

Array.prototype.map = function (callback,thisArg){
    var mappedArr = [];
    for (var i = 0; i<this.length; i++){
        var mappedValue = callback.call(thisArg || window, this[i],i,this);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
}
// map 메서드에 대한 동작 원리를 이해하기 위한 예제이다.
// this에 thisArg값이 있을 경우 그 값을 ,없을 경우에 전역객체를 지정한다.
// 첫번째 인자는 this가 배열을 가리킬 것이므로 배열의 i 번째 요소 값을,
// 두번쨰 인자는 i 값을, 세번째 인자는 배열 자체를 지정해 호출한다.

// this에 다른값이 담기는 이유이기도 하다.