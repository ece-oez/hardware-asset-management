<script setup>
import { useMenuStore } from '@/stores/counter.js'
import { menuItems } from '../config/menuItems.js'
import TheIcons from './TheIcons.vue'

const menuStore = useMenuStore()
</script>

<template>
  <div class="h-full flex flex-col gap-3 p-3 relative top-0 rounded-e-3xl">
    <TheIcons
      icon="bi bi-arrow-left-square text-2xl"
      @click="menuStore.menuBtnState = !menuStore.menuBtnState"
    />
    <div
      v-for="menuItem in menuItems"
      class="select-none uppercase text-xl text-stone-900 border-b pb-2 border-stone-300"
    >
      {{ menuItem.thema }}
      <div
        v-for="element in menuItem.elemente"
        class="cursor-pointer normal-case text-lg flex items-center gap-3 rounded-lg p-1 hover:bg-stone-200 hover:duration-300"
      >
        <RouterLink :to="element.link" class="w-full">
          <i :class="element.icon"></i>
          {{ element.titel }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
