// 예제 3-2 전역 공간에서의 this(Node.js 환경)


console.log(this); // {alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(global); // {alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(this === global); // true

// 전역 공간에서 this는 전역 객체를 가리킴. 
// 개념상 전역 컨텍스트를 생성하는 주체가 전역 객체이기 때문
// 브라우저 환경에서는 window, Node.js 환경에서는 global

// VSCODE 상에서 돌려보면 this가 빈객체가 나옴 => js 파일에서 작성하는 코드 전체는 하나의 함수 내부로 들어가게 됨 => 당연히 비교 결과도 false로 나옴 
// js파일은 하나의 함수 안에서 실행되므로, 해당 함수 내부에 존재하는 기본 객체가 this의 참조값이 된다. 
// 따라서 교재의 결과와 다르게 나옴

// *다음 코드 참고
// console.log(this, module.exports, exports); // {}, {}, {} 
// console.log(this === module.exports); // true 
// console.log(this === exports); // true 
// console.log(module.exports === exports); // true 
// console.log(this === global); // false

// 실제 global이 전역객체인것을 확인하려면 어떤 함수든 일반 함수로 실행된다면 해당 함수 내부에서 참조하는 this 는 전역객체라는 점을 이용함.

// * 다음 코드 참고
// function a() { 
//     console.log(this) // global 
//     console.log(this === global) // true 
// } 
// a()