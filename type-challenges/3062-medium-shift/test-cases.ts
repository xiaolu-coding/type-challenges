import type { Equal, Expect } from "@type-challenges/utils"
import { ExpectFalse, NotEqual } from "@type-challenges/utils"

type cases = [
  Expect<Equal<Shift1<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift1<["a", "b", "c", "d"]>, ["b", "c", "d"]>>
]
