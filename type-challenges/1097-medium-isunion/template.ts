// type IsUnion<T, S = T> = T extends S ? [S] extends [T] ? false : true: false

type IsUnion<A, B = A> = 
  A extends A
    ? [B] extends [A]
      ? false
      : true
    : never
