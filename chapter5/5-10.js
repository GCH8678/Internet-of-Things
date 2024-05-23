// 예제 5-10 간단한 자동차 객체

var car = {
    fuel: Math.ceil(Math.random()*10+10), // 연료(L)
    power: Math.ceil(Math.random()*3+2), // 연비(km/L)
    moved:0,
    run: function(){
        var km = Math.ceil(Math.random()*6);
        var wasteFuel = km / this.power;
        if(this.fuel < wasteFuel){
            console.log('이동불가');
            return;
        }
        this.fuel -= wasteFuel;
        this.moved += km;
        console.log(km+'km 이동 (총 '+this.moved+'km)');
    }
};

//정보 은닉은 어떤 모듈의 내부 로직에 대해 외부로의 노출을 최소화해서 모듈간의 결합도를 낮추고 유연성을 높이고자 하는 중요한 개념이다.
// 자바스크립트의 경우 클로저를 이용한다.
// 위 예제의 경우 멤버 변수 변경에 취약하다.