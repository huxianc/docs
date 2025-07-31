# 组件二次封装

#### 最终方法（可以无视下面的方法）

```vue
<template>
  <div>
    <div>二次封装 input 自定义的内容</div>
    <component
      :is="h(Input, { ...$attrs, ...props, ref: changeRef }, $slots)"
    />
  </div>
</template>

<script lang="ts" setup>
import { h, getCurrentInstance } from "vue";
import { Input } from "ant-design-vue";
import type { InputProps } from "ant-design-vue";

// bool类型 默认值为true的 未设置默认值vue会把他设置为undefined
const props = withDefaults(defineProps<Partial<InputProps>>(), {
  bordered: true,
});

const vm = getCurrentInstance();

function changeRef(inputInstance) {
  if (vm) {
    vm.exposed = vm.exposeProxy = inputInstance || {};
  }
}
</script>
```

#### 远古方法

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
