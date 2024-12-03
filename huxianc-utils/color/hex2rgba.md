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
