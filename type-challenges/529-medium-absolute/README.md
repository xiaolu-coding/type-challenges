实现Absolute类型。 采用字符串、数字或 bigint 的类型。 输出应该是一个正数字符串

例如:

```typescript
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
```
