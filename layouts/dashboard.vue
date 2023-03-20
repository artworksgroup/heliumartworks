<template>
  <div id="Dashboard">
    <div class="sidebar flex flex-col">
      <div class="titlebar">
        <AppLogo />
      </div>

      <div class="nav">
        <NuxtLink
          v-for="(link, i) in sidebarLinks"
          :key="i"
          class="nav-item"
          :to="localePath(link.to)"
        >
          <div class="nav-item-content">
            <Component :is="link.icon"></Component>
            <p class="label">{{ link.label }}</p>
          </div>
        </NuxtLink>
        <div class="nav-indicator"></div>
      </div>

      <div class="footer flex items-center justify-between">
        <div class="profile">
          <UserAvatar></UserAvatar>
          <div class="infos">
            <p class="full_name">{{ auth.user?.email }}</p>
            <p class="s-info">Admin</p>
          </div>
        </div>
        <button><VerifiedBadgeIcon></VerifiedBadgeIcon></button>
      </div>
    </div>
    <div class="body">
      <div class="titlebar">
        <div class="search-bar flex items-center overflow-hidden">
          <MessagesIcon />
          <input type="search" class="h-full flex-1" placeholder="Search..." />
        </div>
        <div class="options ml-auto">
          <NuxtLink class="option">
            <span>Fr</span>
          </NuxtLink>
          <div class="option-dev"></div>
          <NuxtLink class="option">
            <MessagesIcon />
            <span>Help</span>
          </NuxtLink>
        </div>
        <UserAvatar small @click="auth.logout"></UserAvatar>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { buildSidebarLinks } from "~/data/dashboard";
import { useAuthStore } from "~/stores/repositories/auth";

const auth = useAuthStore();
const localePath = useLocalePath();
const sidebarLinks = buildSidebarLinks();
</script>
