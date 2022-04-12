type PickByType<T, K> = {
  [key in keyof T as T[key] extends K ? key : never]: T[key]
}
