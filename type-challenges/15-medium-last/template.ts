
// type Last<T extends any[]> = T extends [...any[], infer R] ? R : never
type Last<T extends unknown[]> = T extends [...unknown[], infer R] ? R : never

