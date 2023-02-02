type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Pre}${From}${infer Post}`
  ? From extends ""
    ? S
    : `${Pre}${To}${Post}`
  : S

// S From To都要为String类型， 用S去匹配模式类型，此模式类型为Pre From Post，如果匹配，用From去匹配"", 如果陪陪返回S，若果没有，返回To替换From
