// type StringToUnion<
//   T extends string,
//   Result = never
// > = T extends `${infer Pre}${infer Post}`
//   ? StringToUnion<Post, Pre | Result>
//   : Result

type StringToUnion<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? First | StringToUnion<Rest>
    : never
