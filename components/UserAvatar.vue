<template>
  <div
    id="UserAvatar"
    class="avatar"
    :class="{ small: props.small, 'cursor-pointer': props.pointer }"
  >
    <img
      src="https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1233&q=80"
      alt=""
    />
    <VerifiedBadgeIcon class="verified_badge" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  small: Boolean,
  pointer: { type: Boolean, default: true },
});
</script>
