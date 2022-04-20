实现 lodash 的 _.flip 的类型版本。

类型 FlipArguments<T> 需要函数类型 T 并返回一个新函数类型，该函数类型与 T 的返回类型相同，但参数相反。

例如:

```typescript
type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void
```
