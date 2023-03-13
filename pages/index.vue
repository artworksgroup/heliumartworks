<template>
    <div class="p-4">
      <div class="text-xl">{{$t('hello')}} To man this happen abon Helium artworks nice {{ locale }} </div>
      <button class="bg-teal-300 p-5">tailwind css test work</button>
    </div>
  </template>
  
  
  <script setup lang="ts">
  const {locale} = useI18n();
  </script>
  
  
