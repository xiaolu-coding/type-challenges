type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Pre}${From}${infer Post}`
  ? From extends ""
    ? S
    : `${Pre}${To}${Post}`
  : S
