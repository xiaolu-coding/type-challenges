type Shift1<T> = T extends [infer U, ...infer Rest] ? [...Rest] : never 
