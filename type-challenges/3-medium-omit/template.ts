type MyOmit<T, K extends keyof T> = {
  // 拿出排除了k的T中的key，然后通过tp拿到属性
  [P in Exclude<keyof T, K>]:  T[P]
}

// 使用js实现
// function MyOmit(target, arr) {
//   // 创建一个空对象
//   const res = {}
//   // 获取target对象的key数组
//   const keys = Object.keys(target)

//   keys
//     .filter((key) => arr.indexOf(key) === -1)  // 筛选出不在arr中的key
//     .forEach((key) => (res[key] = target[key])) // 对筛选出的key进行赋值
//   // 返回对象
//   return res
// }

// 根据例子可知 arr都是T的key =====> arr extends keyof T

// 将js转换为ts
//! 注: target为T arr为 K extends keyof T
// 1. 创建一个空对象  =====>  {}
// 2. 获取target对象的key数组  Object.keys(target)  =====>  keyof T
// 3. 过滤出不在arr中的key  key.filter((key) => arr.indexOf(key) === -1) =====>  Exclude<keyof T, K>
// 4. 对筛选出的key进行赋值  res[key] = target[key] =====>   [P in Exclude<keyof T, K>]: T[P]

