type Pop<T extends any[]> = T extends [...infer P, infer R] ? [...P] : never

type Shift<T extends any[]> = T extends [infer R, ...any[]] ? R : never

