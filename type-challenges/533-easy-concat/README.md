在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

举例，
```typescript
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

解决方法:

使用js方法来实现
```javascript
function Concat(arr1, arr2) {
  // 直接返回扩展运算符拼接的数组
  return [...arr1, ...arr2]
}
```

将js步骤转换为ts <font color=pink>arr1为T extends any[], arr2为U extends any[]</font>

```
1. 将arr1和arr2通过扩展运算符拼接成一个数组 ====>  [...T, ...U]
2. 接收返回的数组 =====> type Concat<T extends any[], U extends any[]> = [...T, ...U]
```
