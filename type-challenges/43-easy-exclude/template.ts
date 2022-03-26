// 当传入联合类型时，就会分布式
type MyExclude<T, U> = T extends U ? never : T