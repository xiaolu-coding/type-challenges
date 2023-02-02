type StartsWith<T extends string, U extends string> = T extends `${U}${string}`
  ? true
  : false

// 确保T U都是string类型，然后用T去匹配一个模式类型，模式类型的前缀是第二个U，后面为任意字符串
