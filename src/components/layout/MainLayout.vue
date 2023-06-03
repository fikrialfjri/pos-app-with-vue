<script setup>
import SidebarLayout from "./SidebarLayout.vue";
</script>

<template>
  <main class="relative">
    <SidebarLayout />
    <article class="pl-[104px] min-h-screen bg-base-dark-bg-1">
      <router-view />
    </article>
  </main>
</template>
