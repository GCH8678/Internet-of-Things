// 예제 1-6 중첩된 참조형 데이터(객체)의 프로퍼티 할당

var obj = {
    x:3,
    arr:[3,4,5]
}

// 자바스크립트는 array의 각 값에 대해 index를 통해 통제
// x와 arr의 3은 data area의 똑같은 3을 가리킴