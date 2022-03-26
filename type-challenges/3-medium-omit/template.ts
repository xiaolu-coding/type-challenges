type MyOmit<T, K extends keyof T> = {
  // 拿出排除了k的T中的key，然后通过tp拿到属性
  [P in Exclude<keyof T, K>]:  T[P]
}