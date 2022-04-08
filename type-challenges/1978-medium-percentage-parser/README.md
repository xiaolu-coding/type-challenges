实现百分比解析器。 根据 /^(\+|\-)?(\d*)?(\%)?$/ 正则匹配 T 并得到三个匹配。

结构应该是：[plus or minus, number, unit] 如果不捕获，则默认为空字符串。

例如: 

```typescript
type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'

type R1 = PercentageParser<PString1>  // expected ['', '', '']
type R2 = PercentageParser<PString2>  // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>  // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>  // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>  // expected ["", "85", ""]
```
