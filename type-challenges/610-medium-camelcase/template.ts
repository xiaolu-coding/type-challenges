type CamelCase<S> = S extends `${infer L}-${infer T}${infer R}`
  ? T extends Uppercase<T>
    ? `${L}-${CamelCase<`${T}${R}`>}`
    : `${L}${Uppercase<T>}${CamelCase<R>}`
  : S

type CamelcaseUnion<Item extends string> =
  Item extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelcaseUnion<Rest>}`
    : Item
