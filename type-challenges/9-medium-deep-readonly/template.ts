type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Object 
  ? T[P] extends Function 
    ? T[P] 
    : DeepReadonly<T[P]> 
  : T[P]
}
