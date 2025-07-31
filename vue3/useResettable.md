---
prev:
  text: useCreateReusableTemplate
  link: '/vue3/useCreateReusableTemplate.html'
---
## 重置 ref 或者 reactive 数据

```ts
import { ref, reactive } from "vue";
import { cloneDeep } from "lodash-es";

export function useResettable<T>(value: T, clone = cloneDeep) {
  const initialValue = clone(value);
  const state = ref(value);
  const reset = () => {
    state.value = clone(initialValue);
  };
  return { state, reset };
}

export type Resettable<T> = [T, () => void] & {
  state: T;
  reset: () => void;
};
export function useResettableReactive<T extends object>(
  value: T,
  clone = cloneDeep
): Resettable<T> {
  const state = reactive(clone(value)) as T;
  const reset = () => {
    Object.keys(state).forEach((key) => delete state[key]);
    Object.assign(state, clone(value));
  };
  return Object.assign([state, reset], {
    state,
    reset,
  }) as unknown as Resettable<T>;
}
```
