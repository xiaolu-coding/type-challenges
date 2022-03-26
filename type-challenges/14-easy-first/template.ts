// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// const first = (arr) => {
//   // arr 是不是一个空数组 如果是的话 那么返回 never
//   return arr[0]
// }

// 1.extends 类型条件判断
// 2.获取 tuple 的 length 属性 indexed
// 3.extends union 判断的规则
// 4.inter 的使用