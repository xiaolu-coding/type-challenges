type MyParameters<T extends (...args: any[]) => any> = T extends (...args: [...infer R]) => any ? [...R] : []

// 根据给的例子可知:  参数为typeof 一个函数 ====> T extends (...args: any[]) => any   

// 使用js实现
// function MyParameters(func) {
//   if (func.arguments.length != 0) {
//     return func.arguments()
//   } else {
//     return []
//   }
// }

// 将js转换为ts
//! 注: func为 T extends (...args: any[]) => any
// 判断T参数 如果 T 能赋值给函数(param: infer P) => any
// 1. T extends (...args: [...infer R]) => any ? [...R] : []    infer R入参类型
