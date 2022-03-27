type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// const first = (arr) => {
//   // arr 是不是一个空数组 如果是的话 那么返回 never
//   return arr[0]
// }

// 首先使用js来实现
// function First(arr) {
//   // 如果数组长度为0 返回never
//   if(arr.length === 0) {
//     return 'never'
//   } else {
//     // 返回第一个值
//     return arr[0]
//   }
// }

// 从给的例子和文案来看，T接收一个数组 ====> T extends any[]

// 将js转换成ts  
//! 注: arr为 T extends any[] 
// 1. 判断arr是否是空数组 使用extends判断 ====> T extends []
// 2. 如果是空数组，返回never   ======> T extends [] ? never
// 3. 如果不是空数组，返回第一个值   ======> T extends [] ? never : T[0]

// 1.extends 类型条件判断
// 2.获取 tuple 的 length 属性 indexed
// 3.extends union 判断的规则
// 4.inter 的使用
