// 예제 3-1 전역 공간에서의 this(브라우저 환경)

console.log(this); // {alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(window); // {alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(this === window); // true

// 전역 공간에서 this는 전역 객체를 가리킴. 
// 개념상 전역 컨텍스트를 생성하는 주체가 전역 객체이기 때문
// 브라우저 환경에서는 window, Node.js 환경에서는 global