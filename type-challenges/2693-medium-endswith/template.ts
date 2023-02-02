type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false

// 确保T U都是string类型，然后用T去匹配一个模式类型，模式类型的前缀是第二个U，前面为任意字符串
