// type Zip<
//   T extends unknown[],
//   U extends unknown[],
//   Res extends unknown[] = []
// > = T extends [infer TF, ...infer TRest]
//   ? U extends [infer UF, ...infer URest]
//     ? Zip<TRest, URest, [...Res, [TF, UF]]>
//     : Res
//   : Res

type Zip<One extends unknown[], Other extends unknown[]> = 
  One extends [infer OneFirst, ...infer OneRest] 
    ? Other extends [infer OtherFirst, ...infer OtherRest]
      ? [[OneFirst, OtherFirst], ...Zip<OneRest, OtherRest>] : []
      : []
