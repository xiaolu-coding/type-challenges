type MyReadonly2<T, K extends keyof T = keyof T> = {
  [key in Exclude<keyof T, K>]: T[key]
} & {
  readonly [key in K]: T[key]
}


// 使用js来实现
// function MyReadOnly2(target, arr) {
//   // 创建一个空对象
//   const res = {}
//   // 获取target的key
//   const keys = Object.keys(target)
//   // 这一步是将不在arr数组中的key添加到res对象中，并赋值为target[key]
//   keys
//     .filter((key) => arr.indexOf(key) === -1) // 筛选出不在arr中的key
//     .forEach((key) => (res[key] = target[key])) // 对筛选出的key进行赋值
//   // 创建另外一个空对象，用于取交集
//   const res2 = {}
//   // 相当于复制一份target对象，但是对value值都加上了readonly
//   keys.map((key) => (res2[key] = `readonly ${target[key]}`))
//   // 遍历res的key
//   for (let key in res) {
//     // 如果res2中有key，代表这个key不需要readonly
//     if (key in res) {
//       res2[key] = res[key]
//     }
//   }
//   // 最后返回取交集后的对象
//   return res2
// }

// 从例子中可知, arr为T的key数组 ====> arr extends keyof T

// 将js转换为ts
//! target为T, arr为 K extends keyof T
// 1. 创建一个空对象  res ======> {}
// 2. 获取target的key Object.keys(target)  ======> keyof T
// 3. 这一步是将不在arr数组中的key添加到res对象中，并赋值为target[key] ====>   [key in Exclude<keyof T, K>]: T[key]  这一步就是第三题的内容 详情可见 3-medium-omit
// 4. 创建另外一个空对象 res ======> {}
// 5. 复制一份target对象，但是对value值都加上了readonly =======> readonly [key in K]: T[key]
// 6. 取res res2的交集   =======> { [key in Exclude<keyof T, K>]: T[key] } & { readonly [key in K]: T[key] }
// 7. 注意文案给的是第二个参数是可有可无，当没有的时候全体都是readonly，那就给第二个参数默认值 keyof T  =====>  K extends keyof T = keyof T
// 最终结果:



