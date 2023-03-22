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
            <p class="full_name">John doe</p>
            <p class="s-info">Admin</p>
          </div>
        </div>
        <button><SettingIcon /></button>
      </div>
    </div>
    <div class="body">
      <div class="titlebar">
        <SearchBar />
        <div class="options button button--outline ml-auto">
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
// const router = useRouter();
const localePath = useLocalePath();
const sidebarLinks = buildSidebarLinks();

/* const currentRoute = computed(() =>
  sidebarLinks.find(
    (link) => localePath(link.to) === router.currentRoute.value.path
  )
); */
</script>
