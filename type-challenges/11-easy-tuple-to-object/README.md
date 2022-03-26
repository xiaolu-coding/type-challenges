欢迎 PR 改进翻译质量。

传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

例如：
```typescript
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

解决方法

> 根据给的例子 ['tesla', 'model 3', 'model X', 'model Y'] as const ====> T是readonly的数组 T extends readnoly()[]
> 
> 根据给的希望报错的例子 [[1, 2], {}] as const ====> T的key不是数组和对象类型
> 
> 那么就只能是symbol, string, number  =====> T extends readonly (string | symbol | number)[]

使用js方法实现

```javascript
function TupleToObject(arr) {
  // 创建一个空对象
  const obj = {}
  // 遍历arr
  arr.foreach(item => {
    // 将arr的每一项赋值给obj对象的键
    obj[item] = item
  })
  // 返回对象
  return obj
}
```

将js步骤转换为ts <font color=pink>arr为T</font>

> 1. 创建一个空对象 {}
> 2. 遍历arr数组  ===> P in T[number]
> 3. 将arr的每一项赋值给obj对象的键
>   - 3.1 arr的每一项 item ===> P
>   - 3.2 arr的每一项赋值给obj对象的键 obj[item] = item ====>  [P in T[number]] :
> 4. 返回一个对象  ====> { [P in T[number]] : P }
> 5. 最终结果: type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [P in T[number]] : P
}
