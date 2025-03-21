<script setup>
import { useMenuStore } from '@/stores/menu.js'
import { menuItems } from '../config/menuItems.js'
import TheIcons from '@/components/TheIcons.vue'

const menuStore = useMenuStore()
</script>

<template>
  <div
    class="absolute h-full flex flex-col gap-3 p-3 z-5000 top-0 rounded-e-xl bg-white menuSlideAnimation"
  >
    <div class="flex justify-between">
      <img src="../../public/favicon.png" class="w-9" alt="" />

      <!-- <RouterLink to="/account">
        <TheIcons icon="bi bi-person-circle" class="px-1 text-stone-600 w-max text-3xl"></TheIcons>
      </RouterLink> -->

      <TheIcons
        icon="bi bi-x"
        @click="menuStore.menuBtnState = !menuStore.menuBtnState"
        class="border border-stone-400 px-1 rounded-lg text-stone-600 w-max h-max text-2xl hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
      />
    </div>

    <div
      v-for="menuItem in menuItems"
      class="select-none uppercase text-xl text-stone-900 border-b pb-2 border-stone-300"
    >
      {{ menuItem.thema }}
      <div
        v-for="element in menuItem.elemente"
        class="cursor-pointer normal-case text-lg flex items-center gap-3 rounded-lg p-1 hover:bg-stone-200 hover:duration-300"
        :class="{}"
      >
        <RouterLink :to="element.link" class="w-full">
          <i :class="element.icon"></i>
          {{ element.titel }}
        </RouterLink>
      </div>
    </div>
    <div class="text-sm flex flex-col gap-1">
      <p class="text-stone-400">© 2025 ACE, Inc.</p>
      <p class="text-stone-600">Hardware Asset Management System</p>
      <RouterLink to="/corporation">
        <a class="text-blue-400">ACE Corporation</a>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.menuSlideAnimation {
  animation: menuSlide;
  animation-duration: 0.4s;
}

@keyframes menuSlide {
  0% {
    transform: translate(-350px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}
</style>
