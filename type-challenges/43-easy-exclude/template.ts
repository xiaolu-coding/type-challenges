// 当传入联合类型时，就会分布式
type MyExclude<T, U> = T extends U ? never : T

// 使用js来实现
// function MyExclude(arr1, arr2) {
//   // 返回arr1不在arr2中的值
//   return arr1.filter(item => !arr2.includes(item))
// }

// 将js转换为ts
//! 注: arr1为T arr2为U
// 1. arr1.filter 遍历arr1中的值去判断是否在arr2中 ====> T extends U
// 2. 如果在就不返回 ====>  T extends U ? never
// 3. 如果不在就返回 ====>  T extends U ? never : T
