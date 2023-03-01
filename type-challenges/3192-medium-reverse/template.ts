type Reverse<T extends unknown[]> = T extends [infer Pre, ...infer Rest]
  ? [...Reverse<Rest>, Pre]
  : []

type REverseArr<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : []
