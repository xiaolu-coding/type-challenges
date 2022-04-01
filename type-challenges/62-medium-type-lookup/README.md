有时，您可能希望根据其属性在并集中查找类型。

在此挑战中，我们想通过在联合Cat | Dog中搜索公共type字段来获取相应的类型。换句话说，在以下示例中，我们期望LookUp<Dog | Cat, 'dog'>获得Dog，LookUp<Dog | Cat, 'cat'>获得Cat。

```typescript
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
```

解决方法:

> 因为是联合类型，肯定会分布式遍历，所以只需要考虑给的第二个参数，是否与第一个参数联合类型的type属性是否相同即可

```typescript
1. 是否与第一个参数联合类型的type属性是否相同 ====> U extends { type: T }
2. 如果相同返回U      ======> U extends { type: T } ? U
3. 如果不同不返回，继续联合类型遍历      ======> U extends { type: T } ? U : never
4. 最终结果为:
type LookUp<U, T> = U extends { type: T } ? U : never
```
