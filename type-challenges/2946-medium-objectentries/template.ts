type ObjectEntries<T, U extends keyof T = keyof T> = U extends unknown
  ? [
      U,
      T[U] extends infer F | undefined
        ? F extends never
          ? undefined
          : F
        : T[U]
    ]
  : never
