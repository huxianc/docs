## formatNumberWithSeparator

格式化数字，添加千位分隔符

#### 使用

```ts
import { formatNumberWithSeparator } from "huxianc-utils";

formatNumberWithSeparator(1234567.89); // => "1,234,567.89"
formatNumberWithSeparator(1234567.89, { separator: "." }); // => "1.234.567.89"
formatNumberWithSeparator(1234567.89, { fractionDigits: 0 }); // => "1,234,568"
```

#### 类型

```ts
export declare function formatNumberWithSeparator(
  num: number | string,
  options?: FormatNumberWithSeparatorOptions
): string;

interface FormatNumberWithSeparatorOptions {
  /** 分隔符 默认值 , */
  separator?: string;
  /** 保留几位小数 默认值 2 */
  fractionDigits?: number;
}
```
