function DeepReadonly(target) {
  // 创建一个空对象
  const res = {}
  // 遍历target的key
  for (let key in target) {
    // 如果是对象，递归调用
    if (typeof target[key] === "object") {
      target[key] = DeepReadonly(target[key])
    } else {
      // 如果不是对象但是是函数，则直接赋值
      if (typeof target[key] === 'function') {
        target[key] = target[key].toLocaleString()
      }
    }
    res["readonly " + key] = target[key]
  }
  // 返回对象
  return res
}

const target = {
  a: 1,
  b: {
    c: 2
  },
  d: () => 2,
  e: false,
  f: {
    g: {
      h: {
        i: 2
      }
    }
  },
}

console.log(DeepReadonly(target))
