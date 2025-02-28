<script setup>
import TheIcons from './TheIcons.vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()
</script>

<template>
  <div class="border-b-2 border-stone-400 text-2xl text-stone-700 flex justify-between">
    <TheIcons
      icon="bi bi-list"
      @click="menuStore.menuBtnState = !menuStore.menuBtnState"
      :class="{ invisible: menuStore.menuBtnState === true }"
    />
    <TheIcons icon="bi bi-person-circle"></TheIcons>
  </div>
</template>

<style scoped></style>
