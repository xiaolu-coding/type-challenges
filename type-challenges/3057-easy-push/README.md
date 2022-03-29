在类型系统里实现通用的 Array.push 。

举例如下，
```typescript
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```

解决方法:

```javascript
function Push(arr: any[], target: any) {
  return [...arr, target]
}
```

将js步骤转换为ts <font color=pink>arr为T extends any[], target为U</font>

```
1. [...arr, target] ====> [...T, U]
2. 接收 ====> type Push<T extends any[], U> = [...T, U]
```
