// 예제 3-18 call/apply 메서드의 활용 1-2) arguments, NodeList에 배열 메서드 적용

function a () {
    var argv = Array.prototype.slice.call(arguments);
    argv.forEach(function(arg){
        console.log(arg)
    });
}
a(1,2,3);

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
var nodeList = document.querySelectorAll('div');
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function(node){
    console.log(node);
})

// 그 밖에도 유사배열객체에는 call/apply 메서드를 이용해 모든 배열 메서드를 적용할 수 있다.
// 단 문자열의 경우 length 프로퍼티가 읽기 전용이므로 원본 문자열에 변경을 가하는 메서드는 에러를 던짐
// concat도 대상이 반드시 배열이어야 하는 경우 에러가 나지 않더라도 원하는 결과를 얻을 수 없음