// type Pop<T extends any[]> = T extends [...infer P, infer R] ? [...P] : never
type Pop<T extends unknown[]> = T extends [] ? [] : T extends [...infer P, infer R] ? [...P] : never

// type Shift<T extends any[]> = T extends [infer R, ...any[]] ? R : never
type Shift<T extends unknown[]> = T extends [] ? [] : T extends [infer R, ...unknown[]] ? R : never

