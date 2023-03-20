import { useAuthStore } from "~/stores/repositories/auth";

export default defineNuxtRouteMiddleware((to, _from) => {
  const { isAuthenticated } = useAuthStore();
  const localePath = useLocalePath();

  if (!isAuthenticated) {
    // return abortNavigation();
    navigateTo(localePath("/auth"));
  } else navigateTo(to ? to.fullPath : localePath("/dashboard"));
});
