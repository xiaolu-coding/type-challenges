键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。

```typescript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = Promise.all([promise1, promise2, promise3] as const)
```

解决方法:
```typescript
1. 首先接收一个数组，并且是只读，因此可以得到参数如下 ====> function PromiseAll<T extends any[]>(values: readonly [...T])
2. 返回值应该是一个经过Promise的对象  ====> function PromiseAll<T extends any[]>(values: readonly [...T]) : Promise<{}>
3. 对象为key值是否是promise类型，如果是返回类型，如果不是返回值   ====> {[K in keyof T] : T[K] extends Promise<infer R> ? R : T[K]}
4. 最终结果: 
declare function PromiseAll<T extends any[]>(values: readonly [...T]) : Promise<{
  [K in keyof T] : T[K] extends Promise<infer R> ? R : T[K]
}>
```
