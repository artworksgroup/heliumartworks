<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = "dashboard";

definePageMeta({
  middleware: ["auth"],
});
</script>
