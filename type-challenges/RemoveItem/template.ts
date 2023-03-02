type RemoveItem<Arr extends unknown[], Item, Results extends unknown[] = []> =
  Arr extends [infer FirstItem, ...infer RestItem]
    ? isEqual<FirstItem, Item> extends true
      ? RemoveItem<RestItem, Item, Results>
      : RemoveItem<RestItem, Item, [FirstItem, ...Results]>
    : Results
