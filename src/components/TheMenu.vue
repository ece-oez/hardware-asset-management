<script setup>
import { useMenuStore } from '@/stores/menu.js'
import { menuItems } from '../config/menuItems.js'
import TheIcons from './TheIcons.vue'

const menuStore = useMenuStore()
</script>

<template>
  <div class="h-full flex flex-col gap-3 p-3 relative top-0 rounded-e-3xl">
    <div class="flex justify-between">
      <TheIcons icon="bi bi-person-circle" @click="" class="px-1 text-stone-600 w-max text-3xl" />
      <TheIcons
        icon="bi bi-x"
        @click="menuStore.menuBtnState = !menuStore.menuBtnState"
        class="border border-stone-400 px-1 rounded-lg text-stone-600 w-max text-2xl"
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
