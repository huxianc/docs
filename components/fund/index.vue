<template>
  <div>
    <Item title="长线" v-model:topValue="longTopValue" storageKey="FUND_LONG" />
    <Item title="中线" v-model:topValue="mediumTopValue" storageKey="FUND_MEDIUM" />
    <Item title="短线" v-model:topValue="shortTopValue" storageKey="FUND_SHORT" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Item from "./item.vue";

const longTopValue = ref(30);

const mediumTopValue = ref(70);

const shortTopValue = ref(10);
</script>
