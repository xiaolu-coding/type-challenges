type TupleToNestedObject<T extends string[] | unknown[], U> = T extends [infer Pre, ...infer Rest]
  ? Record<Pre & string, TupleToNestedObject<Rest, U>>
  : U
