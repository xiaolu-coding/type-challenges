// type DropString<Str extends string, SubStr extends string> =
//   Str extends `${infer Left}${SubStr}${infer Right}`
//     ? DropString<`${Left}${Right}`, SubStr>
//     : Str

// your answers
type MyIncludes<S, R> = S extends `${infer F}${infer Rest}`
  ? R extends F
    ? true
    : MyIncludes<Rest, R>
  : false

type DropString<
  Str extends string,
  SubStr extends string,
  Extra extends string = ""
> = Str extends `${infer F}${infer Rest}`
  ? MyIncludes<SubStr, F> extends true
    ? DropString<Rest, SubStr, Extra>
    : DropString<Rest, SubStr, `${Extra}${F}`>
  : Extra
