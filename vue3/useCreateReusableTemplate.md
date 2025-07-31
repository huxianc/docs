---
next:
  text: useResettable
  link: '/vue3/useResettable.html'
---

## template 中定义组件并复用

```vue
<DefineTemplate v-slot="{ name, instrument,onFoo }" class="flex flex-col gap-[8px]">
    <div class="text-[14px] leading-[16px] line-clamp-2">{{ name }}</div>
    <div class="text-[13px] leading-[16px] text-[#757A88CC] instrument-code" @click="onFoo(111)">{{ instrument }}</div>
</DefineTemplate>

<UseTemplate :name="record.name" :instrument="record.instrument" @foo="console.log" />
```

```tsx
export function useCreateReusableTemplate() {
  let render;
  const DefineTemplate = {
    setup(_, { slots }) {
      return () => {
        render = slots.default;
      };
    },
  };
  const UseTemplate = (props) => {
    return render(props);
  };
  return [DefineTemplate, UseTemplate];
}
const [DefineTemplate, UseTemplate] = useCreateReusableTemplate();
```
