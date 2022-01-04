<script setup lang="ts">
import { ref } from 'vue';

const test = ref('');
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="test">
    <p>{{ test }}</p>
  </div>
</template>

<style lang="scss">
</style>
