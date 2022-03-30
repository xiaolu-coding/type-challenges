function MyReadOnly2(target, arr) {
  // 创建一个空对象
  const res = {}
  // 获取target的key
  const keys = Object.keys(target)
  // 这一步是将不在arr数组中的key添加到res对象中，并赋值为target[key]
  keys
    .filter((key) => arr.indexOf(key) === -1) // 筛选出不在arr中的key
    .forEach((key) => (res[key] = target[key])) // 对筛选出的key进行赋值
  // 创建另外一个空对象，用于取交集
  const res2 = {}
  // 相当于复制一份target对象，但是对value值都加上了readonly
  keys.map((key) => (res2[key] = `readonly ${target[key]}`))
  // 遍历res的key 
  for (let key in res) {
    // 如果res2中有key，代表这个key不需要readonly
    if (key in res) {
      res2[key] = res[key]
    }
  }
  // 最后返回取交集后的对象
  return res2
}

const target = {a: 1, b: 2, c: 3}
const arr = ['a']

console.log(MyReadOnly2(target, arr))
