<template>
  <div class="items w-full lg:columns-3 sm:columns-2 gap-12">
    <img
      v-for="i in 10"
      :key="i"
      class="item"
      src="https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1233&q=80"
    />
  </div>
</template>
