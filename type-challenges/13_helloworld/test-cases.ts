import { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  // HelloWorld不是any类型
  Expect<NotAny<HelloWorld>>,
  // HelloWorld是string类型
  Expect<Equal<HelloWorld, string>>
]