实现通用的 Mutable<T> ，它使 T 中的所有属性都是可变的（不是只读的）。

例如:

```typescript
interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
```
