<template>
  <div>
    <h4>{{ title }}</h4>
    <div style="display: flex; gap: 8px; align-items: center; margin-top: 12px">
      <InputNumber
        v-model:value="topValue"
        placeholder="请输入上游资金"
        addonAfter="W"
        :min="0"
        style="max-width: 120px"
      />

      <InputNumber
        v-model:value="value"
        placeholder="请输入本金"
        addonAfter="W"
        :min="0"
        style="max-width: 120px"
        @change="handleChange"
      />

      <InputNumber
        v-model:value="ratio"
        placeholder="请输入比例"
        addonAfter="%"
        :min="0"
        :max="100"
        style="max-width: 120px"
      />

      <div>{{ text }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { InputNumber } from "ant-design-vue";
// import { formatNumberWithSeparator } from "huxianc-utils/dist/index.es";
import { formatNumberWithSeparator } from "huxianc-utils";

const props = defineProps({
  title: String,
  storageKey: { type: String, required: true },
});

const topValue = defineModel("topValue", {
  type: Number,
  required: true,
});

const v = localStorage.getItem(props.storageKey);

const value = ref(v ? parseFloat(v) : 0);

const ratio = ref(5);

const text = computed(() => {
  if (!topValue.value) {
    return "上游资金为0，无法计算";
  }

  if (!value.value) {
    return "本金为0，无法计算";
  }
  const w = 10000;
  const c = w * 0.01;
  const r = c * ratio.value;

  const top = topValue.value * r;

  const result = value.value * r;

  return `上游：${formatNumberWithSeparator(
    top
  )}，自己：${formatNumberWithSeparator(result)}`;
});

const handleChange = (val) => {
  localStorage.setItem(props.storageKey, val);
};
</script>
