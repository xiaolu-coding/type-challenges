type IsTuple<T> = T extends readonly unknown[]
  ? number extends T["length"] // `T['length'] extends number`  is not work, because exact number like 1 extends number
    ? false
    : true
  : false
