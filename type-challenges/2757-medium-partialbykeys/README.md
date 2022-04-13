实现一个通用的 PartialByKeys<T, K>，它接受两个类型参数 T 和 K。

K 指定应设置为可选的 T 的属性集。 当没有提供 K 时，它应该使所有属性都是可选的，就像普通的 Partial<T> 一样。

例如:

```typescript
interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
```
