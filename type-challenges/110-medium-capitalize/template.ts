// type MyCapitalize<S extends string> = S extends `${infer R}${infer T}` ? `${Uppercase<R>}${T}` : ''

type MyCapitalize<Str extends string> =  Str extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : Str
