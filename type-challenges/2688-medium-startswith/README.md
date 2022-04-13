实现 StartsWith<T, U> ，它接受两个确切的字符串类型并返回 T 是否以 U 开头

例如: 

```typescript
type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false
```
