type Mutable<T extends Object> = {
  -readonly [K in keyof T]: T[K]
}
