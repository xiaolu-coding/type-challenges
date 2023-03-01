// type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer Res ? (...args: [...Args, A]) => Res : never

type AppendArgument<Fn extends Function, Arg> =
  Fn extends (...args: infer Args) => infer Res
    ? (...args: [...Args, Arg]) => Res : never
