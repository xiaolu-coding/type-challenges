type BuildArray<Length extends number, Element = unknown, Arr extends unknown[] = []> =
  Arr['length'] extends Length
    ? Arr
    : BuildArray<Length, Element, [...Arr, Element]>

type Add<Num1 extends number, Num2 extends number> = 
  [...BuildArray<Num1>, ...BuildArray<Num2>]['length']

type Subtract<Num1 extends number, Num2 extends number> =
  BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest]
    ? Rest['length']
    : never

type a = Add<52, 3>
type b = Subtract<52, 3>
