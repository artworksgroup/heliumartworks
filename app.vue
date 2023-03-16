<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useAuthStore } from "./stores/repositories/auth";

const auth = useAuthStore();

onBeforeMount(() => {
  auth.listenToFirebaseAuthStateChanges();
});
</script>
