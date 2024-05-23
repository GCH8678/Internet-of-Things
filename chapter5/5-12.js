// 예제 5-12 클로저로 변수를 보호한 자동차 객체(2)

var createCar = function(){
    var publicMembers={
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
    Object.freeze(publicMembers);
    return publicMembers
};
var car = createCar()

// 객체를 return 하기 전에 미리 변경할 수 없게 조치를 취하였다.