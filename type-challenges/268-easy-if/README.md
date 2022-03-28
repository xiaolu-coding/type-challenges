实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。

举例:
```typescript
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

解决方法:

使用js来实现

```javascript
function If(c: boolean, t: any, f: any): any {
  // 如果c是true 返回 t 否则返回 f
  return c ? t : f
}
```

将js步骤转换为ts <font color=pink>c为C extends boolean, T 为T , F 为F</font>

```
1. 如果c是true 返回 t  ====>  C extends true ? T
2. 如果不是，返回f =====> C extends true ? T : F
```
