type Reverse<T extends unknown[]> = T extends [infer Pre, ...infer Rest]
  ? [...Reverse<Rest>, Pre]
  : []
