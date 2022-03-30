实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。

K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。

例如
```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
```

解决方法:

使用js来实现
```javascript
function MyReadOnly2(target, arr) {
  // 创建一个空对象
  const res = {}
  // 获取target的key
  const keys = Object.keys(target)
  // 这一步是将不在arr数组中的key添加到res对象中，并赋值为target[key]
  keys
    .filter((key) => arr.indexOf(key) === -1) // 筛选出不在arr中的key
    .forEach((key) => (res[key] = target[key])) // 对筛选出的key进行赋值
  // 创建另外一个空对象，用于取交集
  const res2 = {}
  // 相当于复制一份target对象，但是对value值都加上了readonly
  keys.map((key) => (res2[key] = `readonly ${target[key]}`))
  // 遍历res的key 
  for (let key in res) {
    // 如果res2中有key，代表这个key不需要readonly
    if (key in res) {
      res2[key] = res[key]
    }
  }
  // 最后返回取交集后的对象
  return res2
}
```

> 根据例子可知 arr为T的key数组 ====> arr extends keyof T

将js步骤转换为ts <font color=pink>target为T, arr为K extends of T</font>

```typescript
// 1. 创建一个空对象  res ======> {}
// 2. 获取target的key Object.keys(target)  ======> keyof T
// 3. 这一步是将不在arr数组中的key添加到res对象中，并赋值为target[key] ====>   [key in Exclude<keyof T, K>]: T[key]  这一步就是第三题的内容
// 4. 创建另外一个空对象 res ======> {}
// 5. 复制一份target对象，但是对value值都加上了readonly =======> readonly [key in K]: T[key]
// 6. 取res res2的交集   =======> { [key in Exclude<keyof T, K>]: T[key] } & { readonly [key in K]: T[key] }
// 7. 注意文案给的是第二个参数是可有可无，当没有的时候全体都是readonly，那就给第二个参数默认值 keyof T  =====>  K extends keyof T = keyof T
// 8: 最终结果
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [key in Exclude<keyof T, K>]: T[key]
} & {
  readonly [key in K]: T[key]
}

```
注: 第三步不懂得可以看这: [3-medium-omit](https://github.com/xiaolu-coding/type-challenges/tree/master/type-challenges/3-medium-omit)
