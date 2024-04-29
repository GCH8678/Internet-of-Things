// 예제 3-30 thisArg를 받는 경우 예시-forEach 메서드

var report = {
    sum: 0,
    count: 0,
    add: function () {
        var args = Array.prototype.slice.call(arguments);
        args.forEach(function (entry){
            this.sum += entry;
            ++this.count;
        },this);
    },
    average: function () {
        return this.sum / this.count;
    }
};
report.add(60,85,95);
console.log(report.sum,report.count,report.average());  // 240 3 80

// 별도의 인자로 this를 받는 경우(콜백 함수 내에서의 this)
// 콜백 함수를 인자로 받는 메서드 중 일부는 추가로 this로 지정할 객체(thisArg)를 인자로 지정할 수 있는 경우가 있음.
// 이러한 메서드의 thisArg 값을 지정하면 콜백 함수 내부에서 this 값을 원하는 대로 변경 가능.
// 이런 형태는 여러 내부 요소에 대해 같은 동작을 반복 수행해야 하는 배열 메서드 많이 포진돼 있으며, 같은 이유로 ES6에
// 새로 등장한 Set,Map 등의 메서드에도 일부 존재.

