// 예제 3-21 call/apply 메서드의 활용 2) 생성자 내부에서 다른 생성자를 호출

function Person(name,gender){
    this.name = name;
    this.gender = gender;
}

function Student(name,gender,school){
    Person.call(this,name,gender);
    this.school=school;
}

function Employee(name,gender,company){
    Person.apply(this,[name,gender]);
    this.company = company;
}
var by = new Student('보영','female','단국대');
var jn = new Employee('재난','male','구골');

// 생성자 내부에 다른 생성자와 공통된 내용이 있을 경우 call 또는 apply 를 이용하여 다른 생성자를 호출하면 간단하게 반복을 줄일 수 있다.