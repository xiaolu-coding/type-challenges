不使用 Omit 实现 TypeScript 的 Omit<T, K> 范型。

Omit 会创建一个省略 K 中字段的 T 对象。

例如：
```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```

解决方法:

使用js来实现
```javascript
function MyOmit(target, arr) {
  // 创建一个空对象
  const res = {}
  // 获取target对象的key数组
  const keys = Object.keys(target)
  keys
    .filter((key) => arr.indexOf(key) === -1)  // 筛选出不在arr中的key
    .forEach((key) => (res[key] = target[key])) // 对筛选出的key进行赋值
  // 返回对象
  return res
}
```

> 根据例子可知 arr都是T的key =====> arr extends keyof T

将js步骤转换为ts <font color=pink>target为T, arr为K extends of T</font>

```
1. 创建一个空对象  =====>  {}
2. 获取target对象的key数组  Object.keys(target)  =====>  keyof T
3. 过滤出不在arr中的key  key.filter((key) => arr.indexOf(key) === -1) =====>  Exclude<keyof T, K>
4. 对筛选出的key进行赋值  res[key] = target[key] =====>   [P in Exclude<keyof T, K>]: T[P]
```
