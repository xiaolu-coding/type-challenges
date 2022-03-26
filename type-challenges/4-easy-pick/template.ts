// keyof 相当于在类型空间执行Object.keys，拿到T的所有key，然后K被其所有key约束
type MyPick<T, K extends keyof T> = {
  [P in K] : T[P]
}

// 首先使用js来完成
// function MyPick(todo, keys) {
//   // 创建一个空对象
//   const obj = {}
//   // 遍历keys的key，如果todo中也有相同的key，那么将todo[key]赋给obj[key]
//   keys.forEach((key) => {
//     if (key in todo) {
//       obj[key] = todo[key]
//     }
//   })
//   // 返回obj
//   return obj
// }

// 如上，用js实现用了以下几个步骤 
//! 注: todo为T keys为K
// 1. 创建一个空对象最后返回一个对象  =====> {}
// 2. forEach遍历keys ======> mapped https://www.typescriptlang.org/docs/handbook/2/mapped-types.html =====>  obj[key] = [P in K]    key = p
// 3. 判断 看看 key 在不在todo里面 ======> keyof lookup   
//  3.1 keyof lookup   =====> keyof T
//  3.2 extends 类型约束 ======> K extends keyof T 来自于例子三种的超过key范围希望报错
// 4. todo[key] 取值  ======> indexed https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html =====> todo[key] = T[P]

// 转换为ts后
// keyof lookup 一下，拿到keys,然后通过mapped遍历拿到每一个key，然后通过Indexed取出约束类型的key
