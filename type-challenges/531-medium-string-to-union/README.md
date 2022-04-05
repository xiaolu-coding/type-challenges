实现 String 到 Union 类型。 输入字符串参数。 输出应该是输入字母的并集

例如:

```typescript
type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
```
