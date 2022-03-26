// 首先C要是boolean,然后根据他是不是true返回对应值
type If<C extends boolean, T, F> = C extends true ? T : F
