Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

For example

type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'

解决方法:

```typescript
1. 和106题的trimLeft一样，之前是左边空格，现在清右边空格
2. `${" " | "\n" | "\t"}${infer R}` 左边
3. `${infer R}${" " | "\n" | "\t"}` 右边
4. 取并集 `${" " | "\n" | "\t"}${infer R}` | `${infer R}${" " | "\n" | "\t"}`
5. 最终结果:
type Trim<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}`| `${infer R}${" " | "\n" | "\t"}`
  ? Trim<R>
  : S

```
