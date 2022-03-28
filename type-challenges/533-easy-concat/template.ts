// 扩展运算符
type Concat<T extends any[], U extends any[]> = [...T, ...U]


// 使用js来实现 arr1和arr2都为数组
// function Concat(arr1, arr2) {
//   // 直接返回扩展运算符拼接的数组
//   return [...arr1, ...arr2]
// }

// 将js转换为ts  
//! 注: arr1为T extends any[] arr2为U extends any[]
// 1. 将arr1和arr2通过扩展运算符拼接成一个数组 ====>  [...T, ...U]
// 2. 接收返回的数组 =====> type Concat<T extends any[], U extends any[]> = [...T, ...U]
