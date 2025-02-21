<script setup>
import TheIcons from './TheIcons.vue'
import { useMenuStore } from '@/stores/counter'

const menuStore = useMenuStore()

function toggleMenu() {
  menuStore.menuBtnState = !menuStore.menuBtnState
}
</script>

<template>
  <div class="border-b-2 border-stone-400 text-2xl text-stone-700 flex justify-between">
    <TheIcons
      v-if="menuStore.menuBtnState"
      icon="bi bi-arrow-left-square"
      @click="toggleMenu()"
      class="slide-right"
    />
    <TheIcons v-else icon="bi bi-list" @click="toggleMenu()" class="slide-left" />
    <TheIcons icon="bi bi-person-circle"></TheIcons>
  </div>
</template>

<style scoped></style>
