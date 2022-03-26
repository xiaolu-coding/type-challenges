type MyReadonly<T> = {
  // P遍历T的keys，          根据key取值
  readonly [P in keyof T] : T[P]
}




// function MyReadonly(obj) {
  
//   const result = {}

//   for (const key in obj) {
//     result["readonly" + key] = obj[key]
//   }


//   return result

// }

// 1.返回一个对象
// 2.遍历obj (遍历对象， ts遍历接口 P in keyof T)  mapped lookup
// 加上readonly 关键字 
// 通过key来获取obj里面的值  (接口里的值) indexed