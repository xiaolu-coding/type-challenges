Fill，一个常见的 JavaScript 函数，现在让我们用类型来实现它。 Fill<T, N, Start?, End?>，可以看到，Fill接受四种类型的参数，其中T和N是必填参数，Start和End是可选参数。 这些参数的要求是：T 必须是一个元组，N 可以是任何类型的值，Start 和 End 必须是大于等于 0 的整数。

```typescript
type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
```

为了模拟真实的功能，测试中可能会包含一些边界条件，希望大家喜欢:)
