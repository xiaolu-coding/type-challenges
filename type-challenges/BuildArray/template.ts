type BuildArray<Length extends number, Element = unknown, Arr extends unknown[] = []> =
  Arr['length'] extends Length
    ? Arr
    : BuildArray<Length, Element, [...Arr, Element]>
