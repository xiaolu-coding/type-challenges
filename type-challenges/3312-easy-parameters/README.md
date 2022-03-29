实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。

解决方法:

此方法涉及到infer，因此不用js实现了，直接分析ts

```
判断T参数 如果 T 能赋值给函数(param: infer P) => any  
infer R 作为参数传入函数，则R类型为T的类型
1. T extends (...args: [...infer R]) => any ? [...R] : []    infer R入参类型
```
