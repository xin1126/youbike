<script setup lang="ts">
import { ref } from 'vue';

const test = ref<string>('test');
</script>

<template>
  <Router-view />
  {{ test }}
</template>

<style></style>
