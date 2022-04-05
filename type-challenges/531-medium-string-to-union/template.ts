type StringToUnion<
  T extends string,
  Result = never
> = T extends `${infer Pre}${infer Post}`
  ? StringToUnion<Post, Pre | Result>
  : Result
