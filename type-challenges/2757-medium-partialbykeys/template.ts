type Merge1<T, U> = Pick<T & U, keyof (T & U)>

type PartialByKeys<T, K = keyof T> = Merge1<
  Pick<Partial<T>, Extract<keyof T, K>>,
  Pick<T, Exclude<keyof T, K>>
>
