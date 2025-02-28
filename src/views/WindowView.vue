<script setup>
import TheMenu from '@/components/TheMenu.vue'
import TopBar from '@/components/TopBar.vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()
</script>

<template>
  <div class="h-screen w-full flex flex-row">
    <TheMenu v-if="menuStore.menuBtnState" class="w-1/5 border-e-2 border-stone-400 shadow-2xl" />

    <div class="w-full h-screen">
      <TopBar class="w-full h-max p-3"></TopBar>

      <RouterView class="w-full h-[94%]"></RouterView>
    </div>
  </div>
</template>

<style scoped></style>
