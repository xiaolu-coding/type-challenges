type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Pre}${From}${infer Post}`
  ? From extends ""
    ? S
    : `${Pre}${To}${ReplaceAll<`${Post}`, From, To>}`
  : S

