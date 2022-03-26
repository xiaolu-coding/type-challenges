不要使用内置的Readonly<T>，自己实现一个。

该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。

也就是不可以再对该对象的属性赋值。

例如：
```typescript
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```


解决方法

先使用js实现

js代码:
```javascript
function MyReadonly(obj) {
  // 创建并返回对象
  const result = {}
  // 遍历obj的key
  for (const key in obj) {
    // 将每个key都加上readonly
    result['readonly' + key] = obj[key]
  }
  // 返回
  return result
}
```

将js步骤转换为ts  注意: **<font color=pink>obj为T</font>**

> 1. 创建一个对象 ====>  {}
> 2. 遍历obj的key
>    - obj的key  ====>  keyof T 
>    - 遍历obj的key ====> P in keyof T 
> 3. 给遍历的key加上readonly  ====> readonly [P in keyof T]
> 4. 取得obj[key]的值  ====> T[P]
> 5. 将obj[key]的值赋值给加上readonly的key ====> readonly [P in keyof T] : T[P]
> 6. 返回对象  =====> { readonly [P in keyof T] : T[P] }



