// 先判断T是否Promise，然后判断R是否Promise，是的话继续MyAwaited，不是就返回R，如果不是Promise，返回never
type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : never

// await不好实现，涉及generator迭代器，因此我们从test-cases直接来看
// 首先await 接收Promise类型，如果不是promise类型的就返回never
// 如果继续是promise，递归调用。如果不是就返回类型

// type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
//   ? R extends Promise<any>
//     ? MyAwaited<R>
//     : R
//   : never
