创建一个通用的Length，接受一个readonly的数组，返回这个数组的长度。

例如：
```typescript
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

解决方法:

> 根据给定的例子可知, T是只读的数组类型, T extends readonly any[]

使用js方法实现:

```javascript
function Length(arr) {
  return arr.length
}
```

将js步骤转换为ts <font color=pink>arr为T extends readonly any[]</font>

```
1. 返回arr的长度 ======>  T["length"] 
2. 接收返回的长度 ======>  type Length<T extends readonly any[]> = T["length"]
```
