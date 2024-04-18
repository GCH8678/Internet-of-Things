// 예제 1-5 참조형 데이터의 프로퍼티 재할당

var obj1 = {
    a:1,
    b:'bbb'
}
obj1.a=2;

// obj1이 reference type 데이터를 가리킴
// reference type data는 실질적인 data인 1, 'bbb'를 가리킴
// line 7에서 2를 할당하면 기존의 1이 2로 바뀌는 것이 아닌 새로운 2를 메모리에 생성하고 a가 가리키는 주소가 바뀌게 됨