实现泛型GetReadonlyKeys<T>，该GetReadonlyKeys<T>返回对象的只读键的并集。

例如

interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"