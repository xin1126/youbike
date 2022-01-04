<script setup lang="ts">
import useCounterStore from '../stores/counter';

const counter = useCounterStore();
counter.$patch({ count: counter.count + 1 });
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="mt-5">
    <button
      type="button"
      class="bg-slate-700 px-3 py-1 rounded-lg text-white"
      @click="counter.increment"
    >
      測試
    </button>
    <p>{{ counter.count }}</p>
  </div>
</template>

<style lang="scss">
</style>
