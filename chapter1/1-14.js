// 예제 1-14 중첩된 객체에 대한 얕은 복사

var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
      result[prop] = target[prop];
    }
    return result;
  };
  
  var user = {
    name: 'Jaenam',
    urls: {
      portfolio: 'http://github.com/abc',
      blog: 'http://blog.com',
      facebook: 'http://facebook.com/abc',
    },
  };
  var user2 = copyObject(user);
  user2.name = 'Jung';
  
  console.log(user.name === user2.name); // false
  
  user.urls.portfolio = 'http://portfolio.com';
  console.log(user.urls.portfolio === user2.urls.portfolio); // true
  
  user2.urls.blog = '';
  console.log(user.urls.blog === user2.urls.blog); // true

  // 얇은 복사의 문제점을 확인 할 수 있는 예제
  // user.urls 프로퍼티에 대해서도 불변 객체로 만들 필요가 있음