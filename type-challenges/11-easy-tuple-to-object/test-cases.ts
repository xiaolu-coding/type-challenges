import { Equal, Expect } from '@type-challenges/utils'
// as const 成为字面量类型常量，不能改变
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const


// type r = readonly ["tesla", "model 3", "model X", "model Y"]
// type r = typeof tuple
// 1.字面量类型

// let str = "123"
// // type s = string
// type s = typeof str

// str = "123123312231"

// const strConst = "234"
// // type sc = "234"
// type sc = typeof strConst


type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>


// const let 创建的 变量空间
// type interface 创建的 类型空间
// 如果变量空间的内容想要穿越到类型空间里进行计算，可以使用typeof