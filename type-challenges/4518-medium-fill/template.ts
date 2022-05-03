type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  StartArr extends unknown[] = [],
  EndArr extends unknown[] = []
> = T extends [infer U, ...infer Rest]
  ? Start extends StartArr["length"]
    ? EndArr["length"] extends End
      ? T
      : [N, ...Fill<Rest, N, Start, End, [...StartArr], [...EndArr, unknown]>]
    : [
        U,
        ...Fill<
          Rest,
          N,
          Start,
          End,
          [...StartArr, unknown],
          [...EndArr, unknown]
        >
      ]
  : []                
 