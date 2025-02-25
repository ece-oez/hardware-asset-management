<script setup>
import { menuItems } from '../config/menuItems.js'
</script>

<template>
  <div class="w-full h-full flex flex-col gap-3 p-3">
    <div
      v-for="menuItem in menuItems"
      class="select-none uppercase text-xl text-stone-900 border-b border-stone-300"
    >
      {{ menuItem.thema }}
      <div
        v-for="element in menuItem.elemente"
        class="cursor-pointer lowercase text-lg flex items-center gap-3 rounded-lg p-1 hover:bg-stone-200 hover:duration-300"
      >
        <RouterLink :to="element.link">
          {{ element.titel }}
          <i :class="element.icon"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
