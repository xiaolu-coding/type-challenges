type FlipArguments<T extends (...arg: any[]) => any> = (
  ...args: Reverse<Parameters<T>>
) => ReturnType<T>
