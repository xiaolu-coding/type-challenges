type Includes<T extends  any[], U> =  U extends T ? true: false


// 使用js来实现
// function Includes(arr: any[], target: any): boolean {
//     return arr.includes(target)
// }

// 将js转换为ts
//! 注: arr为 T extends any[], target为 U  
// 1. 遍历判断arr是否包含target   ======> U extends T
// 2. 如果包含，返回true ======> U extends T ? true
// 3. 如果不包含，返回false ======> U extends T ? true : false

