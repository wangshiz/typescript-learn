"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter4(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user4 = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter4(user4);
