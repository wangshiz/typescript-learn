import {MongoDB} from "../modules/db"

class TeacherClass {
  username:string | undefined
  password:string | undefined
}

var teacherModel = new MongoDB<TeacherClass>()

export {
  TeacherClass, teacherModel
}