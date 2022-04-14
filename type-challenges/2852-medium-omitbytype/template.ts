type OmitByType<T extends Object, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K]
}
