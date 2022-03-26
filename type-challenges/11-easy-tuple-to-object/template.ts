// 因为对象的键只能是string number symbol
type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  // keyof数组的话，会得到索引数组
  [P in T[number]] : P
}

// function TupleToObject(arr) {

//   const obj = {}

//   arr.foreach(item => {
//     obj[item] = item
//   })

//   return obj

// }

// 首先使用js实现
// function TupleToObject(arr) {
//   // 创建一个空对象
//   const obj = {}
//   // 遍历arr
//   arr.foreach(item => {
//     // 将arr的每一项赋值给obj对象的键
//     obj[item] = item
//   })
//   // 返回对象
//   return obj
// }

// 将js步骤转换为ts arr为T

//  根据给的例子 ['tesla', 'model 3', 'model X', 'model Y'] as const ====> T是readonly的数组 T extends readnoly()[]
//  根据给的希望报错的例子 [[1, 2], {}] as const ====> T的key不是数组和对象类型，那么就只能是symbol, string, number  =====> T extends readonly (string | symbol | number)[]
// 1. 创建一个空对象 {}
// 2. 遍历arr数组  ===> P in T[number]
// 3. 将arr的每一项赋值给obj对象的键
//  3.1 arr的每一项 item ===> P
//  3.2 arr的每一项赋值给obj对象的键 obj[item] = item ====>  [P in T[number]] : P
// 4. 返回一个对象  ====> { [P in T[number]] : P }
