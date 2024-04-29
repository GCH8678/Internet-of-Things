// 예제 3-19 call/apply 메서드의 활용 1-3) 문자열에 배열 메서드 적용 예시

var str = 'abc def';

//Array.prototype.push.call(str,', pushed string'); // Error : Cannot assign to read only property 'length' of object [object String]
Array.prototype.concat.call(str,'string'); // [String {'abc def'}, 'string']

Array.prototype.every.call(str,function(char){return char !== ' ';}); // false
Array.prototype.some.call(str,function(char){return char === ' '}); // true

var newArr = Array.prototype.map.call(str,function(char){ return char+"!";})
console.log(newArr) // ['a!','b!','c!',' !','d!','e!','f!']

var newStr = Array.prototype.reduce.apply(str,[
    function(string,char,i) {return string+char+i;},
    ''
]);
console.log(newStr)


// 문자열의 경우 length 프로퍼티가 읽기 전용이므로 원본 문자열에 변경을 가하는 메서드는 에러를 던짐
// concat도 대상이 반드시 배열이어야 하는 경우 에러가 나지 않더라도 원하는 결과를 얻을 수 없음