实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。

您可以假设在此挑战中我们仅处理对象。数组，函数，类等都无需考虑。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。

例如
```typescript
type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type Todo = DeepReadonly<X> // should be same as `Expected`
```
解决方法:

使用js实现

```javascript
function DeepReadonly(target) {
  // 创建一个空对象
  const res = {}
  // 遍历target的key
  for (let key in target) {
    // 如果是对象，递归调用
    if (typeof target[key] === "object") {
      target[key] = DeepReadonly(target[key])
    } else {
      // 如果不是对象但是是函数，则直接赋值
      if (typeof target[key] === 'function') {
        target[key] = target[key].toLocaleString()
      }
    }
    res["readonly " + key] = target[key]
  }
  // 返回对象
  return res
}
```



将js步骤转换为ts <font color=pink>target为T</font>

```typescript
// 1. 创建一个空对象res =====> {}
// 2. 遍历target的key =====> P in keyof T
// 3. 取到target[key]的值 =====> T[P]
// 4. 判断target[key]是否是object类型 ======> T[P] extends Object
// 5. 后面就是一系列判断，最后结果为：
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Object
    ? T[P] extends Function
      ? T[P]
      : DeepReadonly<T[P]>
    : T[P]
}
```
