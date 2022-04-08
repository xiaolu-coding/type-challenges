实现 RemoveIndexSignature<T> ，从对象类型中排除索引签名。

例如:

```typescript
type Foo = {
  [key: string]: any;
  foo(): void;
}

type A = RemoveIndexSignature<Foo>  // expected { foo(): void }
```
