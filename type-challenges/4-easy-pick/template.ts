// ts 联合类型 union

// keyof 相当于在类型空间执行Object.keys，拿到T的所有key，然后K被其所有key约束
type MyPick<T, K extends keyof T> = {
  // in mapped
  [P in K] : T[P]
}

// function MyPick(todo, keys) {

//   const obj = {}

//   keys.forEach(key => {
//     if(key in todo) {
//       obj[key] = todo[key]
//     }
//   })

//   return obj
// }

// 1.返回一个对象
// 2.遍历Foreach mapped 在typscript手册中搜
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3.todo[key] 取值 indexed 
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4.判断 看看 key 在不在todo里面 
//   4.1 keyof lookup
//   4.2 extends 类型约束

// keyof lookup 一下，拿到keys,然后通过mapped遍历拿到每一个key，然后通过Indexed取出约束类型的key