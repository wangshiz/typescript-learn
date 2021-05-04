"use strict";
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter3(user3);
