// 예제 2-4 매개변수와 변수에 대한 호이스팅 (3) - 호이스팅을 마친 상태

function a() {
    var x; // 수집 대상 1의 변수 선언 부분
    var x; // 수집 대상 2의 변수 선언 부분
    var x; // 수집 대상 3의 변수 선언 부분

    x = 1;  //수집 대상 1의 할당 부분
    console.log(x); // (1) 1 출력
    console.log(x); // (2) 1 출력
    x = 2;
    console.log(x); // (3) 2 출력
}
a()

// environment record는 현재 실행될 컨텍스트의 대상 코드 내 어떤 식별자들이 있는지만 관심이 있음
// 예제 2-2,2-3,2-4 는 environment record입장에서 다를것이 없음 => 실행 결과도 동일
