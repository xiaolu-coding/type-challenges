type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Object
    ? T[P] extends Function
      ? T[P]
      : DeepReadonly<T[P]>
    : T[P]
}

// 实现js来实现

// function DeepReadonly(target) {
//   // 创建一个空对象
//   const res = {}
//   // 遍历target的key
//   for (let key in target) {
//     // 如果是对象，递归调用
//     if (typeof target[key] === "object") {
//       target[key] = DeepReadonly(target[key])
//     } else {
//       // 如果不是对象但是是函数，则直接赋值
//       if (typeof target[key] === "function") {
//         target[key] = target[key].toLocaleString()
//       }
//     }
//     res["readonly " + key] = target[key]
//   }
//   // 返回对象
//   return res
// }

// 将js转换为ts
//! 注: target为T
// 1. 创建一个空对象res =====> {}
// 2. 遍历target的key =====> P in keyof T
// 3. 取到target[key]的值 =====> T[P]
// 4. 判断target[key]是否是object类型 ======> T[P] extends Object
// 后面就是一系列判断
