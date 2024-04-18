// 예제 1-10 객체의 가변성에 따른 문제점

var user = {
  name: "Jaenam",
  gender: "male"
};

var changeName = function (user,newName){
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, "Jung");

if(user!=user2){
  console.log("유저 정보가 변경되었습니다.");
}
console.log(user.name, user2.name) // Jung Jung
console.log(user === user2); // True => 두 변수가 서로 동일

// user object가 변하면서 새로운 값만을 기억하고, 이전의 값을 삭제한다는 문제점이 생김
// 바뀌기 전의 정보가 필요한 경우가 생길수도 -> 변경 전과 후에 서로 다른 객체를 바라보게 만드는게 좋음.