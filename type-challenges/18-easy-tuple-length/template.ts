
type Length<T extends readonly any[]> = T["length"]


// 使用js方法实现
// function Length(arr) {
//   return arr.length
// }

// 通过文案可知，T接收数组类型 ====> T extends any[]
// 通过['tesla', 'model 3', 'model X', 'model Y'] as const可知。T是readonly ====> T extends readonly any[]

// 将js转换为ts
//! 注: arr为T extends readonly any[]
// 1. 返回arr的长度 ======>  T["length"] 
// 2. 接收返回的长度 ======>  type Length<T extends readonly any[]> = T["length"]
