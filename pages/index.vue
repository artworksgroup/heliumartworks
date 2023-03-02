<template>
    <div class="p-4">
      <!-- Create a fancy card to welcome user -->
      <div class="text-xl">{{$t('hello')}} To man Helium artworks dev {{ locale }} </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  const {locale} = useI18n();
  </script>
  
  