// 예제 1-17 깊은 복사 결과 확인

var copyObjectDeep = function(target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
      for (var prop in target) {
        result[prop] = copyObjectDeep(target[prop]);
      }
    } else {
      result = target;
    }
    return result;
  };
  
  var obj = {
    a: 1,
    b: {
      c: null,
      d: [1, 2],
    },
  };
  var obj2 = copyObjectDeep(obj);
  
  obj2.a = 3;
  obj2.b.c = 4;
  obj.b.d[1] = 3;
  
  console.log(obj); // { a: 1. b: { c: null, d: [1, 3] } }
  console.log(obj2); // { a: 3. b: { c: 4, d: { 0: 1, 1: 2 } } => d가 array 에서 dictionary 형태로 바뀜 : 재귀적으로 {}로 묶을때 array를 key(index), value(data)식으로 변환해서

  // 재귀적 방법을 이용해 구현한 copyObjectDeep 함수를 적용한 예제