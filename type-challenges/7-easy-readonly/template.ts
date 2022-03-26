type MyReadonly<T> = {
  readonly [P in keyof T] : T[P]
}


// 首先使用js来实现
// function MyReadonly(obj) {
//   // 创建并返回对象
//   const result = {}
//   // 遍历obj的key
//   for (const key in obj) {
//     // 将每个key都加上readonly
//     result['readonly' + key] = obj[key]
//   }
//   // 返回
//   return result
// }

// 使用js的步骤如下
//! 注: obj 为 T 
// 1. 创建一个对象 ====>  {}
// 2. 遍历obj的key
//  2.1 obj的key  ====>  keyof T 
//  2.2 遍历obj的key ====> P in keyof T 
// 3. 给遍历的key加上readonly  ====> readonly [P in keyof T]
// 4. 取得obj[key]的值  ====> T[P]
// 5. 将obj[key]的值赋值给加上readonly的key ====> readonly [P in keyof T] : T[P]
// 6. 返回对象  =====> { readonly [P in keyof T] : T[P] }

