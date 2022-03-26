type MyReadonly2<T, K extends keyof T = keyof T> = {
  [key in Exclude<keyof T, K>]: T[key]
} & {
  readonly [key in K]: T[key]
}




// Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
// Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
// Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,