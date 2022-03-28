// 首先C要是boolean,然后根据他是不是true返回对应值
type If<C extends boolean, T, F> = C extends true ? T : F

// 使用js实现  c必须是boolean
// function If(c: boolean, t: any, f: any): any {
//   // 如果c是true 返回 t 否则返回 f
//   return c ? t : f
// }

// 将js转换为ts 
//! 注: c为C extends boolean t为T f为F
// 1. 如果c是true 返回 t  ====>  C extends true ? T
// 2. 如果不是，返回f =====> C extends true ? T : F
