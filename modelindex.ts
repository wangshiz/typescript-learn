import {TeacherClass, teacherModel} from "./model/teacher"
import {StudentClass, studentModel} from "./model/student"
var t = new TeacherClass()
t.username = "zhangsan"
t.password = "1231"
teacherModel.add(t)
teacherModel.update(t, "123")

var s = new StudentClass()
s.username = "lisi"
s.password = "55555"
teacherModel.add(s)
studentModel.update(s, "123")