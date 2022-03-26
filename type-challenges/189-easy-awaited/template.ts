// 先判断T是否Promise，然后判断R是否Promise，是的话继续MyAwaited，不是就返回R，如果不是Promise，返回never
type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> ? (R extends Promise<any> ? MyAwaited<R> : R) : never
