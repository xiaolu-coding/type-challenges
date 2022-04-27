type Zip<
  T extends unknown[],
  U extends unknown[],
  Res extends unknown[] = []
> = T extends [infer TF, ...infer TRest]
  ? U extends [infer UF, ...infer URest]
    ? Zip<TRest, URest, [...Res, [TF, UF]]>
    : Res
  : Res
