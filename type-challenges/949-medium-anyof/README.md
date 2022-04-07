实现 Python 喜欢类型系统中的任何函数。 一个类型接受 Array 并在 Array 的任何元素为 true 时返回 true。 如果 Array 为空，则返回 false。

例如:

```typescript
type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
```
