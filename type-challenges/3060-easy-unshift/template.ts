type Unshift<Arr extends unknown[], Ele> = [Ele, ...Arr]

// 使用js来实现
// function Unshift(arr: any[], traget: any) {
//   return [traget, ...arr]
// }

// 将js转换为ts
//! 注: arr为 T extends any[], target为 U
// 1. [traget, ...arr] ====> [U, ...T] 
// 2. 接收   ====> type Unshift<T extends any[], U> = [U, ...T]

