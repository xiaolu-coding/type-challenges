type fibonacciLoop<
  PrevArr extends unknown[],
  CurrentArr extends unknown[],
  IndexArr extends unknown[] = [],
  Num extends number = 1
> = IndexArr["length"] extends Num
  ? CurrentArr["length"]
  : fibonacciLoop<
      CurrentArr,
      [...PrevArr, ...CurrentArr],
      [...IndexArr, unknown],
      Num
    >

type Fibonacci<Num extends number> = fibonacciLoop<[1], [], [], Num>
// type FibinacciResult = 55
type FibinacciResult = Fibonacci<10>
