// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never
// 这里的args不能使用unkonwn 只能使用any 涉及到参数逆变
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer R ? R : never;

//! reStart End 
// 这是考infer的使用，和上一题的infer入参差不多，而这次的infer是用在返回值

// 1. T是否可以赋值给这个函数 =====>  T extends (...args: any[])
// 2. 如果T可以赋值  ======> T extends (...args: any[]) ==> infer R ? R
// 3. 如果T不可以赋值 ====>  T extends (...args: any[]) ==> infer R ? R : never
