实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。

例如
```typescript
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'
```

解决方法:

```typescript
1. 还是考验模板字符串，先判断From放进去会不会等于S  =====> S extends `${infer Pre}${From}${infer Post}}`
2. 如果会等于S，先用To替换From  =====>  S extends `${infer Pre}${From}${infer Post}}` ? `${infer Pre}${To}${infer Post}}`
3. 如果不等于S，返回S      =====> S extends `${infer Pre}${From}${infer Post}}` ? `${infer Pre}${To}${infer Post}}` : S
4. 接下来处理From是''的情况，当From为''时，前面的判断是否等于S肯定是成功的，因此将判断写在 ? 后面, 如果是''，就返回S，如果不是''，再返回`${Pre}${To}${Post}`  =====> 
S extends `${infer Pre}${From}${infer Post}`
  ? From extends ""
    ? S
    : `${Pre}${To}${Post}`
  : S
```
