实现内置的Exclude <T，U>类型，但不能直接使用它本身。

从联合类型T中排除U的类型成员，来构造一个新的类型。

解决方法:

使用js方法实现:

```javascript
function MyExclude(arr1, arr2) {
  // 返回arr1不在arr2中的值
  return arr1.filter(item => !arr2.includes(item))
}
```

将js步骤转换为ts <font color=pink>arr1为T arr2为U</font>

```
1. arr1.filter 遍历arr1中的值去判断是否在arr2中 ====> T extends U
2. 如果在就不返回 ====>  T extends U ? never
3. 如果不在就返回 ====>  T extends U ? never : T
```
