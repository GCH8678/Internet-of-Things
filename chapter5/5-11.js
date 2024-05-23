// 예제 5-11 클로저로 변수를 보호한 자동차 객체(1)

var createCar = function(){
    var fuel = Math.ceil(Math.random()*10+10); // 연료(L)
    var power = Math.ceil(Math.random()*3+2); // 연비(km/L)
    var moved = 0;
    return {
        get moved(){
            return moved;
        },
        run: function(){
            var km = Math.ceil(Math.random()*6);
            var wasteFuel = km / this.power;
            if(this.fuel < wasteFuel){
                console.log('이동불가');
                return;
            }
            fuel -= wasteFuel;
            moved += km;
            console.log(km+'km 이동 (총 '+this.moved+'km). 남은 연료: '+fuel);
        }
    };
};

var car = createCar()

car.run(); // 3km 이동(총 3km). 남은 연료: 17.4
console.log(car.moved); // 3
console.log(car.fuel) // undeifined
console.log(car.power); // undeifined

car.fuel = 1000;
console.log(car.fuel); // 1000
car.run(); //1km 이동(총 4km). 남은 연료: 17.2

car.power = 100;
console.log(car.power); // 100
car.run(); //4km 이동(총 8km). 남은 연료: 16.4

car.moved = 1000;
console.log(car.moved); // 8
car.run(); //2km 이동(총 10km). 남은 연료: 16

// 이번에는 createCar라는 함수를 실행함으로써 객체를 생성하게 했다.
// fuel,power변수를 비공개 멤버로 지정해 외부에서의 접근을 제한했고, moved 변수는 getter만을 부여함으로써 읽기 전용 속성을 부여하였다.
// 이제 외부에서 오직 run 메서드를 실행하는 것과 현재의 moved 값 확인하는 두가지 동작만 할 수 있다.
// 하지만 run 메서드를 다른 내용으로 덮어씌우는 등의 어뷰징이 가능한 상태이다.