<template>
  <div id="Dashboard">
    <div class="sidebar">
      <div class="titlebar">
        <AppLogo />
      </div>
      <div class="profile">
        <UserAvatar></UserAvatar>
        <div class="infos">
          <p class="full name">John doe</p>
          <p class="full name">JohnDoe@5243</p>
        </div>
      </div>
      <div class="nav">
        <NuxtLink
          v-for="(link, i) in sidebarLinks"
          :key="i"
          class="nav-item"
          :to="localePath(link.to)"
        >
          <Component :is="link.icon"></Component>
          <p class="label">{{ link.label }}</p>
        </NuxtLink>
      </div>
    </div>
    <div class="body">
      <div class="titlebar justify-between">
        <div class="flex items-center">
          <NuxtLink>Medias stocks</NuxtLink>
          <NuxtLink>Free</NuxtLink>
          <NuxtLink>Business</NuxtLink>
        </div>
        <div class="flex items-center">
          <NuxtLink class="flex items-center">
            <iconCheck></iconCheck>
            <span>FR</span>
          </NuxtLink>
          <NuxtLink class="flex items-center">
            <span>Help</span>
            <iconCheck></iconCheck>
          </NuxtLink>
          <UserAvatar class="cursor-pointer" @click="auth.logout"></UserAvatar>
        </div>
      </div>
      <div class="page">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sidebarLinks } from "~/data/dashboard";
import { useAuthStore } from "~/stores/repositories/auth";

const auth = useAuthStore();
</script>
