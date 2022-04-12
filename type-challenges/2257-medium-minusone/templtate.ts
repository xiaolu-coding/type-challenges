type MinusOne<T extends number, U extends unknown[] = []> = [
  ...U,
  unknown
]["length"] extends T
  ? U["length"]
  : MinusOne<T, [...U, unknown]>
