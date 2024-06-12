// 예제 6-9 Object.prototype에 추가한 메서드에의 접근

Object.prototype.getEntries = function(){
    var res = [];
    for (var prop in this){
        if(this.hasOwnProperty(prop)){
            res.push([prop,this[prop]]);
        }
    }
    return res;
};

var data = [
    ['object', { a: 1, b: 2, c: 3 }], // [["a",1], ["b", 2], ["c",3]]
    ['number', 345], // []
    ['string', 'abc'], // [["0","a"], ["1","b"], ["2","c"]]
    ['boolean', false], // []
    ['func', function() {}], // []
    ['array', [1, 2, 3]], // [["0", 1], ["1", 2], ["2", 3]]
];

data.forEach(function(datum){
    console.log(datum[1].getEntries())
})

// 어떤 생성자 함수이든 prototype은 반드시 객체이기 때문에, Object.prototype이 언제나 프로토타입 체인의 최상단에 존재하게 된다.
// 따라서 객체에서만 사용할 메서드는 다른 여느 데이터 타입처럼 프로토타입 객체 안에 정의할 수가 없다.