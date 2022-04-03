实现一个泛型 AppendArgument<Fn, A>，对于给定的函数类型 Fn，以及一个任意类型 A，返回一个新的函数 G。G 拥有 Fn 的所有参数并在末尾追加类型为 A 的参数。
```typescript
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean> 
// 期望是 (a: number, b: string, x: boolean) => number
```

解决方法:

```typescript
1. 考验infer，对参数的增加，因此infer在函数参数这里 ===> Fn extends (...args: infer Args) => infer Res
2. 扩展参数  ====> Fn extends (...args: infer Args) => infer Res ? (...args: [...Args, A]) => Res : never
3. 最终结果为:
type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer Res ? (...args: [...Args, A]) => Res : never
```
