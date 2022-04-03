实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。

例如
```typescript
type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
```

解决方法:

```typescript
1. 跟前面的replace差不多，还是考验模板字符串，先判断From放进去会不会等于S  =====> S extends `${infer Pre}${From}${infer Post}}`
2. 如果会等于S，先用To替换From  =====>  S extends `${infer Pre}${From}${infer Post}}` ? `${Pre}${To}${Post}}` 
3. 这里有要递归的情况，也就是对To修改之后的值再去replaceAll ===> S extends `${infer Pre}${From}${infer Post}}` ? `${Pre}${To}${ReplaceAll<`${Post}`, From, To>}}` 
4. 如果不等于S，返回S ======> S extends `${infer Pre}${From}${infer Post}}` ? `${Pre}${To}${ReplaceAll<`${Post}`, From, To>}}` : S
5. 接下来处理From是''的情况，当From为''时，前面的判断是否等于S肯定是成功的，因此将判断写在 ? 后面, 如果是''，就返回S，如果不是''，再返回${Pre}${To}${ReplaceAll<`${Post}`, From, To>}}`
6. 最终结果为:
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Pre}${From}${infer Post}`
  ? From extends ""
    ? S
    : `${Pre}${To}${ReplaceAll<`${Post}`, From, To>}`
  : S
```
