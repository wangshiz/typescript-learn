class Student {
  fullName: string;
  constructor(public firstName:string, public middleInitial:string, public lastName:string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter4(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user4 = new Student("Jane", "M.", "User")

document.body.innerHTML = greeter4(user4);