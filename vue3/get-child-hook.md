# 获取子组件的生命周期

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