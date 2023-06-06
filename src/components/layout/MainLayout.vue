<script setup>
import SidebarLayout from "./SidebarLayout.vue";
</script>

<template>
  <main class="relative">
    <SidebarLayout />
    <article class="min-h-screen bg-base-dark-bg-1 pl-[104px]">
      <router-view />
    </article>
  </main>
</template>
