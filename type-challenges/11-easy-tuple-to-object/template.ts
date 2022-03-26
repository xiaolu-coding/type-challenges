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

// 1.返回一个对象
// 2.循环遍历
// 3.取值