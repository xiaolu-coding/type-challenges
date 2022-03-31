实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。

例如
```typescript
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
```

解决方法:

还是考验infer的使用

```typescript
type Pop<T extends any[]> = T extends [...infer P, infer R] ? [...P] : never

type Shift<T extends any[]> = T extends [infer R, ...any[]] ? R : never
```
