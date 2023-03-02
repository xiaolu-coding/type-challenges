// type ReplaceAll<
//   S extends string,
//   From extends string,
//   To extends string
// > = S extends `${infer Pre}${From}${infer Post}`
//   ? From extends ""
//     ? S
//     : `${Pre}${To}${ReplaceAll<`${Post}`, From, To>}`
//   : S

type ReplaceAll<Str extends string, From extends string, To extends string> =
  Str extends `${infer Left}${From}${infer Right}`
    ? `${Left}${To}${ReplaceAll<Right, From, To>}`
    : Str
