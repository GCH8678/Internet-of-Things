// 예제 5-15 부분 적용 함수 구현(2)
Object.defineProperty(window,'_',{
    value: 'EMPTY_SPACE',
    writable: false,
    configurable: false,
    enumerable: false
});

var partial2 = function(){
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if (typeof func != 'function'){
        throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    return function(){
        var partialArgs = Array.prototype.slice.call(originalPartialArgs,1);
        var restArgs = Array.prototype.slice.call(arguments);
        for (var i=0;i<partialArgs.length; i++){
            if(partialArgs[i] === _){
                partialArgs[i] = restArgs.shift();
            }
        }
        return func.apply(this, partialArgs.concat(restArgs));
    };
};

var add = function(){
    var result = 0;
    for (var i = 0;i<arguments.length;i++){
        result+= arguments[i];
    }
    return result;
};
var addPartial = partial2(add,1,2,_,4,5,_,_,8,9);
console.log(addPartial(3,6,7,10)); // 55

var dog = {
    name:'강아지',
    greet: partial2(function(prefix,suffix){
        return prefix+this.name+suffix;
    }, '왈왈, ')
};
console.log(dog.greet("배고파요!")); // 왈왈, 강아지 배고파요!


// 5-14 예제에서 추가로 원하는 위치에 미리 넣어놓고 나중에 빈 자리에 인자를 채워넣어 실행할 수 있도록 하였다.
// '비워놓음'을 표시학 ㅣ위해 미리 전역객체에 _라는 프로퍼티를 준비하면서 삭제 변경 등의 접근에 대한 방어 차원에서 여러 가지 프로퍼티 속성을 설정하였다.