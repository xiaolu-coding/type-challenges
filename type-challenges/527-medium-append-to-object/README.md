实现向接口添加新字段的类型。类型接受三个参数。输出应该是具有新字段的对象。

例如:

```typescript
type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
```


解决方法:

```typescript
1. p获取T的key和U =====> [P in keyof T | U]
2. 赋值判断  =====>  P extends keyof T ? T[P] : V
3. 最终结果为:
type AppendToObject<T extends object, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}
```
