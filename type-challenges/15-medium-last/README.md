实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。

例如
```typescript
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
```

解决方法: 

关键: 使用T联合类型去extends遍历判断，然后返回最一个元素

```typescript
type Last<T extends any[]> = T extends [...any[], infer R] ? R : never
```
