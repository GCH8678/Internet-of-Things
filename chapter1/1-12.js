// 예제 1-12 기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)

var copyObject = function (target){
    var result = {};
    for (var prop in target){
        result[prop] = target[prop];
    }
    return result;
}

// copyObject는 result 객체에 target 객체의 프로퍼티를 복사하는 함수 (얕은 복사 예시)