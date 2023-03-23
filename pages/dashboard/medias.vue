<template>
  <div class="dashboard-page medias">
    <h1 class="dashboard-page-title">My medias.</h1>
    <div class="sep w-full block"></div>
    <div class="header flex items-center">
      <TabBar :items="tabBarItems" />
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
import type { NavItem } from "~/core/types";
import { useMediasStore } from "~/stores/repositories/medias";
import { useUploaderStore } from "~/stores/ui/upload";

const medias = useMediasStore();
const uploader = useUploaderStore();
const fileInput = ref<HTMLInputElement>();

const tabBarItems = ref<Array<NavItem>>([
  {
    to: "/dashboard/medias",
    label: "All",
  },
  {
    to: "/dashboard/collections",
    label: "My collections",
  },
  {
    to: "/dashboard/waiting-medias",
    label: "Waiting medias",
    badgeCount: 0,
  },
  {
    to: "/dashboard/medias-drafts",
    label: "Drafts",
  },
]);

const triggerFileUploader = () =>
  document.getElementById("mediaFileUploader")?.click();

watch(
  () => medias.waitingMedias,
  () => {
    tabBarItems.value[2].badgeCount = medias.waitingMedias;
  }
);
</script>
