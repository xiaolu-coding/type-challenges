type LengthOfString<S extends string, A extends any[] = []> = S extends `${infer T}${infer R}`  ? R extends '' ? [...A, S]['length'] :  LengthOfString<R, [...A, S]> : 0
