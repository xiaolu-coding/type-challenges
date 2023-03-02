// type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[]
// > = `${B}${E extends [] ? "" : `__${E[number]}`}${M extends []
//   ? ""
//   : `--${M[number]}`}`


type BEM<
  Block extends string,
  Element extends string[],
  Modifiers extends string[]
> = `${Block}__${Element[number]}--${Modifiers[number]}`
