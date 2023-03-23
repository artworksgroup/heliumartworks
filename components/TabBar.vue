<template>
  <div class="tabs h-full flex mr-auto relative items-center">
    <NuxtLink
      v-for="(item, i) in items"
      :key="i"
      :to="localePath(item.to)"
      class="tab"
    >
      <span>{{ item.label }}</span>
      <div
        v-if="item.badgeCount !== undefined && item.badgeCount != 0"
        class="badge ml-[5px]"
      >
        {{ item.badgeCount }}
      </div>
    </NuxtLink>
    <div class="tab-active-indicator" />
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from "~/core/types";

const localePath = useLocalePath();

defineProps({
  items: { type: Array<NavItem>, required: true },
});
</script>
