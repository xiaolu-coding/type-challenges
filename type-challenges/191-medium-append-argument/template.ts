// type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer Res ? (...args: [...Args, A]) => Res : never

type AppendArgument<Fn extends Function, Arg> =
  Fn extends (...args: infer Args) => infer Res
    ? (...args: [...Args, Arg]) => Res : never

type UpperCaseKey<Obj extends object> = {
  [Key in keyof Obj as Uppercase<Key & string>] : Obj[Key]
}    
