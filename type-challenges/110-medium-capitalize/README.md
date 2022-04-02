实现Caplitaze<T>，将字符串的第一个字母转换为大写，其余字母保持原样。

例如
```typescript
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
```

解决方法:

```typescript
1. 还是考验模板字符串，首先要拿到首字母 ====> S extends `${infer R}${infer T}` ? `${R}`
2. 首字母大写 ====> S extends `${infer R}${infer T}` ? `${Uppercase<R>}`
3. 拼接下剩余字符串 ====> S extends `${infer R}${infer T}` ? `${Uppercase<R>}${T}`
4. 处理空白字符串的情况 ====> S extends `${infer R}${infer T}` ? `${Uppercase<R>}${T}` : ''
最终结果为:
S extends `${infer R}${infer T}` ? `${Uppercase<R>}${T}` : ''
```
