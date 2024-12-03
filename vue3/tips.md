## 获取子组件的生命周期

```vue
<!-- 父组件 -->
<Child @vue:mounted="handleChildMounted" />
```

```ts
import Child from "./Child.vue";

const handleChildMounted = () => {
  console.log("child mounted");
};
```

## 组件二次封装

#### 方法一

```vue
<!-- 子组件 -->
<template>
  <div>Hello world</div>
  <a-input ref="inputRef" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]>
      <slot :name="slot" />
    </template>
  </a-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const inputRef = ref();
defineExpose(
  new Proxy(
    {},
    {
      get(target, key) {
        return inputRef.value?.[key];
      },
      has(target, key) {
        return key in inputRef.value;
      },
    }
  )
);
</script>
```

```vue
<!-- 父组件 -->
<a-button @click="handleClick">Click me</a-button>
<TestInput v-model:value="msg" ref="inputRef">
      <template #addonAfter>
        <span>Click me</span>
      </template>
</TestInput>

<script lang="ts" setup>
import TestInput from "./TestInput.vue";
const msg = ref("test");
const inputRef = ref();
const handleClick = () => {
  inputRef.value.focus();
};
</script>
```

#### 方法二
```vue
<!-- 子组件 -->
<template>
  <div>Hello world</div>
  <component :is="h(Input, $attrs, $slots)" />
</template>

<script lang="ts" setup>
import { h } from "vue";
import { Input } from "ant-design-vue";
</script>
```