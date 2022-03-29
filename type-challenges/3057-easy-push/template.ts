type Push<T extends any[], U> = [...T, U]

// 使用js来实现

// function Push(arr: any[], target: any) {
//   return [...arr, target]
// }

// 将js转换为ts
//! 注: arr为 T extends any[], target为 U
// 1. [...arr, target] ====> [...T, U]
// 2. 接收 ====> type Push<T extends any[], U> = [...T, U]
