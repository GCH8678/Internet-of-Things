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


