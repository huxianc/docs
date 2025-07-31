## 之前没发现[@ctrl/tinycolor](https://github.com/scttcper/tinycolor)，建议使用此工具包，[使用](https://tinycolor.vercel.app/)

- [github](https://github.com/scttcper/tinycolor)
- [npm](https://www.npmjs.com/package/@ctrl/tinycolor)
- [docs](https://tinycolor.vercel.app/docs/)

## isHexColor

判断是不是一个 hex 字符串

#### 使用

```ts
import { isHexColor } from "huxianc-utils";

isHexColor("#f00"); // true
isHexColor("#f00f00"); // true
isHexColor("ff0000"); // false
```

## hex2rgba

颜色由 hex 转换成 rgba，接收 alpha 参数作为透明度

#### 使用

```ts
import { hex2rgba } from "huxianc-utils";

hex2rgba("#f00"); // "rgba(255, 0, 0, 1)"
hex2rgba("#f00", 0.5); // "rgba(255, 0, 0, 0.5)"
hex2rgba("#ff0000"); // "rgba(255, 0, 0, 1)"
hex2rgba("#ff0000", 0.5); // "rgba(255, 0, 0, 0.5)"
```

## hex2RGB

颜色由 hex 转换成 RGB

#### 使用

```ts
import { hex2rgba } from "huxianc-utils";

hex2RGB("#Abc"); // "RGB(170, 187, 204)"
hex2RGB("#f00f00"); // "RGB(240, 15, 0)"
```

## hex2RGB

RGB 颜色值转换为 十六进制颜色值

#### 使用

```ts
import { rgb2Hex } from "huxianc-utils";

rgb2Hex(1, 16, 8); // "#011008"
```

## colorIsDark

判断颜色是不是偏黑色

#### 使用

```ts
import { colorIsDark } from "huxianc-utils";

colorIsDark("#132456"); // true
colorIsDark("#eee"); // false
```

## darken | lighten

将传入的颜色变暗 | 变亮

#### 使用

```ts
import { darken, lighten } from "huxianc-utils";

darken("#FF5733", 20); // '#cc2400'
lighten("#FF5733", 30); // '#ffa37f'
```
