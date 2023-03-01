type MyCamelCase<Str extends string> =
  Lowercase<Str> extends `${infer Left}_${infer Right}${infer Reset}`
    ? `${Left}${Uppercase<Right>}${MyCamelCase<Reset>}`
    : Lowercase<Str>
