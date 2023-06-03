<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const navItems = [
  { name: "Home", path: "/", icon: "hi-solid-clipboard-list" },
  { name: "Dashboard", path: "/dashboard", icon: "hi-chart-pie" },
  { name: "Setting", path: "/setting", icon: "hi-cog" },
];
</script>

<template>
  <aside
    class="absolute left-0 top-0 flex min-h-screen w-[104px] flex-col gap-4 rounded-e-2xl bg-base-dark-bg-2 py-6"
  >
    <header class="flex items-center justify-center">
      <div
        class="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EB966A]/20"
      >
        <v-icon name="md-storefront-outlined" class="h-10 w-10 text-primary" />
      </div>
    </header>

    <section class="flex flex-1 flex-col justify-between gap-3">
      <ul class="flex flex-col gap-3 pl-3">
        <template v-for="item in navItems" :key="item.path">
          <li
            class="rounded-l-xl py-3 pl-3 pr-6 duration-300"
            :class="
              item.path === route.fullPath
                ? 'bg-base-dark-bg-1'
                : 'bg-transparent'
            "
          >
            <router-link :to="item.path">
              <button
                class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-none outline-none duration-150 hover:bg-primary hover:text-white"
                :class="
                  item.path === route.fullPath
                    ? 'bg-primary text-white'
                    : 'bg-transparent text-primary'
                "
              >
                <v-icon :name="item.icon" class="h-6 w-6" />
              </button>
            </router-link>
          </li>
        </template>
      </ul>

      <footer class="">
        <ul class="flex flex-col gap-3 pl-3">
          <li class="py-3 pl-3 pr-6">
            <button
              class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-none bg-transparent text-primary outline-none duration-150 hover:bg-primary hover:text-white"
            >
              <v-icon name="hi-logout" class="h-6 w-6" />
            </button>
          </li>
        </ul>
      </footer>
    </section>
  </aside>
</template>
