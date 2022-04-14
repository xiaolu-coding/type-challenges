实现一个通用的RequiredByKeys<T, K>，它接受两个类型参数T和K。

K 指定应设置为必需的 T 的属性集。 当未提供 K 时，它应该使所有属性都需要，就像正常的Required<T> 一样。

例如:

```typescript
interface User {
  name?: string
  age?: number
  address?: string
}

type UserPartialName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
```
