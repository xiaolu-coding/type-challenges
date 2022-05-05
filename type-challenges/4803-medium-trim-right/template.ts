type TrimRight<S extends string> = S extends `${infer R}${' ' | '\t' | '\n' }` ? TrimRight<R> : S
