# Explations on the examples in chapter 1

##### 1-1 변수 선언
```bash
var a : 식별자, 변수명 variabl a 등으로 불림
```

##### 1-2 변수 선언과 할당
```bash
var a : 변수 a 선언
a = 'abc' : 변수 a에 데이터 할당
var a = 'abc' : 변수 선언과 동시에 할당

identifier = data 형태로 둘다 메모리에 할당됨
variable 은 changeable / constant는 반대
primitive type 은 immutable / reference type은 반대
```

##### 1-3 불변성
```bash
var a = 'abc';
a=a+'def';
var b = 5;
var c = 5;
b= 7; 
등등 모든 기본형 데이터는 모두 불변값(immutable)을 가짐
```

##### 1-4 참조형 데이터의 할당
```bash
var obj1 = { a:1, b: 'bbb'}

a 와 b는 identifier 또는 property(key)라 불림
1과 'bbb'는 data 또는 value라고 함.

obj1,a,b 는 모두 identifier area에 있고, {},1,'bbb'는 data area에 존재함
```

##### 1-5 참조형 데이터의 프로퍼티 재할당
```bash
var obj1 = { a:1, b: 'bbb'}
obj1.a = 2

obj1이 reference type 데이터를 가리킴
reference type data는 실질적인 data인 1,'bbb'를 가리킴
line 7에서 2를 할당하면 기존의 1이 2로 바뀌는 것이 아닌 새로운 2를 메모리에 생성하고 a가 가리키는 주소가 바뀌게 됨
```

##### 1-6 중첩된 참조형 데이터(객체)의 프로퍼티 할당
```bash
var obj = { x:3, arr:[3,4,5] }

자바스크립트는 array의 각 값에 대해 index를 통해 통제
x와 arr의 3은 data area의 똑같은 3을 가리키고 있다.
```

##### 1-7 변수 복사
```bash
var a = 10;
var b = a;
var obj1 = {c:10, d: 'ddd'};
var obj2 = obj1;

10과 'ddd' 같은 primitive type은 immutable 하기 때문에 다른 값으로 변경되지 않는다.
똑같은 값을 할당하거나, 복사할 때 data가 새로 생성되지 않고 원래 있던 주소를 활용한다.
```

##### 1-8 변수 복사 이후 값 변경 결과 비교 (1) - 객체의 프로퍼티 변경 시 
```bash
var a = 10;
var b = a;
var obj1  = {c:10,d:'ddd'};
var obj2 = obj1;

b=15;
obj2.c=20;

기존 객체의 c 값이 변하는 것이 아닌 ㅅ새로운 데이터 20을 가리키는 주소를 할당한다.
```

##### 1-9 변수 복사 이후 값 변경 결과 비교 (2) - 객체 자체를 변경했을 때 
```bash
var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

b = 15;
obj2 = { c: 20, d: 'ddd' };

내부 property를 변경할 때에는 기존의 data를 변경하는 것이 아니라 새로운 객체를 할당하는 것이 좋다.
위와 같이 할당할 경우 기존 c와 d는 변하지 않는다.(불변성)
```

##### 1-10 객체의 가변성에 따른 문제점 
```bash
var user = { name: "Jaenam", gender: "male" };
var changeName = function (user,newName){
  var newUser = user;
  newUser.name = newName;
  return newUser;
};
var user2 = changeName(user, "Jung");
if(user!=user2){
  console.log("유저 정보가 변경되었습니다.");
}
console.log(user.name, user2.name) // Jung Jung
console.log(user === user2); // True => 두 변수가 서로 동일

user object가 변하면서 새로운 값만을 기억하고, 이전의 값을 삭제한다는 문제점 발생
많은 서비스에서 바뀌기 전의 정보가 필요한 경우가 생길수도 있음. 따라서, 변경 전과 후에 서로 다른 객체를 바라보게 만드는 것이 좋다.
```

##### 1-11 객체의 가변성에 따른 문제점의 해결 방법
```bash
var changeName = function(user,newName){
    return {
        name: newName,
        gender: user.gender
    };
};

예제 10번에서 changeName의 함수를 위와 같이 변경하면 가변성에 의한 문제점이 해결된다.
```

##### 1-12 기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)
```bash
var copyObject = function (target){
    var result = {};
    for (var prop in target){
        result[prop] = target[prop];
    }
    return result;
}

copyObject 함수는 result 객체에 target 객체의 프로퍼티를 복사하는 함수이다.(얕은 복사)
```

##### 1-13 copyObject를 이용한 객체 복사
```bash
var user = { name: "Jaenam", gender: "male" };
var user2 = copyObject(user);
user2.name="Jung";
if(user !== user2){
    console.log("유저 정보가 변경되었습니다."); // 유저 정보가 변경되었습니다.
}
console.log(user.name,user2.name); // Jaenam Jung
console.log(user === user2); // false

예제 12번에서의 copyObject를 활용한 예제이다.
실행결과는 주석과 같다.
```

##### 1-14 중첩된 객체에 대한 얕은 복사
```bash
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

예제 12번에서의 copyObject를 활용한 예제이다.
실행결과는 주석과 같다.
얇은 복사의 문제점을 확인할 수 있는 예제이다.
user.urls 프로퍼티에 대해서도 불변 객체로 만들 필요가 있다.
```

##### 1-15 중첩된 객체에 대한 깊은 복사
```bash
var copyObject = function (target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};
var user = { ... } ; // 13번과 같아 생략

var user2 = copyObject(user);
user2.urls = copyObject(user.urls);

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // false

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); // false


14번까지의 copyObject를 위와 같이 수정하였다.
실행결과는 주석과 같다.
깊은 복사를 통해 얕은 복사로 인해 발생하는 문제점을 해결한 예제이다.
```

##### 1-16 객체의 깊은 복사를 수행하는 범용 함수
```bash
var copyObjectDeep = function(target){
    var result = {};
    if (typeof target === 'object' && target !== null){
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    }else{
        result = target;
    }
    return result;
}

재귀적 방법을 이용하여 범용성있는 깊은 복사 함수를 구현한 예제이다.
```

##### 1-17 깊은 복사 결과 확인
```bash
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
  console.log(obj2); // { a: 3. b: { c: 4, d: { 0: 1, 1: 2 } } 
  
  예제 16번에서 구현한 함수를 활용한 결과를 확인하는 예제이다.
  실행 결과는 주석과 같다.
```