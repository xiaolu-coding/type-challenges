type NumberS = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type PercentageParser<
  T extends string,
  S extends string = "S",
  Q extends string = "",
  K extends string = ""
> = T extends `${infer R}${infer Y}`
  ? S extends "S"
    ? PercentageParser<
        R extends "+" | "-" ? Y : T,
        "N",
        R extends "+" | "-" ? R : ""
      >
    : S extends "N"
    ? R extends NumberS
      ? PercentageParser<Y, "N", Q, `${K}${R}`>
      : R extends "%"
      ? [Q, K, "%"]
      : [Q, K, ""]
    : never
  : [Q, K, ""]
