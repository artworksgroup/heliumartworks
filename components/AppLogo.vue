<template>
  <NuxtLink :to="localePath('auth')" class="logo flex items-center">
    <div class="logo" />
    <span>Helium artworks.</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
