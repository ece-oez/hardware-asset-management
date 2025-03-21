<script setup>
import TheIcons from '@/components/TheIcons.vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()
</script>

<template>
  <div class="border-b-2 border-stone-400 text-2xl text-stone-700 flex justify-between w-full">
    <div class="flex gap-2">
      <TheIcons
        v-if="menuStore.menuBtnState === false"
        icon="bi bi-list"
        @click="menuStore.menuBtnState = !menuStore.menuBtnState"
        :class="{ invisible: menuStore.menuBtnState === true }"
        class="border border-stone-400 px-1 rounded-lg text-stone-600 hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
      />

      <img src="../../public/favicon.png" class="w-9" alt="" />
    </div>

    <RouterLink to="/account">
      <TheIcons icon="bi bi-person-circle"></TheIcons>
    </RouterLink>
  </div>
</template>

<style scoped></style>
