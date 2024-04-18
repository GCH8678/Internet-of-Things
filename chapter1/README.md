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



