// 模块
// 暴露变量
export var dbUrl = ""

// 暴露方法
export function getBDData():any[] {
  console.log("获取数据库的数据")

  return [
    {
      title: ""
    },
    {
      title: ""
    },
    {
      title: ""
    }
  ]
}

export function save() {
  console.log("this is save function")
}

// export {dbUrl, getBDData, save} // 这样写也可以  不过变量 方法前就不用加export了
// export default getBDData  // export default一个moduel只能用一次

