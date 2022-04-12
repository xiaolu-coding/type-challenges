type DropChar<
  T extends string,
  K extends string
> = T extends `${infer S}${infer E}`
  ? S extends K
    ? DropChar<E, K>
    : `${S}${DropChar<E, K>}`
  : T
