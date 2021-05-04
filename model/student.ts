import {MsSQL} from "../modules/db"

class StudentClass {
  username:string | undefined
  password:string | undefined
}

var studentModel = new MsSQL<StudentClass>()

export {
  StudentClass, studentModel
}