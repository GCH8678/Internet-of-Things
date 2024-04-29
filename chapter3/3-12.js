// 예제 3-12 콜백 함수 내부에서의 this

setTimeout(function () { console.log(this);},300);          //(1)

[1,2,3,4,5].forEach(function(x){                            //(2)
    console.log(this,x);
});

document.body.innerHTML += '<button id="a">클릭</button>';  //(3)
document.body.querySelector('#a')
    .addEventListener('click',function (e){
        console.log(this,e)
    });


// 콜백 함수도 함수이기 때문에 기본적으로 this가 전역객체를 참조하지만,
// 제어권을 받은 함수에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는 그대상을 참조하게 된다.
// (1)(2)는 전역객체를 참조
// (3)의 addEventListener 메서드는 콜백 함수를 호출할 때 자신의 this를 상속하도록 정의되어 있음.(document.body.querySelector('#a')가 this)