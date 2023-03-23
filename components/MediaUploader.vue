<template>
  <div
    id="MediaUploader"
    class="absolute z-10 overflow-hidden flex items-center justify-between self-end"
    :class="{ active: uploader.hasFile }"
  >
    <div
      class="preview overflow-hidden relative flex items-center justify-center"
    >
      <img
        v-if="uploader.fileIsImage"
        :src="uploader.getPreview()"
        :alt="uploader.file?.name"
        class="absolute top-0 left-0 h-full w-full object-cover"
      />
      <SmsIcon v-else></SmsIcon>
    </div>
    <div class="content">
      <h2 class="file_name">{{ uploader.file?.name }}</h2>
      <p class="file_size">{{ uploader.file?.size }}</p>
    </div>
    <button
      class="button button--outline button--close flex items-center justify-center"
      @click="uploader.cancelUpload"
    >
      <CloseIcon />
    </button>
    <div
      class="progress-bar absolute bottom-0 left-0"
      :style="`width: ${uploader.uploadProgress}%;`"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useUploaderStore } from "~/stores/ui/upload";

const uploader = useUploaderStore();

watch(
  () => uploader.hasFile,
  (value) => {
    if (value) uploader.upload();
  }
);
</script>
