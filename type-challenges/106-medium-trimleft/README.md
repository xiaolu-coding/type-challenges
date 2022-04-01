实现 TrimLeft<T> ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串开头的空白字符串。

例如
```typescript
type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '
```

解决方法:

> 此题考察的是模板字符串

```typescript
1. 通过TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}`
  ? TrimLeft<R>来清空前面的空白字符
2. 最终结果:
type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}`
  ? TrimLeft<R>
  : S
```
