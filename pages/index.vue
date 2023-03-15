<template>
    <div class="p-4">
      <AppLogo></AppLogo>
      <div class="text-xl">{{$t('hello')}} To man this happen abon Helium artworks nice {{ locale }} </div>
      <button class="bg-teal-300 p-5 button button--primary">tailwind css test work now check</button>
    </div>
  </template>
  
  
  <script setup lang="ts">
  const {locale} = useI18n();
  </script>
  
  
