<template>
  <div :class="$style.wrapper">
    <div>
      <Input
        v-model:value="filterValue"
        placeholder="Input to filter"
        allow-clear
        style="width: 200px"
      />
    </div>

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
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import * as a from "bigquant-icons-vue";
import { message, Input } from "ant-design-vue";
import fuzzysearch from "fuzzysearch";

const filterValue = ref("");

const allIcons = Object.values(a);
const icons = computed(() => {
  if (!filterValue.value) {
    return allIcons;
  }

  return allIcons.filter((iconItem) =>
    fuzzysearch(
      filterValue.value.toLocaleLowerCase(),
      iconItem.name.toLocaleLowerCase()
    )
  );
});

const handleCopy = (name) => {
  const text = `<${name} />`;
  navigator.clipboard.writeText(text);
  message.success(`${text} Copied!`);
};
</script>

<style module>
.wrapper {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.box {
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
}
.item:hover .icon {
  transform: scale(1.4);
}
.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
}
.name {
  margin-top: 8px;
  font-size: 12px;
  color: #888;
}
</style>
