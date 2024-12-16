## storage

格式化计算机存储单位

#### 使用

```ts
import { UNITS, formatBytes } from "huxianc-utils";

formatBytes(1024); // 1.00K
formatBytes(3.6 * 1024 * 1024, UNITS.map((item) => `${item}B`)); // 3.60MB
formatBytes(7.56 * 1024 * 1024 * 1024, undefined, 4); // 7.5600G
formatBytes(6.15 * 1024 * 1024 * 1024 * 1024, undefined, 4, true); // { numStr: '6.1500', unit: 'T', raw: 6.15 }
```

#### 类型

```ts
export declare const UNITS: string[];
export interface FormatBytesReturns {
    numStr: string;
    unit: string;
    raw: number;
}
/**
 * @description 格式化计算机存储单位
 * @param {number} bytes - 字节数
 * @param {string[]} units - 单位数组，默认为["B", "K", "M", "G", "T"]
 * @param {number} fractionDigits - 保留小数位数，默认为2
 * @returns {string} 格式化后的存储单位
 * */
export declare function formatBytes(bytes: number, units?: string[], fractionDigits?: number, returnRaw?: boolean): string | FormatBytesReturns;

```
