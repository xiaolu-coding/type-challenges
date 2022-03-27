实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。

例如：
```typescript
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```

解决方法:

> 根据给的例子, 得出T接收数组类型， T extends any[]

使用js方法实现

```javascript
function First(arr) {
  // 如果数组长度为0 返回never
  if(arr.length === 0) {
    return 'never'
  } else {
    // 返回第一个值
    return arr[0]
  }
}
```

将js步骤转换为ts <font color=pink>arr为T extends any[]</font>

```
1. 判断arr是否是空数组 使用extends判断 ====> T extends []
2. 如果是空数组，返回never   ======> T extends [] ? never
3. 如果不是空数组，返回第一个值   ======> T extends [] ? never : T[0]
```
