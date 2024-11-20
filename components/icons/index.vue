<template>
  <div :class="$style.box">
    <div
      v-for="item in icons"
      :key="item.name"
      :class="$style.item"
      @click="handleCopy(item.name)"
    >
      <component :is="item" :class="$style.icon" />
      <div :class="$style.name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import * as a from "bigquant-icons-vue";
import { message } from "ant-design-vue";

const icons = Object.values(a);

const handleCopy = (name) => {
  const text = `<${name} />`;
  navigator.clipboard.writeText(text);
  message.success(`${text} Copied!`);
};
</script>

<style module>
.box {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 92px);
  gap: 24px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.item:hover {
  transform: scale(1.4);
}
.icon {
  width: 24px;
  height: 24px;
}
.name {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
}
</style>
