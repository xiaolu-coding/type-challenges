type Chainable<T = {}> = {
  option<P extends string, V>(key: P, value: P extends keyof T ? T[P] : V): Chainable<T & {[props in P]: P extends keyof T ? T[P] : V}>
  get(): T

}