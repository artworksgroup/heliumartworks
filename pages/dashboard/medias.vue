<template>
  <div class="dashboard-page medias">
    <h1 class="dashboard-page-title">My medias.</h1>
    <div class="sep w-full block"></div>
    <div class="header flex items-center">
      <TabBar />
      <button class="button button--outline">filter</button>
      <button class="button button--primary" @click="triggerFileUploader">
        Import
      </button>
    </div>
    <NuxtPage></NuxtPage>
    <!-- <MediaUploader v-model="openModal" /> -->
    <input
      id="mediaFileUploader"
      ref="fileInput"
      type="file"
      name="mediaFileUploader"
      hidden
      @change="uploader.selectFile(fileInput)"
    />
  </div>
</template>

<script setup lang="ts">
import { useUploaderStore } from "~/stores/ui/upload";

const uploader = useUploaderStore();
const fileInput = ref<HTMLInputElement>();

const triggerFileUploader = () =>
  document.getElementById("mediaFileUploader")?.click();
</script>
